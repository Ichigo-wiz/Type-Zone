# ⌨️ TypeZone — Speed Typing Practice Platform

**TypeZone** is a browser-based typing speed improvement platform that allows users to practice typing through different game modes and track their performance in a responsive, user-friendly environment.

---

## 📁 Folder Structure

```
Type-Zone-main/
└── Type-Zone-main/
    ├── README.md             # Project documentation
    ├── TypeZone Zip.zip      # Archived project (backup or deployable version)
    ├── about.html            # About page describing the platform
    ├── index.html            # Home page with typing game interface
    ├── login.html            # Login/Signup page with validation
    ├── login.js              # JavaScript logic for login/signup handling
    ├── logo.jpg              # Branding image/logo
    ├── script.js             # Main logic for typing speed calculation
    ├── styles.css            # Styling and layout using CSS
```

---

## 🧩 Overview

TypeZone offers a smooth and engaging way to improve your typing speed through:
- 📜 Real-time text prompts
- ⏱️ Time-based challenges
- 📈 Speed calculation and WPM tracking
- 🔐 Login/signup system with basic email-password verification
- 💻 Responsive layout built using **HTML, CSS, and JavaScript**

---

## 💡 Key Features

### 1. 🎮 Typing Game Interface
- Random prompts to test speed
- Measures typing speed (WPM) and accuracy
- Real-time feedback

### 2. 🧪 Login/Signup System
- **Email & password** form with client-side JavaScript validation
- Stores user session info (name shown with profile icon after login)
- Prevents duplicate email registration

### 3. 📄 About Page
- Information on project intent
- Tips on how to use the platform

### 4. 🎨 UI/UX Design
- Dark theme UI
- Responsive across devices
- Designed with custom CSS

---

## ⚙️ Technologies Used

| Technology     | Description                                 |
|----------------|---------------------------------------------|
| HTML5          | Page structure                              |
| CSS3           | Styling and layout                          |
| JavaScript     | Dynamic functionality & validation          |
| Bootstrap (optional) | For responsive components if used      |

---

## 🚀 How to Use

1. 📥 Download or clone the repository
2. 🔓 Open `login.html` in browser to log in or sign up
3. ▶️ Navigate to `index.html` to start typing practice
4. 📋 View stats like speed and accuracy
5. 🔁 Try again to improve your score!

> Note: No backend or database required — all logic is handled in the browser using JavaScript.

---

## 🧪 Login Validation Details

Validation using JavaScript ensures:
- Email follows correct format (using Regex)
- Password is not empty
- Prevents same email registration twice

Example check:
```js
if (existingUsers.includes(email)) {
    alert("Email already registered");
}
```


---

## 🔮 Future Scope

- 📊 Add typing history and leaderboard
- 🧠 Include difficulty modes (easy, medium, hard)
- 🌍 Add support for multiple languages
- 📥 Export performance reports (PDF)
- 🧾 Integrate backend to store user sessions

---



✍️ _Improve your typing speed one keystroke at a time with TypeZone._
