// Renders each route to static HTML after `vite build` so crawlers get full content.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const serverEntry = path.resolve("dist-server/entry-server.js");
const { render } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const pages = [
  { url: "/", out: "index.html" },
  { url: "/privacy", out: "privacy/index.html" },
  { url: "/terms", out: "terms/index.html" },
  { url: "/__not-found__", out: "404.html" },
];

for (const { url, out } of pages) {
  const { html, head } = render(url);
  const page = template
    .replace("<!--app-head-->", head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const file = path.join(dist, out);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  console.log(`prerendered ${url} -> dist/${out}`);
}
fs.rmSync(path.resolve("dist-server"), { recursive: true, force: true });
