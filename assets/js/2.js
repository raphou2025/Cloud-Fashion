document.addEventListener("DOMContentLoaded", function() {
  // Handle Add to Cart button interactions
  document.querySelectorAll(".btn-add-to-card, .btn-add-to-card-2").forEach((btn) => {
    btn.addEventListener("click", () => {
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

  // Setup slider navigation
  const slider = document.getElementById("productSlider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (slider && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 250, behavior: "smooth" });
    });
  }
});
