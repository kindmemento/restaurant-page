const content = document.getElementById('content')

function header() {

  const headerWrapper = document.createElement('div')
  headerWrapper.classList.add('header-wrapper')
  content.append(headerWrapper)

  const headerText = document.createElement('h2')
  headerText.classList.add('header-text')
  headerText.innerText = 'KM Luxury Dining'
  headerWrapper.append(headerText)
    
  const headerFirst = document.createElement('button')
  headerFirst.classList.add('header-el')
  headerFirst.innerText = 'Home'
  headerWrapper.append(headerFirst)

  const headerSecond = document.createElement('button')
  headerSecond.classList.add('header-el')
  headerSecond.innerText = 'Menu'
  headerWrapper.append(headerSecond)

  const headerThird = document.createElement('button')
  headerThird.classList.add('header-el')
  headerThird.innerText = 'Contact'
  headerWrapper.append(headerThird)
}

function main() {

  const mainWrapper = document.createElement('div')
  mainWrapper.id = 'main-wrapper'
  mainWrapper.innerText = 'This is the main wrapper.'
  content.append(mainWrapper)

  const mainFirst = document.createElement('div')
  mainFirst.id = 'main-first'
  mainFirst.innerText = 'This is the first element in the main-wrapper.'
  mainWrapper.append(mainFirst)

  const mainSecond = document.createElement('div')
  mainSecond.id = 'main-second'
  mainSecond.innerText = 'This is the second element in the main-wrapper.'
  mainWrapper.append(mainSecond)

  const mainThird = document.createElement('div')
  mainThird.id = 'main-third'
  mainThird.innerText = 'This is the third element in the main-wrapper.'
  mainWrapper.append(mainThird)
}

function footer() {
  
  const footerWrapper = document.createElement('div')
  footerWrapper.id = 'main-wrapper'
  footerWrapper.innerText = 'This is the footer wrapper.'
  content.append(footerWrapper)
    
  const footerFirst = document.createElement('div')
  footerFirst.id = 'main-first'
  footerFirst.innerText = 'This is the first element in the footer-wrapper.'
  footerWrapper.append(footerFirst)
  
  const footerSecond = document.createElement('div')
  footerSecond.id = 'main-second'
  footerSecond.innerText = 'This is the second element in the footer-wrapper.'
  footerWrapper.append(footerSecond)
  
  const footerThird = document.createElement('div')
  footerThird.id = 'main-third'
  footerThird.innerText = 'This is the third element in the footer-wrapper.'
  footerWrapper.append(footerThird)
}

export { header, main, footer }