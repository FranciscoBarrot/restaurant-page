function createElementWithAClass(name, elementClassName) {
  const element = document.createElement(name)
  element.classList.add(elementClassName)
  return element
}

export { createElementWithAClass }
