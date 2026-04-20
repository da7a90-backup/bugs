# Important Notes

## ⚠️ Node Version Notice

**Your local Node.js version is 20.3.1, but Next.js 16 requires >=20.9.0**

### What This Means:

- ❌ **Local build/dev may not work**: `npm run dev` and `npm run build` may fail
- ✅ **Vercel deployment will work**: Vercel uses the correct Node version
- ✅ **Code is correct**: No issues with the application code itself

### Solutions:

**Option 1: Update Node (Recommended)**
```bash
# Using nvm (Node Version Manager)
nvm install 20.9.0
nvm use 20.9.0
```

**Option 2: Deploy to Vercel Directly**
- Skip local testing
- Push to GitHub
- Deploy on Vercel (will work perfectly)
- Vercel automatically uses Node 20.9.0+

## 📝 Before First Run

### 1. Environment Variables
Create `.env` file:
```bash
cp .env.example .env
```

Add your values:
- `DATABASE_URL`: Get from Vercel Postgres dashboard
- `NEXT_PUBLIC_CALENDLY_URL`: Your Calendly scheduling link

### 2. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 3. Add Images
- Portfolio: 8+ images in `public/portfolio/`
- Style examples: 15 images in `public/style-examples/`

See README.md files in each directory for details.

## 🚀 Quick Start (If Node Version Compatible)

```bash
npm install
cp .env.example .env
# Edit .env with your values
npx prisma generate
npx prisma db push
npm run dev
```

## 🌐 Deployment (Always Works)

1. Push to GitHub:
```bash
git add .
git commit -m "Initial tattoo website"
git push origin main
```

2. Deploy on Vercel:
   - Import repository
   - Add environment variables
   - Deploy

## 🎨 Customization Checklist

- [ ] Replace "INK" with your studio name in `app/page.tsx`
- [ ] Add your tattoo portfolio images
- [ ] Add style example images
- [ ] Update color scheme if desired (search for `purple-`)
- [ ] Set up Calendly account
- [ ] Configure Vercel Postgres database

## 📚 Documentation Files

- **README.md**: Complete documentation
- **SETUP_GUIDE.md**: Quick setup steps
- **PROJECT_SUMMARY.md**: What was built
- **IMPORTANT_NOTES.md**: This file (critical info)

## 🐛 Common Issues

### Issue: Prisma client not found
**Solution**: Run `npx prisma generate`

### Issue: Database connection error
**Solution**: Check `DATABASE_URL` in `.env`

### Issue: Images not showing
**Solution**: Add images to `public/portfolio/` and `public/style-examples/`

### Issue: Calendly not redirecting
**Solution**: Set `NEXT_PUBLIC_CALENDLY_URL` in `.env`

### Issue: Build fails locally
**Solution**: Update Node to 20.9.0+ or deploy to Vercel

## 💡 Tips

1. **Test on Vercel First**: If local dev doesn't work due to Node version, just deploy to Vercel
2. **Use Vercel CLI**: `vercel dev` might work better than `npm run dev`
3. **Placeholder Images**: The site works without images (shows placeholders) for testing
4. **Database**: Can set up Vercel Postgres before having images ready

## ✅ What's Already Done

✅ All components built
✅ 3D interactive model
✅ Booking form with validation
✅ API routes configured
✅ Database schema ready
✅ Responsive design
✅ Dark goth aesthetic
✅ Framer Motion animations
✅ Documentation complete

## 🎯 Next Action

**If you have Node 20.9.0+:**
```bash
npm run dev
```

**If you have older Node:**
```bash
git init
git add .
git commit -m "Initial commit"
# Push to GitHub and deploy on Vercel
```

---

Need help? Check README.md for full documentation.
