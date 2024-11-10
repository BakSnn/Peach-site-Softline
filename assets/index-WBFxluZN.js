(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const m=document.querySelector(".header");function g(){m&&(m.innerHTML=`
      <div class="header__container">
        <img src="./src/assets/img/logo.svg" class="header__logo" alt="Логотип" />
        <nav class="header__nav">
          <a href="#" class="header__link">Облачные решения</a>
          <a href="#" class="header__link">Кибербезопасность</a>
          <a href="#" class="header__link">Импортозамещение</a>
          <a href="#" class="header__link">Цифровая трансформация</a>
        </nav>
      </div>
    `)}g();const _=document.querySelector(".about-company");function u(){_&&(_.innerHTML=`
      <div class="about-company__container">
        <div class="about-company__title">
          <p>Softline</p>
        </div>
        <div class="about-company__subtitle">
          <p class="about-company__subtitle-text">Ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг.</p>
        </div>
      </div>
    `)}u();class b{constructor(i){this.container=document.querySelector(i),this.regions={moscow:{name:"Москва",cities:[{name:"Москва",coordinates:[12.2,38.2],label:"Москва"}]},center:{name:"Центр",cities:[{name:"Воронеж",coordinates:[8,42],label:"Воронеж"},{name:"Ярославль",coordinates:[15.5,34],label:"Ярославль"},{name:"Белгород",coordinates:[8,46.8],label:"Белгород"}]},northwest:{name:"Северо-Запад",cities:[{name:"Санкт-Петербург",coordinates:[13,23],label:"Санкт-Петербург"},{name:"Калининград",coordinates:[3.5,21.8],label:"Калининград"}]},south:{name:"Юг",cities:[{name:"Ростов-на-Дону",coordinates:[7.2,54.2],label:"Ростове-на-Дону"},{name:"Краснодар",coordinates:[4.5,64.3],label:"Краснодар"},{name:"Волгоград",coordinates:[9.5,61.5],label:"Волгоград"}]},volga:{name:"Волга",cities:[{name:"Казань",coordinates:[21.2,50.7],label:"Казань"},{name:"Самара",coordinates:[16.1,52],label:"Самара"},{name:"Уфа",coordinates:[21.5,57],label:"Уфа"},{name:"Оренбург",coordinates:[18.8,62],label:"Оренбург"},{name:"Нижний Новгород",coordinates:[16.5,44.6],label:"Н. Новгород"}]},ural:{name:"Урал",cities:[{name:"Екатеринбург",coordinates:[27.3,56],label:"Екатеринбург"},{name:"Челябинск",coordinates:[27.1,61.5],label:"Челябинск"},{name:"Пермь",coordinates:[32.3,51],label:"Пермь"},{name:"Сургут",coordinates:[36.7,53],label:"Сургут"},{name:"Тюмень",coordinates:[34.9,61.5],label:"Тюмень"},{name:"Ижевск",coordinates:[27.8,49.2],label:"Ижевск"}]},siberia:{name:"Сибирь",cities:[{name:"Новосибирск",coordinates:[43.3,76.7],label:"Новосибирск"},{name:"Омск",coordinates:[38.9,80.1],label:"Омск"},{name:"Томск",coordinates:[48.9,77.5],label:"Томск"},{name:"Красноярск",coordinates:[53.7,77.2],label:"Красноярск"},{name:"Иркутск",coordinates:[58.3,82.5],label:"Иркутск"}]},far_east:{name:"Дальний Восток",cities:[{name:"Хабаровск",coordinates:[83,84],label:"Хабаровск"},{name:"Владивосток",coordinates:[82,96.8],label:"Владивосток"}]}}}init(){this.container&&(this.container.innerHTML=`
      <div class="office-list__container">
        <div class="office-list__dropdown">
          <button class="office-list__dropdown-button">
            Офисы Softline
            <div class="office-list__dropdown-icon">
              <img src="./src/assets/img/office-list/dropdown-arrow.svg" alt="dropdown arrow">
            </div>
          </button>
          <div class="office-list__dropdown-content">
            ${Object.values(this.regions).map(i=>`<div class="office-list__region" data-region="${i.name}">
                    <h4>${i.name}</h4>
                    ${i.cities.map(e=>`<p>${e.name}</p>`).join("")}
                  </div>`).join("")}
          </div>
        </div>
        <nav class="office-list__nav">
          <a href="#" class="office-list__link office-list__link_active" data-region="all">Все</a>
          ${Object.values(this.regions).map(i=>`<a href="#" class="office-list__link" data-region="${i.name}">${i.name}</a>`).join("")}
        </nav>
      </div>
      <div class="office-list__map">
        <img src="./src/assets/img/office-list/map.svg" alt="map" />
        <div class="office-list__cities"></div>
      </div>
    `,this.initializeDropdown(),this.activateNavLinks(),this.filterOffices("all"))}initializeDropdown(){const i=this.container.querySelector(".office-list__dropdown-button"),e=this.container.querySelector(".office-list__dropdown-content"),t=this.container.querySelector(".office-list__dropdown-icon img"),s=this.container.querySelectorAll(".office-list__link");i.addEventListener("click",()=>{e.classList.toggle("office-list__dropdown-content_visible"),t.classList.toggle("rotated"),s.forEach(a=>{a.classList.toggle("transparent")})})}activateNavLinks(){const i=this.container.querySelectorAll(".office-list__link");i.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),i.forEach(s=>s.classList.remove("office-list__link_active")),e.classList.add("office-list__link_active"),this.filterOffices(e.dataset.region)})})}filterOffices(i){const e=this.container.querySelector(".office-list__cities");if(e.innerHTML="",i==="all")Object.values(this.regions).forEach(t=>{t.cities.forEach(s=>{this.addCityMarker(e,s)})});else{const t=Object.values(this.regions).find(s=>s.name.toLowerCase()===i.toLowerCase());t?t.cities.forEach(s=>{this.addCityMarker(e,s)}):console.warn(`Регион ${i} не найден`)}}addCityMarker(i,e){const t=document.createElement("div");t.classList.add("city-marker"),t.style.position="absolute",t.style.left=`${e.coordinates[0]}%`,t.style.top=`${e.coordinates[1]}%`,t.title=e.name;const s=document.createElement("div");s.classList.add("city-label"),s.style.position="absolute",s.style.left=`${e.coordinates[0]}%`,s.style.top=`${e.coordinates[1]-5}%`,s.innerText=e.label,i.appendChild(t),i.appendChild(s),s.style.display="block"}}const h=new b(".office-list");h.init();const p=document.querySelector(".mission");function y(){p&&(p.innerHTML=`
      <div class="mission__container">
        <div class="mission__block">
          <h1 class="mission__title">Миссия Softline</h1>
          <p class="mission__subtitle">Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики.</p>
        </div>
      </div>
    `)}y();const v=document.querySelector(".business-directions");function w(){v&&(v.innerHTML=`
      <div class="business-direction__container">
        <h1 class="business-direction__title">Направления бизнеса</h1>
        <div class="business-direction__grid">
          <div class="business-direction__item">
            <img class="business-direction__image" src="./src/assets/img/business-directions/Softline Solutions.png" alt="Softline Solutions">
            <div class="business-direction__text">Решения Softline</div>
            <div class="business-direction__overlay">ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="./src/assets/img/business-directions/Cybersecurity.png" alt="Cybersecurity">
            <div class="business-direction__text">Кибербезопасность</div>
            <div class="business-direction__overlay">Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. </div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="./src/assets/img/business-directions/Import substitution.png" alt="Import substitution">
            <div class="business-direction__text">Импортозамещение</div>
            <div class="business-direction__overlay">ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="./src/assets/img/business-directions/Cloud solutions.png" alt="Cloud solutions">
            <div class="business-direction__text">Облачные решения</div>
            <div class="business-direction__overlay">Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="./src/assets/img/business-directions/Digital transformation.png" alt="Digital transformation">
            <div class="business-direction__text">Цифровая трансформация и разработка ПО</div>
            <div class="business-direction__overlay">Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="./src/assets/img/business-directions/Technical support.png" alt="Technical support">
            <div class="business-direction__text">Техническая поддержка Softline</div>
            <div class="business-direction__overlay">200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.</div>
          </div>
        </div>
      </div>
    `)}w();const f=document.querySelector(".compensation");function L(){f&&(f.innerHTML=`
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

    `)}L();function S(){const n=document.querySelector(".corporate-life");if(n){let c=function(d){e.forEach((l,r)=>{l.classList.toggle("active",r===d)}),t.forEach((l,r)=>{l.classList.toggle("active",r===d)})};var i=c;n.innerHTML=`
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
    `;const e=n.querySelectorAll(".gallery__image"),t=n.querySelectorAll(".dot"),s=n.querySelector(".left-arrow"),a=n.querySelector(".right-arrow");let o=0;s.addEventListener("click",()=>{o=o>0?o-1:e.length-1,c(o)}),a.addEventListener("click",()=>{o=o<e.length-1?o+1:0,c(o)})}}S();
