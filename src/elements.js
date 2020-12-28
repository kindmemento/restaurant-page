const content = document.getElementById('content')

function header() {

  const headerWrapper = document.createElement('div')
  headerWrapper.id = 'header-wrapper'
  headerWrapper.innerText = 'This is the header-wrapper.'
  content.append(headerWrapper)
    
  const headerFirst = document.createElement('div')
  headerFirst.id = 'header-first'
  headerFirst.innerText = 'This is the first element in the header-wrapper.'
  headerWrapper.append(headerFirst)

  const headerSecond = document.createElement('div')
  headerSecond.id = 'header-second'
  headerSecond.innerText = 'This is the second element in the header-wrapper.'
  headerWrapper.append(headerSecond)

  const headerThird = document.createElement('div')
  headerThird.id = 'header-third'
  headerThird.innerText = 'This is the third element in the header-wrapper.'
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