import { readFileSync, writeFileSync } from "node:fs";

const homepagePath = "out/index.html";
const exactTag =
  '<script type="text/javascript" src="http://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=917f17cc8730c4effaa0a26aaeccfd0e034d38f0"></script>';
const escapedTag =
  '<script type="text/javascript" src="http://classic.avantlink.com/affiliate_app_confirm.php?mode=js&amp;authResponse=917f17cc8730c4effaa0a26aaeccfd0e034d38f0"></script>';

const html = readFileSync(homepagePath, "utf8");
const updatedHtml = html.replace(escapedTag, exactTag);

if (!updatedHtml.includes(exactTag)) {
  throw new Error("AvantLink verification tag is missing from exported homepage.");
}

writeFileSync(homepagePath, updatedHtml);
