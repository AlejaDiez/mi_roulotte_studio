# Mi Roulotte Studio

The administration dashboard for Mi Roulotte, designed to manage trips, stages, content, and comments within the travel blog ecosystem.

## 📦 Modules

This project is organized into separate modules for better structure and scalability:

- **`mi_roulotte_api`** → API layer built with [Hono](https://hono.dev/) for handling backend logic, database access, and endpoints.
- **`mi_roulotte_app`** → Admin app built with [Flutter](https://flutter.dev/) for managing trips, stages, content, and comments.
- **`mi_roulotte_blog`** → The main frontend blog built with [Astro](https://astro.build/), displaying trips, stages, and stories.
- **`mi_roulotte_studio`** → Admin panel built with [Angular](https://angular.dev/) for managing trips, stages, content, and comments.

## ✨ Features

- 🧭 Trip & Stage Management, create and edit travel routes and stages
- 🖋️ Content Editor, manage blog posts, images, and metadata
- 💬 Comments Dashboard, moderate and reply to user feedback
- ⚡ Fast UI, built with Angular + Tailwind for performance and responsiveness
- ☁️ Integrates with [Cloudflare](https://cloudflare.com/)

## 🚀 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AlejaDiez/mi_roulotte_studio.git
    cd mi_roulotte_studio
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open `http://localhost:3020` in your browser.

## 📦 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build locally
- `npm run deploy` – Deploy production build to cloudflare

## 📜 License

![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

[Mi Roulotte](https://miroulotte.es) by Alejandro Diez Bermejo is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).
