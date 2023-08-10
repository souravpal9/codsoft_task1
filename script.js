document.addEventListener("DOMContentLoaded", function() {
  const totalAmount = document.getElementById("totalAmount");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  const checkoutButton = document.getElementById("checkout");

  let cartTotal = 0.00;

  addToCartButtons.forEach(button => {
    const productPrice = parseFloat(button.getAttribute("data-price"));
    
    button.addEventListener("click", function() {
      cartTotal += productPrice;
      updateCartTotal();
    });
  });

  checkoutButton.addEventListener("click", function() {
    cartTotal = 0.00;
    updateCartTotal();
  });

  function updateCartTotal() {
    totalAmount.textContent = `$${cartTotal.toFixed(2)}`;
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const navbarToggle = document.getElementById("navbarToggle");
  const navLinks = document.getElementById("navLinks");

  navbarToggle.addEventListener("click", function() {
    navLinks.classList.toggle("show");
  });

  navLinks.addEventListener("click", function() {
    navLinks.classList.remove("show");
  });

 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
