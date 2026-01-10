# 🚀 B4N Website - Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] Domain registered: **be4name.ch** (Infomaniak)
- [ ] Stripe account created
- [ ] Vercel account created
- [ ] Product images uploaded

---

## 📋 STEP 1: Deploy to Vercel (10 minutes)

### 1.1 Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub/Google/Email
3. Verify your email

### 1.2 Import Project
1. Click **"Add New Project"**
2. Select **"Import Git Repository"** or upload files
3. Choose the `b4n-website` folder
4. Vercel will auto-detect Next.js configuration

### 1.3 Configure Project
```
Project Name: b4n-website
Framework: Next.js
Root Directory: ./
Build Command: npm run build (auto-detected)
Output Directory: .next (auto-detected)
```

### 1.4 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. You'll get a URL like: `https://b4n-website-xyz.vercel.app`

✅ **Website is now live on Vercel!**

---

## 🌐 STEP 2: Connect Domain be4name.ch (15 minutes)

### 2.1 In Vercel Dashboard
1. Go to your project → **Settings** → **Domains**
2. Add domain: `be4name.ch`
3. Vercel will show DNS records you need to add

### 2.2 Vercel will give you these DNS records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 2.3 In Infomaniak (your domain registrar)
1. Login to Infomaniak account
2. Go to **Domains** → **be4name.ch** → **DNS Management**
3. Add the DNS records from Vercel:
   - **A Record**: @ → 76.76.21.21
   - **CNAME Record**: www → cname.vercel-dns.com
4. Save changes

### 2.4 Wait for DNS propagation
- Usually takes: **5-30 minutes**
- Can take up to: **24 hours** (rare)
- Check status: https://dnschecker.org/

✅ **Domain connected! Website accessible at be4name.ch**

---

## 💳 STEP 3: Setup Stripe (15 minutes)

### 3.1 Create Stripe Account
1. Go to https://stripe.com/ch
2. Sign up with: be4name@gmail.com
3. Verify your email
4. Complete business verification:
   - Business name: B4N
   - Business type: E-commerce
   - Country: Switzerland
   - Bank account: Your Swiss IBAN

### 3.2 Get API Keys
1. In Stripe Dashboard → **Developers** → **API Keys**
2. You'll see:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

**⚠️ Important**: Use **test keys** first, then switch to **live keys** after testing!

### 3.3 Add Keys to Vercel
1. Go to Vercel project → **Settings** → **Environment Variables**
2. Add these variables:

```
Key: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
Value: pk_test_YOUR_KEY_HERE

Key: STRIPE_SECRET_KEY  
Value: sk_test_YOUR_KEY_HERE
```

3. Click **Save**
4. Go to **Deployments** → **Redeploy** (to apply env vars)

✅ **Stripe integrated! Payments ready**

---

## 📸 STEP 4: Add Product Images (Optional)

### 4.1 Prepare Images
- Format: JPG or PNG
- Size: 1000x1000px (square)
- Background: White (preferred)
- Naming: `[SKU].jpg` (e.g., `305610.jpg`, `505610.jpg`)

### 4.2 Upload to Vercel
**Option A: Via Git**
1. Add images to `/public/images/` folder
2. Commit and push to Git
3. Vercel auto-deploys

**Option B: Manual**
1. Upload via Vercel dashboard
2. Or use Vercel CLI: `vercel --prod`

---

## 🎉 FINAL RESULT

Your website will be live at:
- **Main domain**: https://be4name.ch
- **German**: https://be4name.ch/de (default)
- **French**: https://be4name.ch/fr
- **Italian**: https://be4name.ch/it
- **English**: https://be4name.ch/en

---

## 🔍 Testing Checklist

- [ ] Homepage loads correctly
- [ ] All 4 languages work (DE, FR, IT, EN)
- [ ] Product catalog displays 23 products
- [ ] B2B page shows correct information
- [ ] Contact info is correct
- [ ] Mobile responsive (test on phone)
- [ ] Stripe test payment works

---

## 📞 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Verify DNS settings in Infomaniak
3. Test Stripe keys in test mode first
4. Contact me for support

---

## 🚀 What's Next?

After deployment:
1. Add Google Analytics (tracking code)
2. Setup email marketing (Klaviyo)
3. Implement shopping cart backend
4. Add admin dashboard
5. Upload real product photos
6. Launch marketing campaign!

---

**Estimated Total Time**: 40-60 minutes  
**Domain + Hosting Cost**: ~15 CHF/year (domain only, Vercel is free)

Good luck! 🍀
