# justanotherfilmgeek media pack

Next.js + TypeScript one-page TikTok creator minisite for Vercel deployment.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Import this repo in Vercel.
2. Framework preset: `Next.js`.
3. Add environment variables from `.env.example`.
4. Deploy.

## Data wiring

Main media-pack content lives in `lib/site-data.ts`.

- `USE_LIVE_TIKTOK=false` keeps fallback values.
- Change to `true` after you wire official TikTok OAuth + Display API server-side logic.

## TikTok API note

For official live stats, apply for TikTok app review with Login Kit + Display API scopes:

- `user.info.basic`
- `video.list`
