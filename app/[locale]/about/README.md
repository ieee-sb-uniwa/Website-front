## About Us Page

### Purpose
Presents the organization overview, IEEE context, leadership team (council/counselor), and location details for visitors.

### Main Sections
- Intro/header area with page title and short context (`AboutIntro`).
- Informational content blocks about IEEE, Region 8, Greece Section, and student branches (`TextWithImageSegment`).
- IEEE UNIWA section with goals/benefits cards (`IEEEUniwa`).
- Join-us call-to-action banner (`ReusableCTA` / `CTA`).
- Leadership presentation area (council and counselor) (`Team`).
- Location/map section with office/workplace details (`MapWrapper`).

### Data Sources
- Leadership data comes from backend API endpoints (localized by language).
- Most text/content comes from translation files (`next-intl`).
- Images/icons are pulled from local assets and an environment-based storage URL.
- Page uses mainly server-fetched data plus small local UI state for simple interactions.

### Key Logic / Behavior
- Dynamic rendering is forced (`dynamic = 'force-dynamic'`) and API calls use `cache: 'no-store'`.
- If council/counselor data is missing, page should return 404 (`notFound()` path).
- `Team` sorts members by `id` and renders them in two columns.
- `TextWithImageSegment` conditionally renders list, links, and image sections based on provided props.
- Interactive behavior: clicking segment images toggles bordered style + caption.
- `MapWrapper` loads map with `next/dynamic` and includes loading + `<noscript>` fallback.
