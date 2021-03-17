import { createElementWithClass } from './tools'

function navBar() {
  const nav = createElementWithClass('div', 'nav-bar')

  const ul = createElementWithClass('ul', 'nav-ul')
  const home = createElementWithClass('li', 'home', 'navItem')
  const menu = createElementWithClass('li', 'menu', 'navItem')
  const contact = createElementWithClass('li', 'contact', 'navItem')

  home.textContent = 'Home'
  menu.textContent = 'Menu'
  contact.textContent = 'Contact'

  ul.appendChild(home)
  ul.appendChild(menu)
  ul.appendChild(contact)
  nav.appendChild(ul)

  return nav
}

function websiteLauncher() {
  const main = createElementWithClass('div', 'main', 'home')
  const mainContent = createElementWithClass('div', 'main-content')
  const titleContaier = createElementWithClass('div', 'title-container')
  const h2 = createElementWithClass('h2', 'title')
  const descriptionContainer = createElementWithClass(
    'div',
    'description-container'
  )
  const p = createElementWithClass('p', 'description')

  h2.textContent = 'Margheriti'
  p.textContent = 'Best pizzas in Italy since 1946'

  descriptionContainer.appendChild(p)
  titleContaier.appendChild(h2)
  mainContent.appendChild(titleContaier)
  mainContent.appendChild(descriptionContainer)

  main.appendChild(mainContent)

  return main
}
export { websiteLauncher, navBar }
