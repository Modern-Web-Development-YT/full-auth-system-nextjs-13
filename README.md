Source code for video tutorial: [Tutorial: Full Auth System with Next.js V13 (APP ROUTER) + TypeScript + Next-Auth + Prisma + MySQL](https://www.youtube.com/watch?v=EFqa0IAxs2k&t=1616s&ab_channel=ModernWebDevelopment)

## Getting Started

### Set up PlanetScale database

1. Create a PlanetScale account and a database as shown in the video (5:00 to 9:00 in video).
2. Copy the database URL from the PlanetScale dashboard and set it as the `DATABASE_URL` environment variable in `.env`.

### Install dependencies

```bash
npm install
```

### Set up Prisma

```bash
npx prisma generate

npx prisma db push
```

### Run development server 
```bash
npm run dev
```

## Deploy on Vercel
The easiest way to deploy this project is to use the [Vercel Platform](https://vercel.com/docs/deployments/overview) from the creators of Next.js.

## What's next?
Share the video and subscribe to the channel if you want to see more videos like this. I will be posting more videos on Next.js, React, TypeScript, and other web technologies, so stay tuned!

## Check out my other videos on [YouTube](https://www.youtube.com/channel/UCm4jwz-lWqNJ_5eG-37cuwQ)