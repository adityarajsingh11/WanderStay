# 🏡 WanderStay — Explore. Host. Travel.

![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express.js-black?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![EJS](https://img.shields.io/badge/Template-EJS-yellow?logo=ejs)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap_5-blue?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative)

**WanderStay** is a full-stack **Airbnb-inspired web application** that lets users  
🌍 explore vacation stays, 🏠 host properties, and 💬 review listings —  
built with **Node.js**, **Express**, **MongoDB**, **EJS**, and **MapTiler** for real-time location mapping.

---

## 🌟 Key Features

✨ **Dynamic Listings**  
Create, edit, and delete property listings with image uploads and detailed descriptions.

🗺️ **Interactive Maps**  
Integrated **MapTiler API** to show real-world locations for every listing.

👤 **User Authentication**  
Secure login, registration, and session management using **Passport.js**.

💬 **Review System**  
Leave reviews and star ratings for stays you’ve experienced.

📸 **Cloud Image Storage**  
Upload images seamlessly using **Multer** and **Cloudinary** integration.

📱 **Responsive Design**  
Built with **Bootstrap 5** and custom CSS for an elegant UI.

⚙️ **Flash Messages & Validation**  
Enhanced user experience with feedback and input validation.

💾 **MongoDB Database**  
All listings, users, and reviews are stored securely using **Mongoose ORM**.

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | EJS, HTML5, CSS3, Bootstrap 5 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js, Express-Session |
| File Upload | Multer, Cloudinary |
| Validation | Joi |
| Utilities | Method-Override, Connect-Flash, Dotenv |

---

## 🏗️ Project Overview

**WanderStay** provides a seamless experience for both travelers and hosts:  
- 🧭 Guests can explore listings, view maps, and read reviews  
- 🏠 Hosts can add new properties and manage their listings  
- 🔐 Secure authentication for all users  
- 🗺️ Each listing includes an exact map location (via MapTiler API)  

💡 *WanderStay combines travel inspiration with modern web engineering.*

---

## 🗂️ Folder Structure
```
WanderStay/
├── models/ # Mongoose schemas for database collections
│ ├── listing.js  # Listing (property) model schema
│ ├── review.js   # Review model schema
│ └── user.js     # User authentication model
│
├── routes/       # Express route handlers for modular routing
│ ├── listing.js  # Routes for listings (CRUD operations)
│ ├── review.js   # Routes for reviews (add/delete)
│ └── user.js     # Routes for user authentication (login/signup)
│
├── controllers/  # Controller logic for separating route logic
│ ├── listing.js  # Handles listing operations
│ ├── review.js   # Handles review operations
│ └── user.js     # Handles user registration & login
│
├── public/       # Static assets (served publicly)
│ ├── css/        # Custom CSS styles
│ ├── js/        # Client-side JS scripts
│ └── images/    # Images used in UI
│
├── views/       # EJS templates for rendering pages
│ ├── listings/  # Listing-related views
│ ├── includes/  # Reusable components (navbar, footer, etc.)
│ ├── layouts/   # Base layouts using EJS-Mate
│ ├── users/     # Login, signup pages
│ └── home.ejs   # Main home page
│
├── utils/       # Utility/helper functions
│ ├── ExpressError.js # Custom error class for handling errors
│ └── wrapAsync.js  # Async wrapper for cleaner async route handling
│
├── .env        # Environment variables (API keys, secrets)
├── app.js      # Main Express application file (entry point)
├── package.json # Project dependencies & scripts
└── README.md   # Project documentation
```


---

## ⚙️ Installation & Setup

Follow these steps to run **WanderStay** locally 🧠

### 🪄 Step 1: Clone the Repository
```bash
git clone https://github.com/adityarajsingh11/WanderStay.git
cd WanderStay
```
### 📦 Step 2: Install Dependencies
```bash
npm install
```
### ⚙️ Step 3: Setup Environment Variables

Create a .env file in the root directory and add:

```bash
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret

```

### 🍃 Step 4: Start MongoDB
```
mongod
```
### 🚀 Step 5: Run the Server
```
nodemon app.js
```
Then visit:
👉 http://localhost:8080

---

## 🧭 Usage Guide

Follow these simple steps to get started with **WanderStay** 🌍  

1. 🔐 **Sign Up / Log In**  
   Create your WanderStay account or log in securely to access personalized features.

2. 🏠 **Create a New Listing**  
   List your property by uploading images, adding a title, price, description, and exact location.

3. 🌇 **Explore Amazing Stays**  
   Browse through beautiful listings across different destinations — view each stay directly on the map.

4. ⭐ **Leave Reviews & Ratings**  
   Share your experience by leaving detailed reviews and rating properties you’ve visited.

5. 🧹 **Manage Your Listings**  
   Edit or delete your own listings anytime from your dashboard.

6. 🚪 **Log Out Securely**  
   End your session safely — your account and data remain protected.

> 💡 *WanderStay makes exploring, hosting, and connecting effortless — wherever you go.*

---

## 📜 License

This project is licensed under the **MIT License** — you’re free to use, modify, and distribute it for personal or commercial purposes.

By using or contributing to WanderStay, you agree to:

- Give appropriate credit to the author  
- Provide a link to this repository when sharing derived work  
- Include the same license in any redistributed copies  

---

**Copyright © 2025 [Aditya Raj Singh](https://github.com/adityarajsingh11)**  
💼 *WanderStay — Explore. Host. Travel.*
