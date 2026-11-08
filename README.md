# ALGA trip — website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, built from the ALGA trip Figma file.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Status

- **Done:** home page (`Главная`), desktop 1440 + mobile 360, all real assets from Figma.
- **Next:** `Маршруты`, `Карта маршрута`, `Саммари`, partner/driver landings, modals (login, date picker, passengers), skeletons.
- Data is mocked in `src/lib/mock-data.ts` — replace with API calls.

## Structure

```
src/app/globals.css        design tokens (@theme) — colours, radii, shadows, fonts
src/app/page.tsx           home page composition
src/components/layout/     Header, Footer
src/components/home/       Hero + SearchForm, PopularRoutes, Sections (steps, cars, extras, partners), JoinCta, Faq
src/components/ui/         Button, Radio/Checkbox/Counter, Carousel, Icon, Container/SectionTitle
public/images, public/icons  assets exported from Figma (photos re-encoded to WebP)
```

## Notes

- **Font:** design uses Proxima Nova (commercial). Manrope is the free fallback. If you have a Proxima Nova licence,
  drop the `.woff2` files into `public/fonts/` and uncomment the `@font-face` block in `globals.css`.
- **Logo:** still a grey placeholder in the Figma — swap `Logo` in `components/layout/Header.tsx`.
- "Я партнёр" tab copy in `mock-data.ts` is placeholder text (the Figma only has the driver version).
- Mobile date field "Обратно" shows only when "Туда-обратно" is selected.
