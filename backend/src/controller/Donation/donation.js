import Donation from "../../model/Donation/donation.js";
import User from "../../model/Auth/auth.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

// Initialize Razorpay only if keys are available
let razorpay = null;
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
    razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
}


// Create Razorpay order for online payments
export const createDonationOrder = async (req, res) => {
    try {
        const { amount, modeofDonation } = req.body;
        const userId = req.user._id;

        // Check if Razorpay is configured
        if (!razorpay) {
            return res.status(500).json({ 
                message: 'Payment gateway not configured. Please contact administrator.' 
            });
        }

        // Validate required fields
        if (!amount || !modeofDonation) {
            return res.status(400).json({ 
                message: 'Amount and payment mode are required' 
            });
        }

        // Validate amount
        if (amount < 1) {
            return res.status(400).json({ 
                message: 'Amount must be at least 1' 
            });
        }

        // Validate payment mode
        if (!["bankTransfer", "upi"].includes(modeofDonation)) {
            return res.status(400).json({ 
                message: 'Only bankTransfer and upi are supported' 
            });
        }

        // Create Razorpay order
        const options = {
            amount: Math.round(amount * 100), // Razorpay expects amount in paise
            currency: "INR",
            receipt: `donation_${Date.now()}`,
            notes: {
                userId: userId.toString(),
                modeofDonation,
                donorName: req.user.fullName || "Anonymous",
                donorEmail: req.user.email || "noemail@example.com"
            }
        };

        const order = await razorpay.orders.create(options);

        // Create donation record with pending status
        const donation = await Donation.create({
            userId,
            amount,
            modeofDonation,
            razorpayOrderId: order.id,
            paymentStatus: "pending",
            donorName: req.user.fullName || "Anonymous",
            donorEmail: req.user.email || "noemail@example.com",
            donorPhone: req.user.contactNumber || "0000000000"
        });

        res.json({
            success: true,
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
            key_id: process.env.RAZORPAY_KEY_ID,
            details: {
                enteredAmount: amount,
                totalAmountINR: amount,
                modeofDonation: modeofDonation,
                donorName: req.user.fullName || "Anonymous",
                donorEmail: req.user.email || "noemail@example.com"
            }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Verify Razorpay payment
export const verifyDonationPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Verify the payment signature
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ message: "Payment verification failed" });
        }

        // Find the donation record by order ID
        const donation = await Donation.findOne({ razorpayOrderId: razorpay_order_id });
        if (!donation) {
            return res.status(404).json({ message: "Donation record not found" });
        }

        // Update donation with payment details
        donation.razorpayPaymentId = razorpay_payment_id;
        donation.razorpaySignature = razorpay_signature;
        donation.paymentStatus = "completed";
        await donation.save();

        res.json({ 
            success: true, 
            message: "Payment verified and donation completed",
            donation: {
                _id: donation._id,
                amount: donation.amount,
                paymentStatus: donation.paymentStatus,
                razorpayPaymentId: donation.razorpayPaymentId
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




// Get user donations with total amount
export const getUserDonations = async (req, res) => {
    try {
        const userId = req.user._id;

        // Get all donations for the user
        const donations = await Donation.find({ userId })
            .select('amount paymentStatus donorName donorEmail donorPhone modeofDonation createdAt')
            .sort({ createdAt: -1 }); // Latest donations first

        // Calculate total amount from completed donations only
        const totalAmount = donations
            .filter(donation => donation.paymentStatus === 'completed')
            .reduce((sum, donation) => sum + donation.amount, 0);

        // Count total donations
        const totalDonations = donations.length;
        const completedDonations = donations.filter(donation => donation.paymentStatus === 'completed').length;
        const pendingDonations = donations.filter(donation => donation.paymentStatus === 'pending').length;

        res.json({
            success: true,
            data: {
                donations,
                summary: {
                    totalAmount,
                    totalDonations,
                    completedDonations,
                    pendingDonations
                }
            }
        });

    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
};