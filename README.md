# 🚀 GoDharma – Coming Soon Landing Page

Welcome to the official landing page for **GoDharma**, a modern software company with a vision to become the backbone of the tech industry. This is a simple yet elegant **"Coming Soon"** page built using **React** and **Tailwind CSS**, featuring a fully working **Contact Form** powered by **EmailJS**.

---

## 🔍 Features

- 🧠 Company Introduction
- 🚧 Coming Soon Notice
- 📨 Contact Form with EmailJS integration (sends directly to Gmail)
- 📱 Responsive Design
- 🔒 No backend required

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **EmailJS** (for sending emails without backend)
- **Deployed via:** Netlify / Vercel (your choice)

---

## 📩 Contact Form Setup (EmailJS)

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Connect your Gmail
3. Create:
   - **Email Service**
   - **Email Template**
   - Copy your **Service ID**, **Template ID**, and **Public Key**
4. Replace in `Home.jsx`:

```js
emailjs.sendForm(
  \"your_service_id\",
  \"your_template_id\",
  form.current,
  \"your_public_key\"
);
