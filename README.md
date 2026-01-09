# 🛒 E-Commerce Product Listing App

A modern **e-commerce product listing application** built with **Next.js (App Router)**, featuring dynamic filtering, URL-synced search, responsive UI, and optimized performance. The app is deployed on **Vercel** and ready for production.

---

## 🚀 Live Demo

🔗 **Deployed URL:**  
> https://your-project-name.vercel.app

---

## ✨ Features

- 🧾 Product listing with responsive grid layout  
- 🔍 Search products with URL synchronization  
- 🗂 Filter by category and price range  
- ⭐ Featured product card (last product highlighted)  
- 🛒 Add to cart functionality with global state  
- 📦 Product detail pages with ratings & descriptions  
- ⚡ Optimized images using Next.js Image component  
- 📱 Fully responsive (desktop & mobile)  
- 🚀 Deployed on Vercel  

---

## 🧑‍💻 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

shell
Copy code

### 2️⃣ Install dependencies
npm install

graphql
Copy code

### 3️⃣ Run the development server
npm run dev

yaml
Copy code

Open **http://localhost:3000** in your browser.

---

## 🏗️ Production Build

To test the production build locally:

npm run build
npm run start

yaml
Copy code

---

## 🖼️ Images & Assets

- All product images are stored in the **`public/`** folder  
- Image paths are referenced like:
image: '/shoes.jpeg'

yaml
Copy code
- Images are optimized using **Next.js Image**

---

## 🌐 Deployment

This project is deployed using **Vercel**.

### Deployment Steps:
1. Push the project to GitHub
2. Import the repository into Vercel
3. Use default Next.js build settings
4. Automatic deployments on every push to `main`

---

## 📌 Notes

- Filters are synchronized with the URL using `useSearchParams`
- Suspense boundaries are used to support static rendering
- The last product in the grid is intentionally styled as a featured product

---

## 📈 Future Enhancements

- User authentication
- Persistent cart (localStorage / backend)
- Pagination or infinite scrolling
- Backend API integration
- Checkout & payment flow

---

## 📁 Project Structure

