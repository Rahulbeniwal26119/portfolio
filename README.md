# ✨ Portfolio Maker

> A high-end, configuration-driven portfolio template built with **Astro**, **Tailwind CSS**, and **Framer Motion** aesthetics.

<a href="https://rahulbeniwal.takovibe.com"> Preview </a>

## 🚀 Features

- **🎨 Premium Design**: "Product-style" aesthetic inspired by top-tier tech landing pages.
- **🌗 Dynamic Theme System**: System-aware Dark/Light mode with a "Telegram-style" circular reveal animation.
- **⚙️ Config-Driven**: Manage all content, section visibility, and order via a single `data.json` file.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to large desktops.
- **⚡ High Performance**: Built on Astro for blazing fast load times and zero-JS default.
- **🧩 Modular Components**:
    - **Cinematic Hero**: Spotlight effects and scroll-driven text reveals.
    - **Bento Grid Projects**: Responsive 4-item repeating pattern layout (Large/Small) with iframe-based **Live Previews**.
    - **Interactive Timeline**: Clean "Spec Sheet" style experience section.
    - **Status Banner**: Configurable "Under Construction" mode.
    - **Writing & Skills**: Beautifully designed sections for content creators.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/), [Lenis](https://github.com/studio-freight/lenis) (Smooth Scroll)
- **Icons**: SVG & Emojis

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or bun

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio-maker.git
    cd portfolio-maker
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to see your portfolio in action.

## ⚙️ Configuration

The entire portfolio is controlled by `src/data.json`. You don't need to touch the code to update your content!

### 1. Reordering Sections
Change the order of sections by modifying the `sectionOrder` array:

### 2. Site Status (Under Construction)
Show a visible "Under Construction" banner at the top of the site:

```json
"config": {
  "underConstruction": true
}
```

### 3. Bento Grid & Live Previews
Projects are automatically arranged in a responsive **Bento Grid** (Repeating 4-item pattern: Large-Small / Small-Large).
To enable the "Live Preview" modal for a project (opens the site in an iframe overlay), add `"preview": true`:

```json
"config": {
  "sectionOrder": [
    "hero",
    "projects",
    "experience",
    "skills",
    "..."
  ]
}
```

### 2. Enabling/Disabling Sections
Toggle sections on or off:

```json
"config": {
  "sections": {
    "experience": true,
    "writing": false, 
    "contact": true
  }
}
```

### 3. Adding Projects with Live Preview
To enable the "Live Preview" modal for a project, add `"preview": true`:

```json
{
  "name": "My Awesome App",
  "url": "https://my-app.com",
  "description": "A revolutionary app...",
  "techTags": ["React", "Node.js"],
  "preview": true
}
```

### 4. Writing Section Logos
You can use emojis or custom image logos for your writing platforms:

```json
{
  "name": "Medium",
  "url": "https://medium.com/@user",
  "logo": "https://example.com/medium-logo.png" 
}
```

## 🎨 Customization

### Colors & Fonts
Edit `src/styles/global.css` and `tailwind.config.mjs` to change the color palette and typography. The project uses semantic CSS variables (e.g., `--color-primary`, `--color-background`) for easy theming.

### Adding New Components
Create new `.astro` files in `src/components/` and import them into `Portfolio.astro`. Don't forget to add them to the `sectionOrder` logic if you want them to be rearrangeable!

## 📄 License

MIT
