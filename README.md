# Prime Badminton Academy - Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

A modern frontend for Prime Badminton Academy built with React, Vite, and Tailwind CSS.

## 🚀 Quick Deploy to Netlify

### Option 1: Connect GitHub (Recommended)

1. **Fork or Push to GitHub**
   ```bash
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub" and authorize
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

3. **Add Environment Variables**
   - In Netlify: Site settings → Build & deploy → Environment
   - Add these variables:
     ```
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     ```

### Option 2: Deploy with Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

## 📦 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local and add your EmailJS credentials
# VITE_EMAILJS_PUBLIC_KEY=your_key
# VITE_EMAILJS_SERVICE_ID=your_service_id
# VITE_EMAILJS_TEMPLATE_ID=your_template_id

# Start development server
npm run dev
```

Visit `http://localhost:5173`

## 🏗️ Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The `dist` folder is ready to deploy!

## 📝 Environment Variables

Create a `.env.local` file (not committed to Git):

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
```

**Get these from:**
1. [EmailJS.com](https://www.emailjs.com/) - Sign up for free
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template for join confirmations
4. Copy your Public Key, Service ID, and Template ID

## 🎨 Features

- ✅ Responsive design with Tailwind CSS
- ✅ 3D effects with GSAP animations
- ✅ Join form with EmailJS integration
- ✅ Multi-page routing with React Router
- ✅ Toast notifications
- ✅ Production-ready build

## 🔒 Security

- ✅ Environment variables kept in `.env.local` (not committed)
- ✅ Sensitive credentials hidden from GitHub
- ✅ `.gitignore` protects all `.env` files
- ✅ Safe to deploy anywhere

## 📂 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── css/            # Stylesheets
│   ├── assets/         # Images and media
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .env.example        # Environment variables template
├── .env.local          # Local environment variables (not committed)
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Dependencies
```

## 🚢 Deployment Checklist

- [x] All `.env.local` files added to `.gitignore`
- [x] `.env.example` has no real credentials
- [x] `netlify.toml` configured for SPA routing
- [x] Production build working locally (`npm run build`)
- [x] No console errors in production build
- [x] All environment variables set in Netlify

## ❓ Troubleshooting

### Build fails on Netlify
- Check Node.js version: Netlify uses Node 18 by default
- Try deleting `node_modules` and `package-lock.json`, then rebuild
- Check build logs in Netlify dashboard

### Join form not working
- Verify EmailJS credentials are set in Netlify environment
- Check browser console for errors (F12)
- Verify EmailJS template and service IDs match

### Page shows 404 after refresh
- SPA routing is configured in `netlify.toml`
- Should be automatically fixed, but verify netlify.toml is present

## 📞 Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Netlify Documentation](https://docs.netlify.com/)

---

**Ready to deploy!** Push to GitHub and connect with Netlify for continuous deployment. 🚀
