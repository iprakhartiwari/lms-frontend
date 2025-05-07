# 📚 LMS - Learning Management System

A full-featured LMS built with **React**, **Vite**, **Cloudinary**, **Stripe**, **Tailwind CSS**, and **Role-Based Authentication**.

## 🚀 Features

- 🔐 Role-Based Authentication (Admin, Instructor, Student)
- 🧑‍🏫 Instructor dashboard to manage courses
- 📦 Cloudinary integration for uploading course media
- 💳 Stripe payments for course enrollment
- 🧭 User dashboards tailored by role
- 📱 Fully responsive with Tailwind CSS
- ⚡️ Super fast development with Vite

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Media Upload:** Cloudinary
- **Payments:** Stripe
- **Auth & Routing:** Role-based auth, React Router

## 🔧 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/yourusername/lms-react.git
cd lms-react/client

# Install dependencies
npm install

# Create a .env file and add:
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_key

# Start the dev server
npm run dev
