# 🚀 Webapp Builder Platform & Azure OpenAI Integration Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/gk-girishkumar/Webapp_Builder_Platform/pulls)
[![Azure OpenAI](https://img.shields.io/badge/AI-Azure%20OpenAI-blue)](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)

Welcome to the **Webapp Builder Platform**! This repository serves as a powerful, multi-faceted platform designed for rapidly building, scaling, and deploying modern web applications, while natively integrating advanced AI capabilities via Azure OpenAI. 

It provides an ecosystem of tools including prompt filtering, PDF parsing, automated web scraping (Puppeteer), image generation, and robust templating for modern dynamic web applications.

---

## ✨ Key Features & Capabilities

- 🤖 **Azure OpenAI Native**: Built-in support for Azure OpenAI models via the official `openai` npm package, enabling AI-driven text and media generation.
- 🏗️ **Robust Backend API**: Powered by `Express.js`, featuring modular endpoints, `multer` for file uploads, and robust CORS handling.
- 🕷️ **Advanced Web Scraping**: Integrates `puppeteer` and `website-scraper` for automated site fetching, DOM parsing, and testing.
- 📄 **PDF & Document Processing**: Native capabilities to parse and extract data from PDFs using `pdf-parse`.
- 🎨 **Modern Frontend Tooling**: Bundled with `esbuild`, styled using `TailwindCSS v4`, and optionally integrated with React (`prompt-filter-react`).
- ⚡ **Highly Customizable Architecture**: Modular script designs (e.g., `generate_thumbnails.js`, `test_esbuild.js`) for easy extension.

---

## 💻 Technology Stack

- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Web Framework**: [Express.js](https://expressjs.com/)
- **AI Integration**: [OpenAI Node.js SDK](https://github.com/openai/openai-node)
- **Scraping / Automation**: [Puppeteer](https://pptr.dev/), [Cheerio](https://cheerio.js.org/)
- **Bundler & Build Tools**: [esbuild](https://esbuild.github.io/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v8 or higher) or **yarn**
- **Git**
- An active **Azure OpenAI** account with valid endpoint and API key credentials (required for AI functionality).

---

## 🚀 Getting Started

Follow these steps to get your local development environment fully set up.

### 1. Clone the repository
```bash
git clone https://github.com/gk-girishkumar/Webapp_Builder_Platform.git
cd Webapp_Builder_Platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and populate it with your specific API keys and configuration parameters:
```env
AZURE_OPENAI_API_KEY=your_azure_api_key_here
AZURE_OPENAI_ENDPOINT=your_azure_endpoint_url_here
PORT=3000
```

### 4. Run the Development Server
```bash
npm run start
```
*Your application server should now be running locally on [http://localhost:3000](http://localhost:3000) (or the port specified in your `.env` file).*

---

## 📜 Available Scripts

In the project directory, you can run various npm scripts defined in `package.json`:

- `npm run start` - Starts the primary Express server (`server.js`).
- `npm run start:server` - Alias for starting the main backend server.
- `npm run start:azure-test` - Runs `index.js` to test Azure OpenAI connectivity and API keys.
- `npm run start:static` - Spawns a lightweight static file server (`static-server.js`).
- `npm run test-filter` - Executes the filtering logic test script (`test-filter.js`).

---

## 📂 Project Structure Overview

While the repository contains many utilities, here are the key areas:

- **`server.js`** / **`app.js`**: Core backend Express application and route definitions.
- **`routes-registration.js`**: Modular routing configuration for endpoints.
- **`prompt-filter-react/`**: A React-based frontend module for prompt engineering and filtering.
- **`generate_all_templates.js`** / **`generate_thumbnails.js`**: Automation scripts for generating dynamic UI templates and assets.
- **`filter.js`** / **`test-filter.js`**: Core logic for prompt data sanitation and AI input filtering.
- **`template-editor.html`** / **`template_gallery.html`**: Static web application views for building and previewing designs.

---

## 🤝 Contributing

We actively welcome contributions! Whether it's reporting a bug, proposing a new feature, optimizing the AI prompts, or submitting a Pull Request, your help is deeply appreciated. 

**Contribution Workflow:**
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.

---
*Built with ❤️ for rapid, AI-powered web development.*
