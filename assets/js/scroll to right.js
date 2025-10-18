// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Add to Cart interaction
  const cartButtons = document.querySelectorAll('.best-seller-section .btn-add-to-card');
  cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.disabled) {
        btn.textContent = "Added!";
        btn.style.backgroundColor = "#4161a6";
        btn.style.color = "#fff";
        setTimeout(() => {
          btn.textContent = "Add to Cart";
          btn.style.backgroundColor = "#ffffff";
          btn.style.color = "#222";
        }, 1000);
      }
    });
  });

  // Slider navigation
  const slider = document.getElementById('productSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (slider && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -250, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: 250, behavior: 'smooth' });
    });
  }
});
