# Set up from scratch

## Generate a boilerplate for NextJs with cloudflare

using [Cloudflare documentation](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/):

- `npm create cloudflare@latest my-next-app -- --framework=next` - This will ask some questions, like do you want Typescript, linter, App Router of Pages Router and of you want to deploy. If you have a cloudflare account it will use `wranger` to log in and deploy.

There are more steps, but let's first add MUI.

## MUI

I'm using MUI as i don't want to tinker with custom components and MUI is there to build fast.

using [MUI documentation for App Router](https://mui.com/material-ui/integrations/nextjs/#app-router):

- `npm install @mui/material @mui/material-nextjs @emotion/cache` - to add the dependencies
- update/create theme.ts and app.ts per above link

## Who makes up this boilerplate?

I believe `npm start` is for the developer to type, so it should point to `next dev` and not `next start`. So I changed it. It is my repo, so I can. But for the devs that want to type `npm run dev` (2 characters more!)... it points to `npm run start`.

## Resources

- https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/
- https://mui.com/material-ui/integrations/nextjs/
