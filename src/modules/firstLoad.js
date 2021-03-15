import { createElementWithClass } from './tools'

function websiteLauncher() {
  const main = createElementWithClass('div', 'main')
  const mainContent = createElementWithClass('div', 'main-content')
  const navBar = createElementWithClass('div', 'nav-bar')
  const titleContaier = createElementWithClass('div', 'title-container')
  const h2 = createElementWithClass('h2', 'title')
  const descriptionContainer = createElementWithClass(
    'div',
    'description-container'
  )
  const p = createElementWithClass('p', 'description')

  const ul = createElementWithClass('ul', 'nav-ul')
  const home = createElementWithClass('li', 'home', 'navItem')
  const menu = createElementWithClass('li', 'menu', 'navItem')
  const contact = createElementWithClass('li', 'contact', 'navItem')

  home.textContent = 'Home'
  menu.textContent = 'Menu'
  contact.textContent = 'Contact'
  h2.textContent = 'Margheriti'
  p.textContent = 'Best pizzas in Italy since 1902'

  ul.appendChild(home)
  ul.appendChild(menu)
  ul.appendChild(contact)
  navBar.appendChild(ul)

  descriptionContainer.appendChild(p)
  titleContaier.appendChild(h2)
  mainContent.appendChild(navBar)
  mainContent.appendChild(titleContaier)
  mainContent.appendChild(descriptionContainer)

  main.appendChild(mainContent)

  return main
}
export default websiteLauncher
