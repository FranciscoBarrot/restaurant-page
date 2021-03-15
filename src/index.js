import './styles.css'
import websiteLauncher from './modules/firstLoad'
import contact from './modules/contact'
import menu from './modules/menu'

const content = document.getElementById('content')

function switchPage(e) {
  const key = e.target.classList[0]
  switch (key) {
    case 'menu':
      menu()
      break
    case 'contact':
      contact()
    default:
      websiteLauncher()
      break
  }
}

content.appendChild(websiteLauncher())

document.querySelectorAll('.navItem').forEach((element) => {
  element.addEventListener('click', switchPage)
})

/* Antonio Margheriti was a great filmmaker and the best pizzaiolo of
              the time. After filming the movie Wild, Wild Planet set out to
              create the best pizza in the world, with his nonna's special
              recipe. */
