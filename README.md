This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Folder, files and there uses

`blockchain` folder contains content related to smart contracts being used in the project. Further inside `addresses` folder there are two files `goerli.json` and `mainnet.json` addresses should be added to these files. There is folder named as `abi` it contains the abi's related to the contract addresses. So abi and addresses related to all the contracts should be place over here.
`call` folder contains the contract interaction for each contract in the separate file.
`config.ts` contains the configuration settings for goerli, mainnet and for hardhat.

`components/connectWallet/ConnectWallet.tsx`
contains different types of wallets we need setup portis wallet dappId to make it work.

## sentry configuration

the followin environtment varriables needs to be added in `.env` file

```NEXT_PUBLIC_SENTRY_ENV=development
SENTRY_RELEASE=development
SENTRY_AUTH_TOKEN="The auth token"

```

At the end of this file `next.config.js` following options needs to be configured for sentry

```
org: "gsu-protocol",
project: "gsr",
```

## Mixpanel configuration

the followin environtment varriables needs to be added in `.env` file

```
MIXPANEL_ENV=development
MIXPANEL_KEY="mix panel api key"
```

more analytics events can be added to `analytics/analytics.ts` for tracking

## internationalization

any new translation or locale is need to be added here `public/locales`

## styles and theme settings

all stlye and theme related stuf is handled inside `theme` folder
