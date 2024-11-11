import "./header.scss";
import logo from "@/assets/img/header/logo.svg"
const header = document.querySelector(".header");

// Функция для инициализации и подключения компонента
function initHeaderComponent() {
  if (header) {
    header.innerHTML = `
      <div class="header__container">
        <img src="${logo}" class="header__logo" alt="Логотип" />
        <nav class="header__nav">
          <a href="#" class="header__link">Облачные решения</a>
          <a href="#" class="header__link">Кибербезопасность</a>
          <a href="#" class="header__link">Импортозамещение</a>
          <a href="#" class="header__link">Цифровая трансформация</a>
        </nav>
      </div>
    `;
  }
}

initHeaderComponent();
