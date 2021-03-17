import { createElementWithClass } from './tools'

function contact() {
  const main = createElementWithClass('div', 'main', 'contact-page')
  const contactContainer = createElementWithClass('div', 'contact-container')
  const imgContaier = createElementWithClass('div', 'img-container')
  const img = createElementWithClass('img')
  const textContainer = createElementWithClass('div', 'description-contact')
  const p = createElementWithClass('p', 'description')

  p.textContent =
    'Antonio Margheriti was a great soldier of World War II, killing Hitler himself. After his retirement, he dedicated his life to what he loved most, being a pizzaiolo. He founded a restaurant under his own name in 1946 and it quickly expanded throughout Italy.'
  img.src =
    'https://pbs.twimg.com/profile_images/1221495774850273281/CkW8riUw_400x400.jpg'

  textContainer.appendChild(p)
  imgContaier.appendChild(img)
  contactContainer.appendChild(imgContaier)
  contactContainer.appendChild(textContainer)
  main.appendChild(contactContainer)
  return main
}

export default contact
