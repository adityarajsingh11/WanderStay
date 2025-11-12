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

WanderStay/
├── models/
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── routes/
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── controllers/
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── public/
│ ├── css/
│ ├── js/
│ └── images/
│
├── views/
│ ├── listings/
│ ├── includes/
│ ├── layouts/
│ ├── users/
│ └── home.ejs
│
├── utils/
│ ├── ExpressError.js
│ └── wrapAsync.js
│
├── .env
├── app.js
├── package.json
└── README.md

---



