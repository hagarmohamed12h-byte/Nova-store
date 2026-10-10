# NOVA — Curated Essentials 🛍️

A modern, responsive e-commerce storefront built with **React and TypeScript**. NOVA focuses on a clean shopping experience, allowing users to browse products, explore categories, search the catalog, view product details, and interact with cart and wishlist features.

## 📌 Overview

NOVA is a front-end e-commerce portfolio project designed to demonstrate modern React application development, reusable UI components, client-side routing, global state management, API integration, and responsive design.

The project integrates product data from the **DummyJSON Products API** and includes shopping-interface flows such as cart and wishlist interactions.

## ✨ Features

- **Responsive storefront** — adapts to desktop, tablet, and mobile screens.
- **Product catalog** — browse products retrieved from the product API.
- **Categories** — explore products by category.
- **Product search** — find products using the available search interface.
- **Product details** — view additional information about products.
- **Shopping cart** — interact with cart items and the shopping flow.
- **Wishlist** — save and manage favorite products.
- **Authentication modal** — provides the authentication interface.
- **Protected routes** — supports client-side route protection.
- **Dark and light mode** — switch between available themes.
- **Toast notifications** — display feedback for supported interactions.
- **Mobile-first navigation** — navigation suited to smaller screens.
- **Automated testing setup** — Cypress configuration and test directory.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI |
| TypeScript | Static typing |
| Vite | Development server and build tooling |
| React Router | Client-side navigation |
| Redux Toolkit | Application state management |
| Tailwind CSS | Styling and responsive layouts |
| React Icons | Icon components |
| DummyJSON Products API | Product data |
| Cypress | End-to-end testing setup |

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git
- A modern web browser

### Installation

Clone the repository:

```bash
git clone https://github.com/hagarmohamed12h-byte/Nova-store.git
```

Navigate to the project directory:

```bash
cd Nova-store
```

Install dependencies:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 📂 Repository Structure

```text
Nova-store/
├── .github/
│   └── workflows/
├── cypress/
├── public/
├── src/
├── .dockerignore
├── .eslintrc.cjs
├── Dockerfile
├── Dockerfile.dev
├── Jenkinsfile-dev
├── Jenkinsfile-pr
├── cypress.config.ts
├── docker-compose.yml
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── LICENSE
└── README.md
```

## 🧭 Usage

1. Start the development server.
2. Open the application in your browser.
3. Browse the product catalog.
4. Explore categories and search for products.
5. Open product details.
6. Try cart and wishlist interactions.
7. Explore the authentication interface and theme toggle.
8. Test the responsive layout on different screen sizes.

## 🧪 Testing

The repository includes Cypress configuration and a `cypress/` directory.

Open the Cypress test runner:

```bash
npx cypress open
```

Run tests in the terminal:

```bash
npx cypress run
```

Use the commands supported by the project's installed dependencies and configuration.

## 🐳 Docker and CI

The repository includes configuration files for container workflows and automation:

- `Dockerfile`
- `Dockerfile.dev`
- `docker-compose.yml`
- `Jenkinsfile-dev`
- `Jenkinsfile-pr`
- `.github/workflows/`

Review these files before assuming a particular deployment or pipeline is active.

## 📱 Responsive Design

The storefront is intended to support desktop, tablet, and mobile screens, with responsive layouts and mobile-friendly navigation.

## 🔐 Security Notes

- Never commit API keys, passwords, or private tokens.
- Client-side route protection alone does not provide server-side security.
- Do not store payment card details in the application.
- Review dependencies and deployment configuration before production use.
- Preserve the original project's license and attribution requirements.

## 🔮 Future Improvements

- Add a backend and database for persistent accounts, carts, wishlists, and orders.
- Implement server-side authentication and authorization.
- Integrate a payment provider through a secure backend.
- Expand product filtering and sorting.
- Improve loading, empty, and error states.
- Add unit and component tests.
- Improve accessibility, SEO, and performance.
- Deploy the application and add a verified live demo URL.

## 🌐 Live Demo

Add the deployed website URL here when available:

`[Live Demo](YOUR_LIVE_DEMO_URL)`

## 👨‍💻 Author

**Hagar Mohamed**

- GitHub: [@hagarmohamed12h-byte](https://github.com/hagarmohamed12h-byte)
- Repository: [Nova-store](https://github.com/hagarmohamed12h-byte/Nova-store)

## 📄 License

This repository contains a `LICENSE` file. Read it before reusing, modifying, or redistributing the project, and preserve any required notices or attribution.

---

If you find an issue or have a suggestion, open an issue in the repository.
