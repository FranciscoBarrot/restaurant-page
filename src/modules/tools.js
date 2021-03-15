function createElementWithClass(name, ...elementClassName) {
  const element = document.createElement(name)
  elementClassName.forEach((className) => {
    element.classList.add(className)
  })
  return element
}

export { createElementWithClass }
