function createDomElement(name) {
  return document.createElement(name)
}

function getTitle() {
  const titleContainer = createDomElement('div')
  const title = createDomElement('h1')

  titleContainer.classList.add('title-container')
  title.classList.add('title')

  titleContainer.appendChild(title)
  title.textContent = 'Margheriti'
}

function navBar() {}

function websiteLauncher() {
  const content = document.getElementById('content')
}

export default websiteLauncher()
