# ❄️ Winter Clothing Donation Website

A platform to help people donate winter clothing to those in need across
Bangladesh. This project bridges the gap between donors and volunteers, ensuring
warmth for vulnerable individuals during the cold season.

---

## 🌟 Project Purpose

Thousands of individuals in low-income and rural areas struggle to stay warm
during winter. This application connects donors to volunteers to facilitate
clothing donations, providing a simple, user-friendly interface to make an
impact.

---

## 🔗 Live Link

[Winter Clothing Donation Website](https://assignmnet-09-2713d.web.app/)

---

## 🎨 Winter-Themed Design

The application has a cozy winter design with:

- Snowy backgrounds
- Cool-toned color palettes
- Winter-themed banners and icons.

---

## 🚀 Features

- **Secure Authentication:** User login and registration via Firebase, including
  Google Sign-In.
- **Donation Campaigns:** Browse and donate to campaigns categorized by
  divisions in Bangladesh.
- **Private Routes:** User-specific dashboards and donation details are
  protected.
- **Fully Responsive:** Designed for mobile, tablet, and desktop views.
- **User Profile Management:** Update user profile information with ease.
- **Interactive Design:** Includes animations (e.g., AOS or Animate.css).
- **Error Handling:** Dedicated 404 error page for invalid routes.

---

## 📋 Main Components

### 🌐 Navbar

- Displays site logo, navigation links (Home, Donation Campaigns, How to Help,
  Dashboard).
- Shows user profile photo if logged in or a login button otherwise.

### 🏠 Home Page

- **Banner Section:** Winter-themed slider showcasing campaigns.
- **About Section:** Explains the website’s purpose and mission.
- **How It Works Section:** Instructions for donating and collection points.
- Two extra custom-designed sections.

### 🧥 Donation Campaigns

- Displays campaigns in card format with titles, images, and details.
- A “Donate Now” button leads to the campaign’s details page.

### 🔒 Authentication System

- Login and registration pages with form validation.
- Forgot password feature with email reset functionality.
- Social login with Google.

### 🛠️ Dashboard

- Displays user profile information.
- Option to update user profile (photo and name).

### 🚫 Error Page

- A visually appealing 404 page with a button redirecting to the home route.

---

## 🔑 Environment Variables

Secure Firebase configuration keys using `.env.local`.

---

## ⚡ Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Authentication:** Firebase
- **Hosting:** Netlify/Firebase/Surge
- **Animation:** AOS or Animate.css
- **Package Manager:** npm

---

## 📂 JSON Data

Sample JSON data for donation campaigns:

```json
[
  {
    "id": 1,
    "title": "Warm Clothes Drive - Dhaka",
    "image": "https://www.orphansupportinternational.org/assets/images/20211219_152020_1.36125642_std.jpg",
    "description": "Providing winter clothing to the underprivileged communities in Dhaka. This initiative focuses on distributing essential winter gear to ensure no one suffers from the harsh cold weather in the city.",
    "status": "Active",
    "contactInfo": "dhaka@donation.org",
    "division": "Dhaka"
  },
  {
    "id": 2,
    "title": "Blanket Collection for Old Dhaka",
    "image": "https://i.ibb.co.com/F8rYwvy/Made-with-Flex-Clip-AI-2024-11-19-T230345.png",
    "description": "Collecting blankets to distribute in the Old Dhaka area. This drive aims to provide comfort and warmth to the elderly and children during the chilly winter months.",
    "status": "Active",
    "contactInfo": "olddhaka@donation.org",
    "division": "Dhaka"
  }
]
```
