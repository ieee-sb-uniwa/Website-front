# Home Page Documentation (`app/[locale]/page.jsx`)

The Home Page is the main landing page of the application. It is a server-side component that orchestrates the layout and data fetching for the various sections displayed to the user.

## Overview

The page is dynamic and localized, fetching content based on the `locale` parameter provided by the URL. It utilizes several sub-components to build a comprehensive overview of the IEEE Student Branch.

## Data Fetching

The component performs the following asynchronous operations:
- **Council Data:** Fetches the current council members using `getCouncil(locale)`.
- **Recent Events:** Fetches the 3 most recent events using `getEvents(locale, 3)`.
- **Translations:** Loads translations for the "Council" section using `getTranslations("Council")`.

The page is configured with `export const dynamic = "force-dynamic"` to ensure that data is always up-to-date and not cached statically.

## Rendered Sections

The page renders the following sections in order:

1.  **Hero:** The initial landing view with a call to action or primary message.
2.  **Recent Activities:** Displays the recently fetched events.
3.  **Science Groups Overview:** A summary of the various scientific teams within the branch.
4.  **Team:** Showcases the council members with localized labels.
5.  **Sponsors:** Highlights the partners and sponsors.
6.  **Map Wrapper:** An interactive map or location-based information.

## Dependencies

- **Server Actions:** `@actions/getCouncil`, `@actions/events/getEvents`
- **Components:** Found in `@components/sections/homepage/`, `@components/sections/team/`, and `@components/sections/map/`.
- **Internationalization:** `next-intl` for localized content.
