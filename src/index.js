import './styles.css'
import { websiteLauncher, navBar } from './modules/firstLoad'
import contact from './modules/contact'
import menu from './modules/menu'

const content = document.getElementById('content')

function switchPage(e) {
  const newPage = e.target.classList[0]
  const currentPage = content.childNodes[1].classList[1]

  if (newPage != currentPage) {
    content.removeChild(content.childNodes[1])

    switch (newPage) {
      case 'menu':
        content.appendChild(menu())
        break
      case 'contact':
        content.appendChild(contact())
        break
      default:
        content.appendChild(websiteLauncher())
        break
    }
  }
}

content.appendChild(navBar())
content.appendChild(websiteLauncher())

document.querySelectorAll('.navItem').forEach((element) => {
  element.addEventListener('click', switchPage)
})

/* Antonio Margheriti was a great filmmaker and the best pizzaiolo of
              the time. After filming the movie Wild, Wild Planet set out to
              create the best pizza in the world, with his nonna's special
              recipe. */
