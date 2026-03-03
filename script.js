let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(name, price, image) {
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Display cart items
function displayCart() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let total = 0;
  cartItems.forEach((item, index) => {
    total += item.price;
    cartDiv.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-img">
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  cartDiv.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

// Remove item from cart
function removeItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCart();
}