export const getMenu = function() {
  const $menu = document.createElement("div")
  $menu.classList.add("menu")
  $menu.insertAdjacentHTML("afterbegin", `
  <div class="menu__item"><img src=""./../img/dog.jpg""></div>
  <div class="menu__item"></div>
  <div class="menu__item"></div>
  <div class="menu__item"></div>
  <div class="menu__item"></div>
  <div class="menu__item"></div>
  <div class="menu__item"></div>
  <div class="menu__item"></div>
  <div class="menu__item"></div>
  `)
  return $menu;
}