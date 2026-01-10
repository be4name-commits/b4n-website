# B4N Premium Leather Accessories - Website

Swiss precision e-commerce website for B4N premium leather accessories.

## 🚀 Features

- ✅ **Multi-language support**: German (DE), French (FR), Italian (IT), English (EN)
- ✅ **Swiss Precision Grid Design**: Minimalist black & white aesthetic
- ✅ **Responsive**: Mobile-first design
- ✅ **23 Products**: Wallets, Footwear, Belts, Toiletry Bags, Cosmetic Bags
- ✅ **B2B Section**: Partner program information
- ✅ **SEO Optimized**: Meta tags, structured data ready
- ⏳ **Stripe Integration**: Ready for setup (API keys needed)
- ⏳ **Shopping Cart**: Frontend ready, backend in progress

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌍 Multi-language Routes

- German (default): `https://be4name.ch/de`
- French: `https://be4name.ch/fr`
- Italian: `https://be4name.ch/it`
- English: `https://be4name.ch/en`

## 📂 Project Structure

```
b4n-website/
├── app/
│   ├── [lang]/              # Multi-language pages
│   │   ├── page.tsx         # Homepage
│   │   ├── products/        # Product catalog
│   │   ├── b2b/             # B2B page
│   │   ├── cart/            # Shopping cart
│   │   └── contact/         # Contact page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Site header with nav
│   └── Footer.tsx           # Site footer
├── lib/
│   ├── i18n.ts              # Translations
│   └── products.ts          # Product data utilities
├── data/
│   └── B4N_Products_4Languages.json  # Product database
└── public/
    └── images/              # Product images (to be added)
```

## 🎨 Design System

### Colors
- **Primary**: #000000 (Black)
- **Secondary**: #FFFFFF (White)
- **Accent**: #1A1A1A (Dark Gray)
- **Border**: #E5E5E5 (Light Gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚢 Shipping Configuration

- **Free shipping**: Orders over 300 CHF
- **Switzerland**: 9 CHF
- **Europe**: 20 CHF
- **Rest of World**: 40 CHF

## 💳 Payment (To Be Integrated)

- **Stripe**: Credit cards, Twint, Apple Pay, Google Pay
- **Commission**: 1.5% + 0.30 CHF per transaction

## 📧 Contact

- **Email**: be4name@gmail.com
- **Phone**: +41 79 660 81 59
- **Domain**: be4name.ch

## 🔒 Environment Variables

Create `.env.local`:

```env
# Stripe (when ready)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...

# Email (optional)
EMAIL_FROM=be4name@gmail.com
```

## 📝 Next Steps

1. ✅ Domain registered: be4name.ch
2. ⏳ Stripe setup: Get API keys
3. ⏳ Add product images to `/public/images/`
4. ⏳ Deploy to Vercel
5. ⏳ Connect domain to Vercel
6. ⏳ Add Google Analytics
7. ⏳ Integrate Stripe checkout
8. ⏳ Add admin dashboard

## 📄 License

© 2026 B4N. All rights reserved.
