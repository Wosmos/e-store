src/
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   │
│   └── features/
│       ├── cart/
│       │   ├── CartDrawer.tsx
│       │   ├── CartItem.tsx
│       │   └── ...
│       │
│       ├── profile/
│       │   ├── ProfileDrawer.tsx
│       │   └── ...
│       │
│       └── search/
│           ├── SearchDrawer.tsx
│           └── ...
│
├── pages/
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── ProductDetails.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Profile.tsx
│   ├── Blog.tsx
│   ├── ContactUs.tsx
│   └── ...
│
├── services/
│   ├── api.ts
│   └── ...
│
├── store/
│   ├── index.ts
│   ├── rootReducer.ts
│   │
│   ├── cart/
│   │   ├── cartSlice.ts
│   │   └── cartSelectors.ts
│   │
│   ├── user/
│   │   ├── userSlice.ts
│   │   └── userSelectors.ts
│   │
│   └── ...
│
├── styles/
│   ├── index.css
│   └── tailwind.css
│
├── types/
│   ├── product.ts
│   ├── user.ts
│   └── ...
│
├── utils/
│   ├── formatters.ts
│   ├── validators.ts
│   └── ...
│
├── hooks/
│   ├── useCart.ts
│   ├── useAuth.ts
│   └── ...
│
├── routes/
│   └── index.tsx
│
├── App.tsx
└── main.tsx