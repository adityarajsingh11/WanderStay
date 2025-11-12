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
│ └── images   / # Images used in UI
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

