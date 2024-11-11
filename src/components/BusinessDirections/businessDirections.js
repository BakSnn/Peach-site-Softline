import "./businessDirections.scss";
import softlineSolutionsImg from "./assets/img/business-directions/SoftlineSolutions.png";
import cybersecurityImg from "./assets/img/business-directions/Cybersecurity.png";
import importSubstitutionImg from "./assets/img/business-directions/ImportSubstitution.png";
import cloudSolutionsImg from "./assets/img/business-directions/CloudSolutions.png";
import digitalTransformationImg from "./assets/img/business-directions/DigitalTransformation.png";
import technicalSupportImg from "./assets/img/business-directions/TechnicalSupport.png";

const mission = document.querySelector(".business-directions");

function initBusinessDirectionsComponent() {
  if (mission) {
    mission.innerHTML = `
      <div class="business-direction__container">
        <h1 class="business-direction__title">Направления бизнеса</h1>
        <div class="business-direction__grid">
          <div class="business-direction__item">
            <img class="business-direction__image" src="${softlineSolutionsImg}" alt="Softline Solutions">
            <div class="business-direction__text">Решения Softline</div>
            <div class="business-direction__overlay">ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${cybersecurityImg}" alt="Cybersecurity">
            <div class="business-direction__text">Кибербезопасность</div>
            <div class="business-direction__overlay">Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${importSubstitutionImg}" alt="Import substitution">
            <div class="business-direction__text">Импортозамещение</div>
            <div class="business-direction__overlay">ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${cloudSolutionsImg}" alt="Cloud solutions">
            <div class="business-direction__text">Облачные решения</div>
            <div class="business-direction__overlay">Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${digitalTransformationImg}" alt="Digital transformation">
            <div class="business-direction__text">Цифровая трансформация и разработка ПО</div>
            <div class="business-direction__overlay">Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${technicalSupportImg}" alt="Technical support">
            <div class="business-direction__text">Техническая поддержка Softline</div>
            <div class="business-direction__overlay">200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.</div>
          </div>
        </div>
      </div>
    `;
  }
}

initBusinessDirectionsComponent();
