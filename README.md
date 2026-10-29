# M-Cart E-commerce Front End

A responsive React + Vite demo storefront with seven pages, product search/filtering, and a cart saved in localStorage.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract `m-cart-ecommerce.zip`.
2. Open a terminal in the `m-cart-ecommerce` folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Production build
Run `npm run build`. Vite outputs the production site to `dist/`.
To preview the production build locally, run `npm run preview`.

## Deploy on Vercel
1. Open Vercel and create a new project.
2. Import this folder through a Git repository, or use Vercel CLI from the project folder.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy. `vercel.json` includes an SPA rewrite for client-side routes.

## Included pages
Home, About, Services, Contact, Help & FAQ, Login/Register, and Shopping Cart.

## Demo limitations
This is a front-end demonstration. Cart data persists in the current browser using localStorage. Login/register, contact form submission, checkout, payments, inventory, and real order processing are not connected to a backend. Do not enter real passwords or payment information.
