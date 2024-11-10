import "./compensation.scss";

const compensation = document.querySelector(".compensation");

function initCompensationComponent() {
  if (compensation) {
    compensation.innerHTML = `
      <div class="compensation__container">
  <div class="compensation__package">
    <h1 class="compensation__title">Компенсационный пакет</h1>
    <div class="compensation__items">
      <div class="compensation__item-wrapper">
        <div class="compensation__item-circle">
          <img class="compensation__item" src="./src/assets/img/compensation/dms.svg" />
        </div>
        <p class="compensation__label">ДМС</p>
      </div>
      <div class="compensation__item-wrapper">
        <div class="compensation__item-circle">
          <img class="compensation__item" src="./src/assets/img/compensation/birthday.svg" />
        </div>
        <p class="compensation__label">Выходной в день рождения</p>
      </div>
      <div class="compensation__item-wrapper">
        <div class="compensation__item-circle">
          <img class="compensation__item" src="./src/assets/img/compensation/phone.svg" />
        </div>
        <p class="compensation__label">Корпоративная мобильная связь</p>
      </div>
      <div class="compensation__item-wrapper">
        <div class="compensation__item-circle">
          <img class="compensation__item" src="./src/assets/img/compensation/kettlebell.svg" />
        </div>
        <p class="compensation__label">Корпоративные скидки на спорт</p>
      </div>
      <div class="compensation__item-wrapper">
        <div class="compensation__item-circle">
          <img class="compensation__item" src="./src/assets/img/compensation/hands.svg" />
        </div>
        <p class="compensation__label">LTI</p>
      </div>
     
    </div>
     <img class="compensation__line" src="./src/assets/img/compensation/line.svg" />
  </div>

  <div class="compensation__program">
    <h1 class="compensation__program__label">Программа дополнительной мотивации <br></be><span class = "red-label">доплата 12% от суммы </span></span></h1>
    <div class="compensation__program__items">
      <div class="compensation__program__item">
        <div class="compensation__item-circle">
          <img class="compensation__item" src="./src/assets/img/compensation/technic.svg" />
        </div>
        <p class="compensation__label">Оргтехники</p>
      </div>
      <div class="compensation__program__item">
        <div class="compensation__item-circle">
          <img class="compensation__item" src="./src/assets/img/compensation/dms.svg" />
        </div>
        <p class="compensation__label">ДМС</p>
      </div>
      <div class="compensation__program__item">
        <div class="compensation__item-circle">
          <img class="compensation__item" src="./src/assets/img/compensation/hypothec.svg" />
        </div>
        <p class="compensation__label">Ипотеки</p>
      </div>
    </div>
  </div>
</div>

    `;
  }
}

initCompensationComponent();
