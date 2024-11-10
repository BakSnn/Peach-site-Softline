import "./aboutCompany.scss";

const aboutCompanyContainer = document.querySelector(".about-company");

// Функция для инициализации и подключения компонента
function initAboutCompanyComponent() {
  if (aboutCompanyContainer) {
    aboutCompanyContainer.innerHTML = `
      <div class="about-company__container">
        <div class="about-company__title">
          <p>Softline</p>
        </div>
        <div class="about-company__subtitle">
          <p class="about-company__subtitle-text">Ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг.</p>
        </div>
      </div>
    `;
  }
}

initAboutCompanyComponent();
