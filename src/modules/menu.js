import { createElementWithClass } from './tools'

function card(image, name) {
  const card = createElementWithClass('div', 'card')

  const img = createElementWithClass('img')
  const textContainer = createElementWithClass('div', 'text-menu')
  const h3 = createElementWithClass('h3', 'description')

  img.src = image
  h3.textContent = name

  card.appendChild(img)
  textContainer.appendChild(h3)
  card.appendChild(textContainer)
  return card
}

function menu() {
  const main = createElementWithClass('div', 'main', 'menu')

  main.appendChild(
    card(
      'https://lh3.googleusercontent.com/proxy/aNvdOV02w_8uoPhGefQab3es6LASsHAX09mh8di6GS8sm4MLaKyB4ZHq2g5vO8NHQwjKadfyS3BZf6PvFdwwX8R7IYLPYeTuz1U118_ciFrc_6ZtndYJ9Vz2SQ',
      'Margherita'
    )
  )

  main.appendChild(
    card(
      'https://www.pizzarecipe.org/wp-content/uploads/2019/01/Pizza-Marinara-2000x1500.jpg',
      'Marinara: '
    )
  )
  return main
}

export default menu
