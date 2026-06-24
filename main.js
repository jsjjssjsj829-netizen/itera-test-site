const statusEl = document.querySelector("[data-cart-status]");
const buttons = document.querySelectorAll("[data-add-cart]");
const cart = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.getAttribute("data-add-cart") || "Demo item";
    cart.push(item);
    if (statusEl) {
      statusEl.textContent = `${cart.length} item${cart.length === 1 ? "" : "s"} in demo cart: ${cart.join(", ")}`;
    }
  });
});
