import { createElementWithClass } from './tools'

function contact() {
  const main = createElementWithClass('div', 'main', 'contact-page')
  const imgContaier = createElementWithClass('div', 'img-container')
  const img = createElementWithClass('img')

  img.src =
    'https://pbs.twimg.com/profile_images/1221495774850273281/CkW8riUw_400x400.jpg'

  imgContaier.appendChild(img)
  main.appendChild(imgContaier)
  return main
}

export default contact
