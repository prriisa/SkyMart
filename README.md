# 🛍️ SkyMart — React + Tailwind Ecommerce Dashboard

A modern ecommerce dashboard built with **React**, **Tailwind CSS**, and **Lucide Icons**. SkyMart features dynamic cart logic, authentication, protected/public routes, single product pages, and a responsive UI with smooth hover animations.

---

## 🚀 Features

- **Protected Routes** — Home and dashboard accessible only after login.
- **Public Routes** — Signup and Signin pages open to all users.
- **Dynamic Routing** — Product details and filters handled with React Router.
- **Single Product Page** — Brief description, next/previous navigation, and related products by category.
- **LocalStorage Integration** — Cart, login, and signup data persisted per user.
- **Search Bar** — Instant product search with filtering.
- **Cart Sidebar** — Add, remove, increment/decrement items with live total.
- **Dashboard Stats** — Dynamic cards for cart items, cart value, top products, and categories.
- **New Arrivals & Top Rated** — Highlighted product sections with hover effects.
- **Tailwind Styling** — Utility-first design, no global CSS.

---

## 📂 Folder Structure

```
src/
├── context/
│   └── MyContext.jsx
│
├── pages/
│   ├── home/
│   │   ├── about/
│   │   │   └── About.jsx
│   │   ├── cart/
│   │   │   └── Cart.jsx
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   ├── Categories.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── NewArrivals.jsx
│   │   │   │   ├── Perks.jsx
│   │   │   │   ├── Stats.jsx
│   │   │   │   └── TopRated.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── products/
│   │   │   ├── components/
│   │   │   │   ├── ProductDiv.jsx
│   │   │   │   ├── ProductsHeader.jsx
│   │   │   │   └── SingleProduct.jsx    
│   │   │   └── Product.jsx  
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   └── Navbar.jsx
│   │
│   ├── login/
│   │   ├── Login.jsx
│   │   └── LoginForm.jsx
│   │
│   └── signup/
│      ├── SignUp.jsx
│      ├── SignUpForm.jsx
│      └── Welcome.jsx
│   
├── router/
│   ├── AppRouter.jsx
│   ├── ProtectedRouter.jsx
│   └── PublicRouter.jsx
│
└── App.jsx
```

---

## ⚙️ Installation

```bash
git clone https://github.com/prriisa/SkyMart.git
cd SkyMart
npm install
npm run dev
```

---

## 🧑‍💻 Tech Stack

| Tool | Purpose |
|------|---------|
| React | Component-based UI |
| Tailwind CSS | Utility-first styling |
| Lucide Icons | Modern SVG icons |
| React Router | Navigation + protected/public routes |
| Axios | Product API fetching |
| LocalStorage | Persistent cart + auth data |

---

## 📊 Dynamic Data

- Products fetched from: `https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json`
- Cart stored per user as: `cart_<userId>` in localStorage.
- Login/Signup also use localStorage for user persistence.
- Filters stored in URL `searchParams` for persistence and shareability.

---

## 🎨 UI Highlights

- Responsive grid layouts
- Hover animations on product cards and buttons
- Dynamic cart badge count
- Empty cart state with "Browse Products" CTA
- Dashboard stats auto-update

**Single Product page:**
- Shows product image, description, and rating.
- Next/Previous navigation to browse products.
- Related products from the same category displayed below.

**Products page:**
- Search, category, and sort filters synced with URL params.
- Clear filters button + active filter chips.
- Clean typography with `font-heading` and `font-body`.

---

## 📈 Roadmap

- [ ] Add backend API for orders & authentication
- [ ] Implement JWT for secure login/signup
- [ ] Add wishlist and product reviews
- [ ] Enhance dashboard analytics

---

## 🧑‍💻 Author

**Priya** — Frontend Developer passionate about clean UI and modular React architecture.

---

## 💬 A Note on This Project

Building an ecommerce dashboard end-to-end — auth flow, protected routing, URL-synced filters, a live cart with quantity logic, and a dashboard that reflects real state — touches most of what a production React app actually needs day to day. A few things worth calling out about how this one is put together:

- **URL-synced filters** (`Products.jsx`) instead of plain component state is a genuinely good call — it means filters survive a refresh and are shareable via link, not just a nice-to-have.
- **Context-driven cart state** shared across `Navbar`, `Cart`, and `ProductDiv` keeps the "add to cart" experience consistent everywhere instead of duplicating logic per component.
- **One thing worth flagging before this goes any further:** the current auth flow stores plaintext credentials (including passwords) in `localStorage`. That's fine for a learning/portfolio project, but if this ever talks to a real backend, swap it for hashed passwords server-side and a proper token (JWT, as already on the roadmap) instead of raw user objects in browser storage.
- The roadmap already lists the two things that matter most for turning this from a great frontend showcase into a real product: a backend for orders/auth, and JWT-based sessions. Everything else (wishlist, reviews, analytics) builds naturally on top of those once they're in place.

Solid foundation — the architecture (context + protected/public routers + URL-driven state) is exactly the shape a real production app would take, just without the backend wired in yet.