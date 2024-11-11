import "./officeList.scss";
import map from "@/assets/img/office-list/map.svg";
import dropdownArrow from "@/assets/img/office-list/dropdown-arrow.svg";

class OfficeListComponent {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.regions = {
      moscow: {
        name: "Москва",
        cities: [
          { name: "Москва", coordinates: [12.2, 38.2], label: "Москва" },
        ],
      },
      center: {
        name: "Центр",
        cities: [
          { name: "Воронеж", coordinates: [8, 42], label: "Воронеж" },
          {
            name: "Ярославль",
            coordinates: [15.5, 34],
            label: "Ярославль",
          },
          {
            name: "Белгород",
            coordinates: [8, 46.8],
            label: "Белгород",
          },
        ],
      },
      northwest: {
        name: "Северо-Запад",
        cities: [
          {
            name: "Санкт-Петербург",
            coordinates: [13, 23],
            label: "Санкт-Петербург",
          },
          {
            name: "Калининград",
            coordinates: [3.5, 21.8],
            label: "Калининград",
          },
        ],
      },
      south: {
        name: "Юг",
        cities: [
          {
            name: "Ростов-на-Дону",
            coordinates: [7.2, 54.2],
            label: "Ростове-на-Дону",
          },
          {
            name: "Краснодар",
            coordinates: [4.5, 64.3],
            label: "Краснодар",
          },
          {
            name: "Волгоград",
            coordinates: [9.5, 61.5],
            label: "Волгоград",
          },
        ],
      },
      volga: {
        name: "Волга",
        cities: [
          { name: "Казань", coordinates: [21.2, 50.7], label: "Казань" },
          { name: "Самара", coordinates: [16.1, 52], label: "Самара" },
          { name: "Уфа", coordinates: [21.5, 57], label: "Уфа" },
          {
            name: "Оренбург",
            coordinates: [18.8, 62],
            label: "Оренбург",
          },
          {
            name: "Нижний Новгород",
            coordinates: [16.5, 44.6],
            label: "Н. Новгород",
          },
        ],
      },
      ural: {
        name: "Урал",
        cities: [
          {
            name: "Екатеринбург",
            coordinates: [27.3, 56],
            label: "Екатеринбург",
          },
          {
            name: "Челябинск",
            coordinates: [27.1, 61.5],
            label: "Челябинск",
          },
          { name: "Пермь", coordinates: [32.3, 51], label: "Пермь" },
          { name: "Сургут", coordinates: [36.7, 53], label: "Сургут" },
          { name: "Тюмень", coordinates: [34.9, 61.5], label: "Тюмень" },
          { name: "Ижевск", coordinates: [27.8, 49.2], label: "Ижевск" },
        ],
      },
      siberia: {
        name: "Сибирь",
        cities: [
          {
            name: "Новосибирск",
            coordinates: [43.3, 76.7],
            label: "Новосибирск",
          },
          { name: "Омск", coordinates: [38.9, 80.1], label: "Омск" },
          { name: "Томск", coordinates: [48.9, 77.5], label: "Томск" },
          {
            name: "Красноярск",
            coordinates: [53.7, 77.2],
            label: "Красноярск",
          },
          { name: "Иркутск", coordinates: [58.3, 82.5], label: "Иркутск" },
        ],
      },
      far_east: {
        name: "Дальний Восток",
        cities: [
          {
            name: "Хабаровск",
            coordinates: [83, 84],
            label: "Хабаровск",
          },
          {
            name: "Владивосток",
            coordinates: [82, 96.8],
            label: "Владивосток",
          },
        ],
      },
    };
  }

  init() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="office-list__container">
        <div class="office-list__dropdown">
          <button class="office-list__dropdown-button">
            Офисы Softline
            <div class="office-list__dropdown-icon">
              <img src="${dropdownArrow}" alt="dropdown arrow">
            </div>
          </button>
          <div class="office-list__dropdown-content">
            ${Object.values(this.regions)
              .map(
                (region) =>
                  `<div class="office-list__region" data-region="${
                    region.name
                  }">
                    <h4>${region.name}</h4>
                    ${region.cities
                      .map((city) => `<p>${city.name}</p>`)
                      .join("")}
                  </div>`
              )
              .join("")}
          </div>
        </div>
        <nav class="office-list__nav">
          <a href="#" class="office-list__link office-list__link_active" data-region="all">Все</a>
          ${Object.values(this.regions)
            .map(
              (region) =>
                `<a href="#" class="office-list__link" data-region="${region.name}">${region.name}</a>`
            )
            .join("")}
        </nav>
      </div>
      <div class="office-list__map">
        <img src="${map}" alt="map" />
        <div class="office-list__cities"></div>
      </div>
    `;

    this.initializeDropdown();
    this.activateNavLinks();
    this.filterOffices("all");
  }

  initializeDropdown() {
    const dropdownButton = this.container.querySelector(
      ".office-list__dropdown-button"
    );
    const dropdownContent = this.container.querySelector(
      ".office-list__dropdown-content"
    );
    const dropdownIcon = this.container.querySelector(
      ".office-list__dropdown-icon img"
    );
    const links = this.container.querySelectorAll(".office-list__link");

    dropdownButton.addEventListener("click", () => {
      dropdownContent.classList.toggle("office-list__dropdown-content_visible");
      dropdownIcon.classList.toggle("rotated");

      links.forEach((link) => {
        link.classList.toggle("transparent");
      });
    });
  }

  activateNavLinks() {
    const links = this.container.querySelectorAll(".office-list__link");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        links.forEach((link) =>
          link.classList.remove("office-list__link_active")
        );
        link.classList.add("office-list__link_active");
        this.filterOffices(link.dataset.region);
      });
    });
  }

  filterOffices(region) {
    const citiesContainer = this.container.querySelector(
      ".office-list__cities"
    );
    citiesContainer.innerHTML = "";

    // Если выбран регион "all", показываем все города
    if (region === "all") {
      Object.values(this.regions).forEach((region) => {
        region.cities.forEach((city) => {
          this.addCityMarker(citiesContainer, city);
        });
      });
    } else {
      // Если выбран конкретный регион, показываем только его города
      const selectedRegion = Object.values(this.regions).find(
        (r) => r.name.toLowerCase() === region.toLowerCase()
      );
      if (selectedRegion) {
        selectedRegion.cities.forEach((city) => {
          this.addCityMarker(citiesContainer, city);
        });
      } else {
        // Если введен неправильный регион, просто не показываем города
        console.warn(`Регион ${region} не найден`);
      }
    }
  }

  addCityMarker(container, city) {
    // Создание маркера
    const cityMarker = document.createElement("div");
    cityMarker.classList.add("city-marker");
    cityMarker.style.position = "absolute";
    cityMarker.style.left = `${city.coordinates[0]}%`;
    cityMarker.style.top = `${city.coordinates[1]}%`;
    cityMarker.title = city.name;

    const cityLabel = document.createElement("div");
    cityLabel.classList.add("city-label");
    cityLabel.style.position = "absolute";
    cityLabel.style.left = `${city.coordinates[0]}%`;
    cityLabel.style.top = `${city.coordinates[1] - 5}%`;
    cityLabel.innerText = city.label;

    container.appendChild(cityMarker);
    container.appendChild(cityLabel);

    cityLabel.style.display = "block";
  }
}

const officeList = new OfficeListComponent(".office-list");
officeList.init();
