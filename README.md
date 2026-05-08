# 🌾 Smart Agriculture in Egypt — الزراعة الذكية في مصر

<div align="center">

![Smart Agriculture](https://res.cloudinary.com/dwxybf8iu/image/upload/v1778178433/corn-field-young-corn-plants-growing-sun_vz24fx.jpg)

**A bilingual Arabic/English platform connecting science to the field,
empowering rural communities across Egypt.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-2d9e6b?style=for-the-badge&logo=vercel)](https://github.com/anxlz/SmartAgriculture)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Partners](#partners)
- [Team](#team)

---

## 🌿 About

**Smart Agriculture in Egypt** is an academic web platform developed in collaboration with the Faculty of Agriculture at Ain Shams University. It aims to bridge the gap between modern agricultural science and rural Egyptian communities by providing accessible, bilingual digital resources.

> منصة رقمية أكاديمية تهدف إلى تمكين المجتمعات الريفية في مصر من خلال نشر المعرفة الزراعية الحديثة.

---

## ✨ Features

- 🌐 **Fully Bilingual** — Arabic (RTL) & English with instant language switching
- 🎬 **Video Slider Hero** — Auto-advancing background video with play/pause and modal viewer
- 🌙 **Dark / Light Mode** — System-aware theme with manual toggle
- 📱 **Fully Responsive** — Mobile-first layout across all screen sizes
- 🤝 **Partners Section** — Academic and technical collaborators showcased with tags
- ✨ **Reveal Animations** — Staggered scroll-triggered entrance animations
- ⚡ **Optimized Assets** — Videos and images served via Cloudinary CDN

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS + inline styles |
| Media CDN | Cloudinary |
| Routing | Anchor-based smooth scroll |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm `>= 9`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/anxlz/SmartAgriculture.git
cd SmartAgriculture

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

### Deploy

The project is configured for Vercel. A `.npmrc` file is included to handle peer dependency resolution automatically:

```
legacy-peer-deps=true
```

Push to `main` → Vercel deploys automatically.

---

## 📁 Project Structure

```
smart-agri-egypt/
├── public/
│   └── videos/               # Local video assets (fallback)
├── src/
│   ├── assets/               # Static assets
│   ├── components/
│   │   ├── Hero.jsx          # Video slider hero section
│   │   ├── Partners.jsx      # Partners & collaborators section
│   │   ├── SectionWrapper.jsx
│   │   ├── SectionHeader.jsx
│   │   └── ...
│   ├── context/
│   │   └── ThemeContext.jsx  # Language & dark mode context
│   ├── data/
│   │   └── content.js        # All Arabic / English text content
│   ├── hooks/
│   │   └── useReveal.js      # Scroll reveal animation hook
│   └── App.jsx
├── .npmrc                    # legacy-peer-deps=true
├── vite.config.js
└── package.json
```

---

## 🤝 Partners

| Partner | Role |
|---------|------|
| 🏛️ **Ain Shams University** | Academic Partner |
| 🌾 **Faculty of Agriculture – ASU** | Academic Partner |
| 🌱 **Dept. of Rural Community & Agricultural Extension** | Research & Extension Partner |
| 👨‍💻 **anxlz** | Platform Developer |

---

## 👨‍🎓 Team

**Abdulrahman Fathy** — Student Project
Faculty of Agriculture, Ain Shams University

---

## 📄 License

This project is an academic submission. All rights reserved © 2025 Ain Shams University.

---

<div align="center">
  Made with 💚 in Egypt 🇪🇬
</div>
