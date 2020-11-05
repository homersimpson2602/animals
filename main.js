// import { getMenu } from './sb-menu/menu'

let urlCategory = "https://my-json-server.typicode.com/homersimpson2602/Fake-DB-for-my-json-server/dogs";
const $mainContent = document.querySelector("#main-content")
const $sidebarMenu = document.querySelector("#sidebar-nav")

// клик по элементам меню
$sidebarMenu.addEventListener("click", ev => {
  while ($mainContent.firstChild) {
    $mainContent.removeChild($mainContent.firstChild)
  }
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
// конец клика по элементам меню

// клик по элементам в списке животных
$mainContent.addEventListener("click", ev => {
  if (ev.target.dataset.id) {
    renderAnimal(ev)
  }
})
// конец клика по списку животных

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
        categoryName = "Рыбы"
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
    console.error("Error! " + err)
  }
  
}
// рендер списка животных
// getAnimalCards()
//   .then((resolve) => {
//     console.log(resolve)
//     const $animalsList = document.createElement("div")
//     $animalsList.classList.add("animals-list")
//     $animalsList.insertAdjacentHTML("afterbegin", `
//     <h2 class="animals-list__heading">${resolve[1]}</h2>
//     <div class="animals-list__list">
//       ${resolve[0]}
//     </div>
//     <div class="animals-list__description">
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis assumenda beatae, magni, natus, eos aliquid sit aperiam aspernatur placeat suscipit doloribus voluptate fuga quasi quaerat atque ex accusamus accusantium!</p>
//     </div>
//     `)
//     const $tempAnimalInfo = document.createElement("div")
//     $tempAnimalInfo.classList.add("animal-info")
//     $mainContent.insertAdjacentElement("afterbegin", $tempAnimalInfo)
//     $mainContent.appendChild($animalsList)
//   })
// конец получения списка животных


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
// конец рендера инфо-карточки
