(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const m=document.querySelector(".header");function f(){m&&(m.innerHTML=`
      <div class="header__container">
        <img src="./src/assets/img/logo.svg" class="header__logo" alt="Логотип" />
        <nav class="header__nav">
          <a href="#" class="header__link">Облачные решения</a>
          <a href="#" class="header__link">Кибербезопасность</a>
          <a href="#" class="header__link">Импортозамещение</a>
          <a href="#" class="header__link">Цифровая трансформация</a>
        </nav>
      </div>
    `)}f();const _=document.querySelector(".about-company");function u(){_&&(_.innerHTML=`
      <div class="about-company__container">
        <div class="about-company__title">
          <p>Softline</p>
        </div>
        <div class="about-company__subtitle">
          <p class="about-company__subtitle-text">Ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг.</p>
        </div>
      </div>
    `)}u();const w="/Peach-site-Softline/assets/map-CehMI-hF.svg",b="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.10156%207.99683L12.1016%2016.0179L22.1016%207.99683'%20stroke='%23444444'%20stroke-width='3'/%3e%3c/svg%3e";class C{constructor(s){this.container=document.querySelector(s),this.regions={moscow:{name:"Москва",cities:[{name:"Москва",coordinates:[12.2,38.2],label:"Москва"}]},center:{name:"Центр",cities:[{name:"Воронеж",coordinates:[8,42],label:"Воронеж"},{name:"Ярославль",coordinates:[15.5,34],label:"Ярославль"},{name:"Белгород",coordinates:[8,46.8],label:"Белгород"}]},northwest:{name:"Северо-Запад",cities:[{name:"Санкт-Петербург",coordinates:[13,23],label:"Санкт-Петербург"},{name:"Калининград",coordinates:[3.5,21.8],label:"Калининград"}]},south:{name:"Юг",cities:[{name:"Ростов-на-Дону",coordinates:[7.2,54.2],label:"Ростове-на-Дону"},{name:"Краснодар",coordinates:[4.5,64.3],label:"Краснодар"},{name:"Волгоград",coordinates:[9.5,61.5],label:"Волгоград"}]},volga:{name:"Волга",cities:[{name:"Казань",coordinates:[21.2,50.7],label:"Казань"},{name:"Самара",coordinates:[16.1,52],label:"Самара"},{name:"Уфа",coordinates:[21.5,57],label:"Уфа"},{name:"Оренбург",coordinates:[18.8,62],label:"Оренбург"},{name:"Нижний Новгород",coordinates:[16.5,44.6],label:"Н. Новгород"}]},ural:{name:"Урал",cities:[{name:"Екатеринбург",coordinates:[27.3,56],label:"Екатеринбург"},{name:"Челябинск",coordinates:[27.1,61.5],label:"Челябинск"},{name:"Пермь",coordinates:[32.3,51],label:"Пермь"},{name:"Сургут",coordinates:[36.7,53],label:"Сургут"},{name:"Тюмень",coordinates:[34.9,61.5],label:"Тюмень"},{name:"Ижевск",coordinates:[27.8,49.2],label:"Ижевск"}]},siberia:{name:"Сибирь",cities:[{name:"Новосибирск",coordinates:[43.3,76.7],label:"Новосибирск"},{name:"Омск",coordinates:[38.9,80.1],label:"Омск"},{name:"Томск",coordinates:[48.9,77.5],label:"Томск"},{name:"Красноярск",coordinates:[53.7,77.2],label:"Красноярск"},{name:"Иркутск",coordinates:[58.3,82.5],label:"Иркутск"}]},far_east:{name:"Дальний Восток",cities:[{name:"Хабаровск",coordinates:[83,84],label:"Хабаровск"},{name:"Владивосток",coordinates:[82,96.8],label:"Владивосток"}]}}}init(){this.container&&(this.container.innerHTML=`
      <div class="office-list__container">
        <div class="office-list__dropdown">
          <button class="office-list__dropdown-button">
            Офисы Softline
            <div class="office-list__dropdown-icon">
              <img src="${b}" alt="dropdown arrow">
            </div>
          </button>
          <div class="office-list__dropdown-content">
            ${Object.values(this.regions).map(s=>`<div class="office-list__region" data-region="${s.name}">
                    <h4>${s.name}</h4>
                    ${s.cities.map(i=>`<p>${i.name}</p>`).join("")}
                  </div>`).join("")}
          </div>
        </div>
        <nav class="office-list__nav">
          <a href="#" class="office-list__link office-list__link_active" data-region="all">Все</a>
          ${Object.values(this.regions).map(s=>`<a href="#" class="office-list__link" data-region="${s.name}">${s.name}</a>`).join("")}
        </nav>
      </div>
      <div class="office-list__map">
        <img src="${w}" alt="map" />
        <div class="office-list__cities"></div>
      </div>
    `,this.initializeDropdown(),this.activateNavLinks(),this.filterOffices("all"))}initializeDropdown(){const s=this.container.querySelector(".office-list__dropdown-button"),i=this.container.querySelector(".office-list__dropdown-content"),t=this.container.querySelector(".office-list__dropdown-icon img"),e=this.container.querySelectorAll(".office-list__link");s.addEventListener("click",()=>{i.classList.toggle("office-list__dropdown-content_visible"),t.classList.toggle("rotated"),e.forEach(o=>{o.classList.toggle("transparent")})})}activateNavLinks(){const s=this.container.querySelectorAll(".office-list__link");s.forEach(i=>{i.addEventListener("click",t=>{t.preventDefault(),s.forEach(e=>e.classList.remove("office-list__link_active")),i.classList.add("office-list__link_active"),this.filterOffices(i.dataset.region)})})}filterOffices(s){const i=this.container.querySelector(".office-list__cities");if(i.innerHTML="",s==="all")Object.values(this.regions).forEach(t=>{t.cities.forEach(e=>{this.addCityMarker(i,e)})});else{const t=Object.values(this.regions).find(e=>e.name.toLowerCase()===s.toLowerCase());t?t.cities.forEach(e=>{this.addCityMarker(i,e)}):console.warn(`Регион ${s} не найден`)}}addCityMarker(s,i){const t=document.createElement("div");t.classList.add("city-marker"),t.style.position="absolute",t.style.left=`${i.coordinates[0]}%`,t.style.top=`${i.coordinates[1]}%`,t.title=i.name;const e=document.createElement("div");e.classList.add("city-label"),e.style.position="absolute",e.style.left=`${i.coordinates[0]}%`,e.style.top=`${i.coordinates[1]-5}%`,e.innerText=i.label,s.appendChild(t),s.appendChild(e),e.style.display="block"}}const y=new C(".office-list");y.init();const p=document.querySelector(".mission");function k(){p&&(p.innerHTML=`
      <div class="mission__container">
        <div class="mission__block">
          <h1 class="mission__title">Миссия Softline</h1>
          <p class="mission__subtitle">Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики.</p>
        </div>
      </div>
    `)}k();const B="/Peach-site-Softline/assets/SoftlineSolutions-GaHIEMpC.png",S="/Peach-site-Softline/assets/Cybersecurity-Bfk6VWzo.png",L="/Peach-site-Softline/assets/ImportSubstitution-CfVA4aNY.png",M="/Peach-site-Softline/assets/CloudSolutions-U6kQu8Aw.png",$="/Peach-site-Softline/assets/DigitalTransformation-D9KZGsH_.png",x="/Peach-site-Softline/assets/TechnicalSupport-B-qi6sXc.png",v=document.querySelector(".business-directions");function D(){v&&(v.innerHTML=`
      <div class="business-direction__container">
        <h1 class="business-direction__title">Направления бизнеса</h1>
        <div class="business-direction__grid">
          <div class="business-direction__item">
            <img class="business-direction__image" src="${B}" alt="Softline Solutions">
            <div class="business-direction__text">Решения Softline</div>
            <div class="business-direction__overlay">ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${S}" alt="Cybersecurity">
            <div class="business-direction__text">Кибербезопасность</div>
            <div class="business-direction__overlay">Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${L}" alt="Import substitution">
            <div class="business-direction__text">Импортозамещение</div>
            <div class="business-direction__overlay">ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${M}" alt="Cloud solutions">
            <div class="business-direction__text">Облачные решения</div>
            <div class="business-direction__overlay">Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${$}" alt="Digital transformation">
            <div class="business-direction__text">Цифровая трансформация и разработка ПО</div>
            <div class="business-direction__overlay">Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.</div>
          </div>
          <div class="business-direction__item">
            <img class="business-direction__image" src="${x}" alt="Technical support">
            <div class="business-direction__text">Техническая поддержка Softline</div>
            <div class="business-direction__overlay">200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.</div>
          </div>
        </div>
      </div>
    `)}D();const g="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.9'%3e%3cpath%20d='M5.03413%2015.3129C5.28021%2013.3072%206.9836%2011.8%209.00436%2011.8H42.0023C44.0695%2011.8%2045.7961%2013.3751%2045.9855%2015.4335L48.5982%2043.8281C48.8139%2046.1721%2046.9689%2048.1946%2044.615%2048.1946H5.52074C3.1184%2048.1946%201.25796%2046.092%201.5505%2043.7075L5.03413%2015.3129Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M25%2020.6367V39.3566'%20stroke='%23B01736'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M15.1523%2029.9971H34.8447'%20stroke='%23B01736'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M34.5984%2011.7996V5.59961C34.5984%203.39047%2032.8076%201.59961%2030.5984%201.59961H19.3984C17.1893%201.59961%2015.3984%203.39047%2015.3984%205.59961V11.7996'%20stroke='%23B01736'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e",H="data:image/svg+xml,%3csvg%20width='49'%20height='48'%20viewBox='0%200%2049%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.9'%3e%3cpath%20d='M9.60425%2013.4009C7.50091%2013.4009%205.80469%2011.7071%205.80469%209.64649C5.80469%209.26166%205.97227%208.58364%206.31932%207.66932C6.653%206.79021%207.10828%205.80363%207.5855%204.84932C8.39362%203.23333%209.24052%201.75769%209.60425%201.13617C9.96801%201.75762%2010.815%203.23348%2011.6232%204.84965C12.1004%205.80392%2012.5556%206.79044%2012.8892%207.66948C13.2362%208.58373%2013.4038%209.26168%2013.4038%209.64649C13.4038%2011.7065%2011.7075%2013.4009%209.60425%2013.4009Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M5.80469%2015.3573C5.80469%2014.5842%206.43139%2013.9575%207.20446%2013.9575H12.004C12.7771%2013.9575%2013.4038%2014.5842%2013.4038%2015.3573V27.4061H5.80469V15.3573Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M20.2033%2015.3573C20.2033%2014.5842%2020.83%2013.9575%2021.6031%2013.9575H26.4026C27.1757%2013.9575%2027.8024%2014.5842%2027.8024%2015.3573V27.4061H20.2033V15.3573Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M27.8024%209.64649V9.64676C27.8029%2011.7063%2026.1063%2013.4009%2024.0029%2013.4009C21.8995%2013.4009%2020.2033%2011.7071%2020.2033%209.64649C20.2033%209.26166%2020.3709%208.58364%2020.7179%207.66932C21.0516%206.79021%2021.5069%205.80363%2021.9841%204.84932C22.7922%203.23333%2023.6391%201.75769%2024.0029%201.13617C24.3666%201.75762%2025.2137%203.23348%2026.0218%204.84965C26.499%205.80392%2026.9542%206.79044%2027.2878%207.66948C27.6348%208.58373%2027.8024%209.26168%2027.8024%209.64649Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M34.6019%2015.3573C34.6019%2014.5842%2035.2286%2013.9575%2036.0017%2013.9575H40.8012C41.5743%2013.9575%2042.201%2014.5842%2042.201%2015.3573V27.4061H34.6019V15.3573Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M38.4015%2013.4009C36.2981%2013.4009%2034.6019%2011.7071%2034.6019%209.64649C34.6019%209.26166%2034.7695%208.58364%2035.1166%207.66932C35.4502%206.79022%2035.9055%205.80363%2036.3827%204.84932C37.1909%203.23334%2038.0378%201.75769%2038.4015%201.13617C38.7653%201.75762%2039.6123%203.23349%2040.4204%204.84965C40.8976%205.80392%2041.3528%206.79044%2041.6865%207.66948C42.0335%208.58373%2042.201%209.26168%2042.201%209.64649C42.201%2011.7065%2040.5047%2013.4009%2038.4015%2013.4009Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M0.734375%2036.4872L2.81543%2038.1011C3.82907%2038.887%205.59749%2038.887%206.61112%2038.1011L8.69282%2036.4872C9.15682%2036.1289%209.96348%2036.1279%2010.4275%2036.4872L12.5085%2038.1011C13.5566%2038.9137%2015.2599%2038.9122%2016.3048%2038.1011L18.3859%2036.4872C18.8493%2036.1289%2019.6559%2036.1279%2020.1205%2036.4872L22.2022%2038.1011C22.7093%2038.4943%2023.3834%2038.7105%2024.1%2038.7105C24.8172%2038.7105%2025.4915%2038.4938%2025.9992%2038.1011L28.0809%2036.4872C28.5455%2036.1279%2029.3522%2036.1289%2029.8156%2036.4872L31.8966%2038.1011C32.9447%2038.9137%2034.648%2038.9122%2035.6929%2038.1011L37.774%2036.4872C38.2386%2036.1279%2039.0453%2036.1289%2039.5086%2036.4872L41.5903%2038.1011C42.6358%2038.9117%2044.3386%2038.9132%2045.386%2038.1011C46.4334%2037.289%2047.4677%2036.4872%2047.4677%2036.4872'%20stroke='%23B01736'%20stroke-width='2'/%3e%3crect%20x='1.00391'%20y='27.4749'%20width='45.9954'%20height='19.5226'%20rx='3.79954'%20stroke='%23B01736'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e",I="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.9'%20clip-path='url(%23clip0_8370_241)'%3e%3crect%20x='8.19922'%20y='1'%20width='31.6'%20height='46'%20rx='4'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M15.3984%201H32.5984V5C32.5984%206.10457%2031.703%207%2030.5984%207H17.3984C16.2939%207%2015.3984%206.10457%2015.3984%205V1Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M19.1992%2040H28.7992'%20stroke='%23B01736'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_8370_241'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",V="/Peach-site-Softline/assets/kettlebell-CE8SgO-J.svg",P="/Peach-site-Softline/assets/hands-DpfH71kJ.svg",q="data:image/svg+xml,%3csvg%20width='1050'%20height='2'%20viewBox='0%200%201050%202'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.1'%20d='M0%201H1050'%20stroke='black'/%3e%3c/svg%3e",A="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9132_68)'%3e%3cpath%20d='M36.7234%2012.7466V1H11.2766V12.7466M9.32055%2038.418L1%2038.4253V18.6117C1%2015.3726%203.62914%2012.7467%206.87234%2012.7467H41.1277C44.3709%2012.7467%2047%2015.3726%2047%2018.6117V38.4253L38.6822%2038.418M9.32055%2029.8361H38.6822V47H9.32055V29.8361Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9132_68'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='26.9375'%20y='27.8945'%20width='9'%20height='9'%20rx='1'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M8.14844%2021.2354V35.1177V46.0001C8.14844%2046.5524%208.59615%2047.0001%209.14844%2047.0001H38.9329C39.4852%2047.0001%2039.9329%2046.5524%2039.9329%2046.0001V21.2354M22.1484%2047.0001V28.8952C22.1484%2028.3429%2021.7007%2027.8952%2021.1484%2027.8952H14.1484C13.5962%2027.8952%2013.1484%2028.3429%2013.1484%2028.8952V47.0001'%20stroke='%23B01736'%20stroke-width='2'/%3e%3cpath%20d='M2.44763%2021H45.5524C46.915%2021%2047.5201%2019.3298%2046.4597%2018.4956L24.6194%201.31241C24.0844%200.891515%2023.3193%200.8964%2022.79%201.32409L1.52562%2018.5073C0.483846%2019.3491%201.09448%2021%202.44763%2021Z'%20stroke='%23B01736'%20stroke-width='2'/%3e%3c/svg%3e",h=document.querySelector(".compensation");function T(){h&&(h.innerHTML=`
      <div class="compensation__container">
        <div class="compensation__package">
          <h1 class="compensation__title">Компенсационный пакет</h1>
          <div class="compensation__items">
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${g}" />
              </div>
              <p class="compensation__label">ДМС</p>
            </div>
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${H}" />
              </div>
              <p class="compensation__label">Выходной в день рождения</p>
            </div>
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${I}" />
              </div>
              <p class="compensation__label">Корпоративная мобильная связь</p>
            </div>
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${V}" />
              </div>
              <p class="compensation__label">Корпоративные скидки на спорт</p>
            </div>
            <div class="compensation__item-wrapper">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${P}" />
              </div>
              <p class="compensation__label">LTI</p>
            </div>
          </div>
          <img class="compensation__line" src="${q}" />
        </div>

        <div class="compensation__program">
          <h1 class="compensation__program__label">
            Программа дополнительной мотивации <br>
            <span class="red-label">доплата 12% от суммы</span>
          </h1>
          <div class="compensation__program__items">
            <div class="compensation__program__item">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${A}" />
              </div>
              <p class="compensation__label">Оргтехники</p>
            </div>
            <div class="compensation__program__item">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${g}" />
              </div>
              <p class="compensation__label">ДМС</p>
            </div>
            <div class="compensation__program__item">
              <div class="compensation__item-circle">
                <img class="compensation__item" src="${E}" />
              </div>
              <p class="compensation__label">Ипотеки</p>
            </div>
          </div>
        </div>
      </div>
    `)}T();const O="/Peach-site-Softline/assets/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B41-Bn9SUNAu.png",Z="/Peach-site-Softline/assets/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B42-C1lCdgUF.png",j="/Peach-site-Softline/assets/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B43-7jBdRtQ1.png",N="/Peach-site-Softline/assets/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B44-DrY9oOWZ.png",R="/Peach-site-Softline/assets/%D0%A1%D0%BB%D0%B0%D0%B9%D0%B45-Ckd1qRr4.png";function z(){const n=document.querySelector(".corporate-life");if(n){let c=function(d){i.forEach((l,r)=>{l.classList.toggle("active",r===d)}),t.forEach((l,r)=>{l.classList.toggle("active",r===d)})};var s=c;n.innerHTML=`
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
            <img src="${O}" alt="Image1" class="gallery__image active">
            <img src="${Z}" alt="Image2" class="gallery__image">
            <img src="${j}" alt="Image3" class="gallery__image">
            <img src="${N}" alt="Image4" class="gallery__image">
            <img src="${R}" alt="Image5" class="gallery__image">
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
    `;const i=n.querySelectorAll(".gallery__image"),t=n.querySelectorAll(".dot"),e=n.querySelector(".left-arrow"),o=n.querySelector(".right-arrow");let a=0;e.addEventListener("click",()=>{a=a>0?a-1:i.length-1,c(a)}),o.addEventListener("click",()=>{a=a<i.length-1?a+1:0,c(a)})}}z();
