# Rising Star Academy - Setup & Configuration Guide

## ✅ Changes Made

### 1. **Join Us Button Link Fixed**
   - **File**: `frontend/src/components/Background.jsx`
   - **Change**: The "Join Prime Academy Now" button on the homepage now links to the `/joinus` page
   - **How to use**: Click the button and users will be directed to the join form

### 2. **Backend Analysis**
   - **Status**: ✅ Backend is REQUIRED and should NOT be removed
   - **Reason**: It stores all student registration data in MongoDB
   - **Functionality**: 
     - POST `/api/users/join` - Saves new student registrations
     - GET `/api/users` - Retrieves all registrations (sorted by newest first)
     - GET `/api/users/all` - Retrieves all registrations

### 3. **EmailJS Configuration Fixed**
   - **File**: `frontend/src/components/Joinus.jsx`
   - **Changes**:
     - Removed hardcoded credentials (security risk)
     - Added proper environment variable initialization
     - Added EmailJS init verification
     - Email sending is now optional (doesn't block form submission)
   
   **Why it wasn't working**:
     - Credentials were hardcoded as strings
     - No proper initialization with `emailjs.init()`
     - Public key was exposed in source code (security vulnerability)

## 🔧 Setup Instructions

### Frontend Setup

1. **Create `.env.local` file** in `risingstaracademy/frontend/`:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
   VITE_API_URL=http://localhost:3000
   ```

2. **Get EmailJS Credentials** (if not done already):
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template for join confirmations
   - Copy these values:
     - Public Key (from Account settings)
     - Service ID (from Email Services)
     - Template ID (from Email Templates)
   - Paste into `.env.local`

3. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

### Backend Setup

1. **Create `.env` file** in `risingstaracademy/backend/`:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   PORT=3000
   ```

2. **Get MongoDB URI**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account
   - Create a cluster
   - Create a database user
   - Get connection string and replace `username:password` and `database_name`

3. **Install dependencies**:
   ```bash
   cd backend
   npm install
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```
   Server will start at `http://localhost:3000`

## 🚀 Testing the Integration

1. **Start backend**: `npm run dev` (in backend folder)
2. **Start frontend**: `npm run dev` (in frontend folder)
3. **Go to homepage**: `http://localhost:5173`
4. **Click "Join Prime Academy Now"** button
5. **Fill the form and submit**
6. You should see:
   - ✅ Success message ("Joined successfully!")
   - 📧 Email confirmation sent (if EmailJS is configured)
   - Data saved in MongoDB

## ⚠️ Security Notes

- **Never commit `.env` files** - Add to `.gitignore`
- **Never expose API keys** - Keep them in environment variables only
- **Regenerate EmailJS keys** if they were exposed in this codebase
- **Use `.env.example`** for reference on required variables

## 📋 Files Modified

- ✅ `frontend/src/components/Background.jsx` - Added Link to join button
- ✅ `frontend/src/components/Joinus.jsx` - Fixed EmailJS configuration
- ✅ `frontend/.env.example` - Created environment variables template
- ✅ `backend/.env.example` - Created environment variables template

## 🐛 Troubleshooting

### Email not sending?
- Check `.env.local` has correct EmailJS credentials
- Verify template and service IDs exist in EmailJS dashboard
- Check browser console for specific errors
- Example console log will appear if EmailJS is not initialized

### Form submission fails?
- Check if backend is running on `http://localhost:3000`
- Verify MONGO_URI is correct in backend `.env`
- Check browser Network tab for API response errors

### CORS errors?
- Backend CORS is configured for `http://localhost:5173` (frontend dev server)
- For production, update `allowedOrigins` in `backend/server.js`
