# Dink Gear Guide

## 1. Project overview

Dink Gear Guide is a static affiliate gear guide for beginner pickleball players. It helps visitors compare beginner-friendly paddles, starter sets, balls, bags, accessories, gifts, and simple court gear without adding ecommerce checkout, inventory, or live pricing.

## 2. Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub Pages
- Static export
- Static product data

## 3. Running locally

```bash
npm install
npm run dev
```

## 4. Building

```bash
npm run build
```

The static export is generated in:

```text
out/
```

## 5. Editing products

Product data is stored in:

```text
src/data/products.ts
```

Replace placeholder affiliate URLs:

```text
#replace-with-affiliate-link
```

Keep product copy factual. Do not add fake reviews, fake ratings, or unverified testing claims.

## 6. Replacing images

Placeholder images live in:

```text
public/images/products/
```

Replace them with owner-provided or properly licensed images. Do not scrape Amazon images or retailer images unless the site owner has permission to use them.

## 7. Affiliate compliance reminders

- Keep affiliate disclosures visible
- Do not fake reviews
- Do not show live prices unless verified
- Do not claim personal testing unless true
- Do not make medical or injury-prevention claims
- Verify tournament approval claims before publishing

## 8. Deploying to GitHub Pages

- Push the project to a GitHub repository.
- Go to repository Settings.
- Go to Pages.
- Under Build and deployment, set Source to GitHub Actions.
- Push to the main branch.
- GitHub Actions will build the static site and publish it.
- Under Custom domain, enter dinkgearguide.com.
- At the domain registrar, configure DNS records for GitHub Pages.
- Add the four GitHub Pages A records for the apex domain.
- Add a CNAME record for www pointing to YOUR-GITHUB-USERNAME.github.io.
- Wait for DNS propagation.
- Enable HTTPS in GitHub Pages settings once available.
- Confirm both dinkgearguide.com and www.dinkgearguide.com work.

## 9. GitHub Pages static site restrictions

- No backend code
- No API routes
- No database
- Contact form is UI-only unless connected later to a third-party form provider
- Email signup is UI-only unless connected later to an email provider
- Affiliate click tracking logs to console only unless connected later to analytics
- Product data is manually edited

## 10. Launch checklist

- Replace affiliate links
- Review legal pages
- Replace placeholder images
- Configure GitHub Pages source
- Configure custom domain
- Verify HTTPS
- Test navigation
- Test product pages
- Test mobile layout
- Test affiliate buttons
