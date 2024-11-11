import "./compensation.scss";
import dmsIcon from "./assets/img/compensation/dms.svg";
import birthdayIcon from "./assets/img/compensation/birthday.svg";
import phoneIcon from "./assets/img/compensation/phone.svg";
import kettlebellIcon from "./assets/img/compensation/kettlebell.svg";
import handsIcon from "./assets/img/compensation/hands.svg";
import lineIcon from "./assets/img/compensation/line.svg";
import technicIcon from "./assets/img/compensation/technic.svg";
import hypothecIcon from "./assets/img/compensation/hypothec.svg";

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
                <img class="compensation__item" src="${dmsIcon}" />
              </div>
              <p class="compensation__label">ДМС</p>
            </div>
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${birthdayIcon}" />
              </div>
              <p class="compensation__label">Выходной в день рождения</p>
            </div>
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${phoneIcon}" />
              </div>
              <p class="compensation__label">Корпоративная мобильная связь</p>
            </div>
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${kettlebellIcon}" />
              </div>
              <p class="compensation__label">Корпоративные скидки на спорт</p>
            </div>
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${handsIcon}" />
              </div>
              <p class="compensation__label">LTI</p>
            </div>
          </div>
          <img class="compensation__line" src="${lineIcon}" />
        </div>

        <div class="compensation__program">
          <h1 class="compensation__program__label">
            Программа дополнительной мотивации <br>
            <span class="red-label">доплата 12% от суммы</span>
          </h1>
          <div class="compensation__program__items">
            <div class="compensation__program__item">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${technicIcon}" />
              </div>
              <p class="compensation__label">Оргтехники</p>
            </div>
            <div class="compensation__program__item">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${dmsIcon}" />
              </div>
              <p class="compensation__label">ДМС</p>
            </div>
            <div class="compensation__program__item">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${hypothecIcon}" />
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
