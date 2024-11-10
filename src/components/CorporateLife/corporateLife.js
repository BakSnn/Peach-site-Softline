import "./corporateLife.scss";

function initCorporateLife() {
  const corporateLife = document.querySelector(".corporate-life");

  if (corporateLife) {
    corporateLife.innerHTML = `
      <div class="corporate__container">
        <div class="corporate__arrow">
          <h1 class="corporate__title">Корпоративная жизнь</h1>
          <button class="arrow left-arrow">
            <img src="./src/assets/img/corporat-life/arrow-left.svg" alt="Left Arrow">
          </button>
          <button class="arrow right-arrow">
            <img src="./src/assets/img/corporat-life/arrow-right.svg" alt="Right Arrow">
          </button>
        </div>

        <div class="gallery">
          <div class="gallery__images">
            <img src="./src/assets/img/corporat-life/Слайд1.png" alt="Image1" class="gallery__image active">
            <img src="./src/assets/img/corporat-life/Слайд2.png" alt="Image2" class="gallery__image">
            <img src="./src/assets/img/corporat-life/Слайд3.png" alt="Image3" class="gallery__image">
            <img src="./src/assets/img/corporat-life/Слайд4.png" alt="Image4" class="gallery__image">
            <img src="./src/assets/img/corporat-life/Слайд5.png" alt="Image5" class="gallery__image">
          </div>
        </div>

        <div class="gallery-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    `;

    const images = corporateLife.querySelectorAll(".gallery__image");
    const dots = corporateLife.querySelectorAll(".dot");
    const leftArrow = corporateLife.querySelector(".left-arrow");
    const rightArrow = corporateLife.querySelector(".right-arrow");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    leftArrow.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
      currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      showImage(currentIndex);
    });
  }
}

initCorporateLife();
