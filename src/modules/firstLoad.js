import { createElementWithAClass } from './tools'

function websiteLauncher() {
  const main = createElementWithAClass('div', 'main')
  const mainContent = createElementWithAClass('div', 'main-content')
  const titleContaier = createElementWithAClass('div', 'title-contaier')
  const h2 = createElementWithAClass('h2', 'title')
  const descriptionContainer = createElementWithAClass(
    'div',
    'description-container'
  )
  const p = document.createElement('p')

  h2.textContent = 'Margheriti'
  p.textContent = 'Best pizzas in Italy since 1902'

  descriptionContainer.appendChild(p)
  titleContaier.appendChild(h2)
  mainContent.appendChild(titleContaier)
  mainContent.appendChild(descriptionContainer)

  main.appendChild(mainContent)

  return main
}
export default websiteLauncher
