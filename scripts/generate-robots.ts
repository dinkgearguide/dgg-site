import { writeFileSync } from "node:fs";
import { absoluteUrl } from "../src/lib/seo";

const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;

writeFileSync("public/robots.txt", robots);
