# 🖥 OS-Style Developer Portfolio

A reimagined developer portfolio that models projects as a functional file system.

Instead of a traditional scroll-based layout, users interact with **folders**, **files**, and **windows** on desktop — and **apps** on mobile/tablet.

---

## 📱 Mobile & 🖥 Desktop Previews

| Mobile View                  | Desktop View                   |
| ---------------------------- | ------------------------------ |
| ![Mobile](readme/mobile.png) | ![Desktop](readme/desktop.png) |

---

## ✨ Features

- **Dual Experience**  
  Desktop-style window system vs. mobile app-based interface.

- **Typed Architecture**  
  Built with **TypeScript** using discriminated unions for type-safe file rendering.

- **Supported File Types**
  - **Text** — With optional structured tech-stack metadata.
  - **Image** — Project screenshots.
  - **PDF** — Document previews.
  - **URL** — External link handling.

- **State Management**  
  Powered by **Zustand** for window layering and global state.

- **Modern Stack**  
  Next.js (App Router) + TailwindCSS.

---

## 🧠 Architecture Philosophy

This portfolio treats projects as structured data.

Each file type is strictly modeled and rendered conditionally using TypeScript unions.  
All content lives in `/constants`, separating **data from presentation**.

This makes the project:

- Easy to extend
- Easy to customize
- Architecturally scalable
- Beginner-friendly but structurally strong

---

## 🚀 Getting Started

This project is designed as a **reusable template**.

1. **Clone & Install**

```bash
git clone <your-repo-url>
cd portfolio
npm install

```

2. **Run Development Server**

```bash
npm run dev

```

3. **Customize Content**
   Edit your data in:
   `📂 /constants`

> **Note:** All portfolio content is centrally defined. You don't need to touch UI components unless you want to change the core styling.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Improve architecture
- Add new file types
- Enhance mobile or desktop UX
- Refactor window management
- Submit feature ideas

Please see `CONTRIBUTING.md` for full guidelines.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

## 👤 Author

**Chibuikem Daniel Onwu-Obi** _Full-Stack & AI Engineer_ Available for: Freelance • Collaboration • Full-time
