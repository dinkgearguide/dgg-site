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
