import express from "express";
import { 
    createDonationOrder, 
    getUserDonations, 
    verifyDonationPayment
} from "../../controller/Donation/donation.js";
import { requireAuth } from "../../middleware/auth.js";

const donationRouter = express.Router();

// Create Razorpay order for online payments (bankTransfer, upi)
donationRouter.post("/createOrder", requireAuth, createDonationOrder);

// Verify Razorpay payment
donationRouter.post("/verifyPayment", verifyDonationPayment);


// Get user donations with total amount
donationRouter.get("/user-donations", requireAuth, getUserDonations);

export default donationRouter;
