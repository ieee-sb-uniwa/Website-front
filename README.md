## Getting Started

Clone the repository:

```bash
git clone https://github.com/ieee-sb-uniwa/Website-front.git
```
Move into the project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```
---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_IMAGES_STORAGE_URL=
```
---

## Running the Project

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```
---

## Build for Production

```bash
npm run build
npm start
```

---
## Project Structure

```txt
project-root/
│
├── actions/             # API requests and server actions
├── app/                 # Next.js App Router pages & layouts
├── components/          # Reusable UI components
├── constants/           # Static constants & configuration
├── i18n/                # Localization configuration
├── lib/                 # Utility functions & helpers
├── messages/            # Translation JSON files
├── public/              # Static assets
├── styles/              # Global and custom styles
│
├── .env.local           # Environment variables
├── middleware.js        # Middleware configuration
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md
```
---
## Libraries & Tools

## Libraries & Documentation

| Library / Tool | Purpose | Documentation |
|---|---|---|
| Next.js | React framework for SSR & App Router | https://nextjs.org/docs |
| Tailwind CSS | Utility-first CSS framework | https://tailwindcss.com/ |
| next-intl | Localization & internationalization | https://next-intl.dev/docs/getting-started/pages-router |
| SplideJS | Sliders and carousels | https://splidejs.com/ |
| Material Tailwind | Tailwind-based UI components | https://www.material-tailwind.com/ |
| Aceternity UI | Modern animated UI components | https://ui.aceternity.com/ |
| Iconify | Unified icon framework | https://iconify.design/ |
| React Icons | Popular icon packs for React | https://react-icons.github.io/react-icons/ |
| Heroicons | Free SVG icon library | https://heroicons.com/ |
---
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
