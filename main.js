// import { getMenu } from './sb-menu/menu'
window.onload = renderMainPage;

let urlCategory = "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/dogs";
const $mainContent = document.querySelector("#main-content")
const $sidebarMenu = document.querySelector("#sidebar-nav")
const $headerMenu = document.querySelector("#header-nav")
const $logo = document.querySelector("#logo__img")

// Лазерная указка на главной странице
class LaserRay {
  //selector, color
  onTop = true;
  onLeft = true;
  constructor(options) {
    this.$el = document.querySelector(options.selector)
    this.$colorPicker = document.querySelector(options.colorPickerSelector)
    this.color = "#f00"
    this.topPos = 0
    this.leftPos = 0
  }

  changeColor() {
    this.$colorPicker.addEventListener("change", () => {
      this.color = this.$colorPicker.value
      this.$el.style.backgroundColor = this.color
    })
  }

  changeTopPos() {
    setInterval(() => {
      const step = 10

      if (this.topPos < 180 && this.onTop) {
        this.topPos += Math.floor(Math.random() * step );
        if (this.topPos > 180) this.onTop = false
      } else {
        this.topPos -= Math.floor(Math.random() * step );
        if (this.topPos < 10) this.onTop = true
      }
      this.$el.style.top = this.topPos + "px"
      this.$el.style.left = this.topPos + "px"

      if (this.leftPos < 400 && this.onleft) {
        this.leftPos += Math.floor(Math.random() * step );
        if (this.leftPos > 400) this.onleft = false
      } else {
        this.leftPos -= Math.floor(Math.random() * step );
        if (this.leftPos < 10) this.onleft = true
      }
      this.$el.style.top = this.topPos + "px"
      this.$el.style.left = this.leftPos + "px"

    }, 40)
  }

}

$logo.onclick = renderMainPage;

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
} 


// клик по элементам меню
$sidebarMenu.addEventListener("click", ev => {
  removeAllChildren($mainContent)

  if (ev.target.dataset.type) {
    urlCategory = `https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/${ev.target.dataset.type}`
    getAnimalCards()
      .then((resolve) => {
        const $animalsList = document.createElement("div")
        $animalsList.classList.add("animals-list")
        $animalsList.insertAdjacentHTML("afterbegin", `
    <h2 class="animals-list__heading">${resolve[1]}</h2>
    <div class="animals-list__list">
      ${resolve[0]}
    </div>
    <div class="animals-list__description">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis assumenda beatae, magni, natus, eos aliquid sit aperiam aspernatur placeat suscipit doloribus voluptate fuga quasi quaerat atque ex accusamus accusantium!</p>
    </div>
    `)
        const $tempAnimalInfo = document.createElement("div")
        $tempAnimalInfo.classList.add("animal-info")
        $mainContent.insertAdjacentElement("afterbegin", $tempAnimalInfo)
        $mainContent.appendChild($animalsList)
      })
  }
})

// клик по элементам в списке животных
$mainContent.addEventListener("click", ev => {
  if (ev.target.dataset.id) {
    renderAnimal(ev)
  }
})


// клик по хедер-меню
$headerMenu.addEventListener("click", (ev) => {
  if (ev.target.getAttribute("id") === "main-page-btn") renderMainPage(ev)
  if (ev.target.getAttribute("id") === "favorites-page-btn") renderFavoritesPage()
  if (ev.target.getAttribute("id") === "about-page-btn") renderAboutPage()

})

// рендер главной страницы
function renderMainPage(event) {
  removeAllChildren($mainContent)

  $mainContent.insertAdjacentHTML("afterbegin", `
  <div class="main-page">
  <div class="main-page__heading">
    <h1>Animals</h1>
    <span>Мини-каталог домашних питомцев</span>
    <div class="laser-container">
      <div id="laser-ray" class="laser-ray"></div>
      <input id="color-picker" type="color">
    </div>
  </div>
  </div>
  `)

  const laserRay = new LaserRay({
    selector: "#laser-ray",
    colorPickerSelector: "#color-picker",
  })
  laserRay.changeTopPos();
  laserRay.changeColor();
}

// рендер избранного
function renderFavoritesPage() {
  removeAllChildren($mainContent)

  $mainContent.insertAdjacentHTML("afterbegin", `
  <div class="favorites-page">
    <h1>В разработке</h1>
    <img id="wrench" src="/adjustable-wrench.ace2fdb4.svg" alt="">
  </div>
  `)
}

// рендер информации о проекте
function renderAboutPage() {
  removeAllChildren($mainContent) 

  $mainContent.insertAdjacentHTML("afterbegin", `
  <div class="about-page">
  <div class="desc">
    <h2>Описание</h2>
    <p>Проект "Animals" создан для отработки навыков вёрстки, написания стилей и придания динамики страницам средствами JS. <br>
      <span class="desc__hidden">Также проект является средством показать потенциальным работодателям мои текущие навыки внедрения костылей( <strong>и не только &#9888; </strong>) в работе с JS.</span>
    </p>
  </div>
  <div class="target">
    <h2>Цели проекта</h2>
    <ul>
      <li>&#9989; Практика работы с REST API для получения данных в формате JSON (<a href="https://my-json-server.typicode.com/">My-JSON-Server</a>) . Обработка данных и вывод их на клиенте</li>
      <li>&#9989; Расширение навыков использования Git и GitHub</li>
      <li>&#9989; Практика работы с Parcel</li>
      <li>&#9989; Написание анимаций средствами JavaScript и CSS/CSS3</li>
      <li>&#9989; Закрепление навыков вёрстки с использыванием CSS Grid</li>
      <li>&#9989; Вёрстка для разных разрешений</li>
      <li>&#9989; Практика написания JavaScript для обработки действий пользователя</li>
    </ul>
  </div>
  <div class="tech-stack">
    <h2>Использованные технологии</h2>
    <div class="tech-stack__list">
      <img src="/html-5.c1f14b10.svg" alt="html5">
      <img src="/css.ab4050fe.svg" alt="css3">
      <img src="/javascript.8a013844.svg" alt="js">
      <img src="/sass.b2b3f6c8.svg" alt="js">
      <img src="/github.9146623e.svg" alt="js">
      <img src="/git.fed523d4.svg" alt="js">
    </div> 
  </div>
</div>
  `) 
}


// получение списка животных
async function getAnimalCards() {
  try {
    const response = await fetch(urlCategory)
    const data = await response.json()
    let categoryName = ""

    switch(response.url) {
      case "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/dogs":
        categoryName = "Собаки"
        break
      case "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/cats":
        categoryName = "Кошки"
        break
      case "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/birds":
        categoryName = "Птицы"
        break
      case "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/fishes":
        categoryName = "Рыбки"
        break
      default:    
        categoryName = "Животные"
    }

    const animalsCard = data.map((obj) => {
      return `
      <div class="animals-list__list__item" >
        <img src="${obj.imgURL}" data-id=${obj.id}  data-name="${obj.name}" data-breed="${obj.breed}"alt="">
      </div>
      `
    }).join('')

    return [animalsCard, categoryName]
  }
  catch (err) {
    console.error("Error! : " + err)
  }
  
}

// рендер инфо-карточки отдельного животного
  function renderAnimal(event) {
    const imgURL = event.target.getAttribute("src")
    const name = event.target.dataset.name
    const breed = event.target.dataset.breed

    const $animalInfo = document.createElement("div")
    $animalInfo.classList.add("animal-info")
    $animalInfo.insertAdjacentHTML("afterbegin", `
    <img class="animal-info__img" src="${imgURL}" alt="">
    <div class="animal-info__data">
      <h2 class="animal-info_data__name">${name}</h2>
      <span class="animal-info__data__breed">${breed}</span>
    </div>
    <p class="animal-info__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit explicabo similique voluptas, fuga commodi cumque ullam ipsum consequuntur autem sequi laboriosam velit eligendi vel, quos dolores inventore obcaecati laborum.</p>
    `)
    $mainContent.removeChild($mainContent.firstChild)
    $mainContent.insertAdjacentElement("afterbegin", $animalInfo)
  }



