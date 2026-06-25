const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const requiredFiles = ["index.html", "styles.css", "main.js"];
const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length) {
  throw new Error(`Missing required files: ${missing.join(", ")}`);
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "main.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

for (const expected of ["Itera Demo Store", "data-add-cart", "data-cart-status", "http://127.0.0.1:8787/widget.js", "sdk-task-36f8b9"]) {
  if (!html.includes(expected)) {
    throw new Error(`index.html is missing ${expected}`);
  }
}

for (const expected of [".product-grid", ".product-card", "@media"]) {
  if (!css.includes(expected)) {
    throw new Error(`styles.css is missing ${expected}`);
  }
}

if (!js.includes("data-add-cart") || !js.includes("data-cart-status")) {
  throw new Error("main.js is missing demo cart behavior.");
}

if (!server.includes("/evolveops/deploy")) {
  throw new Error("server.js is missing the local deployment hook endpoint.");
}

// data-itera-text-replacement-zt4d2v
if (!html.includes("智能生活精选")) {
  throw new Error("index.html is missing replacement text 智能生活精选");
}

console.log("Customer test site check passed.");

if (!html.includes("data-itera-product-trust")) throw new Error("index.html is missing product trust marker data-itera-product-trust");
if (!css.includes("data-itera-product-trust")) throw new Error("styles.css is missing product trust marker data-itera-product-trust");

if (!html.includes("data-itera-ai-example")) throw new Error("index.html is missing AI generated marker data-itera-ai-example");


if (!html.includes("data-itera-ai-example")) throw new Error("index.html is missing AI generated marker data-itera-ai-example");
const iteraProductCards = html
  .split("<article")
  .slice(1)
  .map((part) => `<article${part.split("</article>")[0]}</article>`)
  .filter((card) => card.includes("product-card"));
if (!iteraProductCards.length || !iteraProductCards.every((card) => card.includes("data-itera-ai-example") && card.includes("itera-ai-product-price"))) {
  throw new Error("product cards are missing AI generated price blocks");
}
