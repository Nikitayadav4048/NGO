@echo off
echo Installing real-time dependencies...

echo Installing backend dependencies...
cd backend
npm install socket.io

echo Installing frontend dependencies...
cd ..\frontend
npm install socket.io-client

echo Dependencies installed successfully!
echo.
echo To start the application:
echo 1. Backend: cd backend && npm start
echo 2. Frontend: cd frontend && npm run dev
pause