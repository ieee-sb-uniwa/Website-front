# Frontend guide

A map of the frontend: what it does, where things are, and what isn't obvious from the code.

**Stack:** [Next.js 15](https://nextjs.org/docs) (App Router) · React 19 · [Tailwind CSS](https://tailwindcss.com) · [next-intl](https://next-intl.dev)

> Run the frontend through the full stack from the back repo (`docker compose watch`). See [Getting started](../../docs/getting-started.md). `npm run dev` on its own won't work, because the pages need the API.

## How a page gets its data

```
/en/sb-events  →  app/[locale]/sb-events/page.jsx  →  actions/events/getAllEvents.js  →  API  →  components
```

- `[locale]` in the path is the language (`gr` or `en`). Every page lives under it.
- Pages run on the server. They call a function in `actions/`, which calls the API, and pass the result to components.
- All API calls live in `actions/`, never in pages or components. They use `process.env.API_URL` and always pass the locale.

## Where things are

```
web/
├── app/[locale]/        # Pages: one folder per route
├── actions/             # API calls
├── components/
│   ├── layout/          # Nav, Footer, LanguageSwitcher
│   ├── sections/<page>/ # Blocks used by one page
│   ├── ui/              # Reusable pieces used across pages
│   └── <feature>/       # Components for one feature (events, ...)
├── messages/            # UI text: gr.json and en.json
├── i18n/                # Language routing setup
├── constants/           # Static data that isn't in the API
├── public/assets/       # Static images (logos, backgrounds)
└── tailwind.config.js   # Colors and fonts
```

## Things to know

**Two kinds of text.** Content (events, people, projects) comes from the API. UI text (buttons, headings) lives in `messages/gr.json` and `messages/en.json`. Every key must exist in **both** files.

**Two kinds of images.** Content images live in `minio/files/` in the back repo, and the API returns their URLs. Design images (logos, backgrounds) live in `public/assets/`.

**Links keep the language.** Use `Link` from `@i18n/navigation`, not from `next/link`.

**Imports use aliases:** `@components/...`, `@actions/...`, `@lib/...`, `@constants/...`.

## Libraries we already use

Before installing a new library, check whether one of these already does the job.

| Need | Library |
| --- | --- | 
| UI text in Greek / English | [next-intl](https://next-intl.dev) | 
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (preferred), [Heroicons](https://heroicons.com) |
| Animations | [Framer Motion](https://motion.dev) |
| Carousels / sliders | [Splide](https://splidejs.com/integration/react-splide/) |
| Rendering Markdown | [react-markdown](https://github.com/remarkjs/react-markdown) + `remark-gfm` + `rehype-raw` |
| Combining class names | `cn()` from `@lib/utils` ([clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)) |
| Ready-made components | [Material Tailwind](https://www.material-tailwind.com/docs/react/installation) |

The full list is in `package.json`.
