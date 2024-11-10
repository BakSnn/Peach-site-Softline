import "./mission.scss";

const mission = document.querySelector(".mission");

function initMissionComponent() {
  if (mission) {
    mission.innerHTML = `
      <div class="mission__container">
        <div class="mission__block">
          <h1 class="mission__title">Миссия Softline</h1>
          <p class="mission__subtitle">Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики.</p>
        </div>
      </div>
    `;
  }
}

initMissionComponent();
