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

for (const expected of ["Itera Demo Store", "data-add-cart", "data-cart-status"]) {
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

console.log("Customer test site check passed.");
