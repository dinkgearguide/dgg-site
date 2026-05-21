# Dink Gear Guide

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is written to:

```text
out/
```

## Product Data

Edit products in:

```text
src/data/products.ts
```

Replace placeholder affiliate URLs:

```text
#replace-with-affiliate-link
```

## Images

Placeholder product images live in:

```text
public/images/products/
```

Use owner-provided or properly licensed replacement images.

## SEO Setup

- The sitemap is generated at `public/sitemap.xml` before build.
- The live sitemap should be available at `https://dinkgearguide.com/sitemap.xml`.
- The live robots file should be available at `https://dinkgearguide.com/robots.txt`.
- Submit the sitemap in Google Search Console after deployment.
- Placeholder products with missing affiliate links should remain noindex and should not appear in the sitemap.
- Affiliate links should use `rel="sponsored nofollow"`.
- Do not use fake reviews, fake ratings, or fake pricing schema.

## Deployment

GitHub Pages deployment is handled by:

```text
.github/workflows/deploy.yml
```

Repository settings:

- Pages source: GitHub Actions
- Custom domain: `dinkgearguide.com`
- Enable HTTPS once available

DNS:

- Apex domain: GitHub Pages A records
- `www`: CNAME to `YOUR-GITHUB-USERNAME.github.io`

## Launch Checklist

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
