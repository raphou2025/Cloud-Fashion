function calculateTotal() {
  const productName = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const paymentMethod = document.getElementById("paymentMethod").value;

  if (!productName || !price || !quantity) {
    alert("Please fill in all fields");
    return;
  }

  const total = price * quantity;
  const orderSummary = `
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Price per item:</strong> $${price.toFixed(2)}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
      `;
  document.getElementById("orderSummary").innerHTML = orderSummary;
}

function confirmOrder() {
  if (document.getElementById("orderSummary").innerText.includes("Total")) {
    alert("Thank you! Your order has been confirmed.");
  } else {
    alert("Please calculate your order first.");
  }
}
