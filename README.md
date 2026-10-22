# 🚀 Mohd Zaid — Full Stack Developer Portfolio

A modern, responsive, and high-performance personal portfolio website built with **React**, **Tailwind CSS**, and **React Hook Form**. This portfolio showcases my projects, technical skills, background, and contact details with seamless email delivery via **Web3Forms**.

**Live Application:** [https://itszaidsidd.vercel.app](https://itszaidsidd.vercel.app)  

---

## 🌟 Features

- **⚡ Modern & Responsive Design:** Built using Tailwind CSS with mobile-first approach.
- **📄 Interactive Resume Download:** Quick access for recruiters to download or view CV.
- **📩 Functional Contact Form:**
  - Built with `react-hook-form` for robust client-side validation.
  - Implements `async/await` asynchronous submission handling.
  - Zero backend required — powered by Web3Forms for direct inbox notifications.
- **💼 Projects Showcase:** Interactive gallery highlighting key full-stack projects and tech stacks.
- **🎯 Dynamic Skills & About Section:** Clean layout displaying core web development & software engineering competencies.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Form Management:** React Hook Form
- **Email Service:** Web3Forms API
- **Deployment:** Vercel 

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── resume.pdf          # Resume / CV File
│   └── favicon.ico
├── src/
│   ├── components/
|   |   |── Navbar.jsx      # Navbar
│   │   ├── Hero.jsx        # Hero / Intro section
│   │   ├── About.jsx       # About Me & Skills section
│   │   ├── Projects.jsx    # Project Showcase
│   │   ├── Contact.jsx     # Contact Form 
|   |   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main Application Entry
│   ├── main.jsx            # React DOM Render
│   └── index.css           # Tailwind CSS directives
├── package.json
└── README.md
```

---

## 🚀 Quick Start & Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/itszaidsidd/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Contact Form Access Key
Open `src/components/Contact.jsx` (or wherever your contact form resides) and replace the placeholder `access_key` with your Web3Forms Key:

```javascript
body: JSON.stringify({
  access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get key free from web3forms.com
  name: data.name,
  email: data.email,
  subject: data.subject,
  message: data.message,
})
```

### 4. Run the local development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) or [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📬 Web3Forms Setup Guide

1. Visit [Web3Forms](https://web3forms.com/).
2. Enter your recipient email address (`itszaidsidd@gmail.com`).
3. Set your **Form Name** (e.g., `Portfolio Contact Form`).
4. Set the domain URL to `localhost` for local development or your production URL once deployed.
5. Copy your **Access Key** from your inbox and paste it into `Contact.jsx`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Mohd Zaid**  
- **Email:** [itszaidsidd@gmail.com](mailto:itszaidsidd@gmail.com)  
- **GitHub:** [@itszaidsidd](https://github.com/itszaidsidd)  
- **Instagram:** [@itszaidsidd](https://instagram.com/itszaidsidd)  
