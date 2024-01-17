# Covid-19-Analysis
## Worldwide Covid-19 cases analysis with latest statistics.

TODO: find better and accurate api

### 
CSR: Rendering is mostly handled by the client (browser) using JavaScript after the initial page load.
<br>
### 
SSR: Rendering is done on the server, and the client receives a fully-rendered HTML page.
<br>
### 
I have used additional libraries like Axios, SWR for data fetching and caching. It is also to make it easier to scale. And for front end this web works with Tailwind CSS and Recharts for animated UI.
### For the routing this web works with the latest next app router. It allows async data fetching in the components, it is server rendered and it is different from writing traditional react codes without 'use client' classification.

<br>
<br>
<br>


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
