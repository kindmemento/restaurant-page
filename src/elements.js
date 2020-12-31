const content = document.getElementById('content')
const headerWrapper = document.createElement('div')
const mainWrapper = document.createElement('div')
const menuWrapper = document.createElement('div')
const contactWrapper = document.createElement('div')

function header() {

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

  headerFirst.addEventListener ('click', (e) => {
    mainWrapper.style.display = 'inherit'
    menuWrapper.style.display = 'none'
    contactWrapper.style.display = 'none'
  })

  const headerSecond = document.createElement('button')
  headerSecond.classList.add('header-el')
  headerSecond.innerText = 'Menu'
  headerWrapper.append(headerSecond)

  headerSecond.addEventListener ('click', (e) => {
    mainWrapper.style.display = 'none'
    menuWrapper.style.display = 'inherit'
    contactWrapper.style.display = 'none'
  })

  const headerThird = document.createElement('button')
  headerThird.classList.add('header-el')
  headerThird.innerText = 'Contact'
  headerWrapper.append(headerThird)

  headerThird.addEventListener ('click', (e) => {
    mainWrapper.style.display = 'none'
    menuWrapper.style.display = 'none'
    contactWrapper.style.display = 'inherit'
  })
}

function main() {

  mainWrapper.classList.add('main-wrapper')
  content.append(mainWrapper)

  const mainFirst = document.createElement('div')
  mainFirst.classList.add('home')
  mainFirst.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam blanditiis magnam facere aperiam quia inventore quidem ullam error, iste minus unde placeat. Possimus distinctio, in rem dolor eum nemo esse quam veniam! Vero exercitationem, modi magnam numquam nihil consequatur libero.'
  mainWrapper.append(mainFirst)
}

function menu() {
  menuWrapper.classList.add('menu-wrapper')
  menuWrapper.style.display = 'none'
  content.append(menuWrapper)

  for (let i = 0; i < 9; i++) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('card')
    menuWrapper.append(menuItem)

    const menuItemName = document.createElement('div')
    menuItemName.classList.add('card-content')
    menuItemName.style.fontSize = '1.5em'
    menuItemName.innerText = 'Menu Item Number ' + [i + 1]
    menuItem.append(menuItemName)

    const menuItemContent = document.createElement('p')
    menuItemContent.classList.add('card-content')
    menuItemContent.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam blanditiis magnam facere aperiam quia inventore quidem ullam error, iste minus unde placeat. Possimus distinctio, in rem dolor eum nemo esse quam veniam! Vero exercitationem, modi magnam numquam nihil consequatur libero.'
    menuItem.append(menuItemContent)
  }
}

function contact() {
  contactWrapper.classList.add('contact-wrapper')
  contactWrapper.style.display = 'none'
  content.append(contactWrapper)

  const contactItem = document.createElement('p')
  contactItem.classList.add('contact-item')
  contactItem.innerText = 'Mailing Address: 4 Southside Avenue, Apartment 7-I, New Paltz/NY, 12561'
  contactWrapper.append(contactItem)
}

function footer() {
  
  const footerWrapper = document.createElement('footer')
  footerWrapper.classList.add('footer-wrapper')
  content.append(footerWrapper)
    
  const footerItem = document.createElement('div')
  footerItem.classList.add('footer-el')
  footerItem.innerText = 'Developed by kindmemento'
  footerWrapper.append(footerItem)
}

export { header, main, menu, contact, footer }