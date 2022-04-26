const ulNavbar = document.querySelector('.navbar__list')
const burgerBtn = document.querySelector('.hamburger')
const current = document.querySelector('.footer__year')
const navLinks = document.querySelectorAll('.link')
const contact = document.querySelector('.contact')
const offer = document.querySelector('.offer')
const home = document.querySelector('.home')
const menuItems = document.querySelectorAll('a')
const scroolSpySections = document.querySelectorAll('section')

const currenYear = () => {
	const year = new Date().getFullYear()
	current.textContent = year
}

const navbarHandle = () => {
	ulNavbar.classList.toggle('list-show')
	burgerBtn.classList.toggle('is-active')
	document.body.classList.toggle('hide-body')

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			ulNavbar.classList.remove('list-show')
			burgerBtn.classList.remove('is-active')
			document.body.classList.remove('hide-body')
		})
	})
}


const currentSection = () => {
	if (document.body.classList.contains('contact-page')) {
		contact.classList.add('active')
		home.classList.remove('active')
	} 	
	if (document.body.classList.contains('offers-page')) {
		offer.classList.add('active')
		home.classList.remove('active')
	} 
}


const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scroolSpySections.forEach(section => {

			if (window.scrollY <= section.offsetTop + section.offsetHeight + 10) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				menuItems.forEach(item => item.classList.remove('active'))

				activeSection.classList.add('active')
			}

		})
	}
}



burgerBtn.addEventListener('click', navbarHandle)
window.addEventListener('scroll', handleScrollSpy)
currentSection()
currenYear()




