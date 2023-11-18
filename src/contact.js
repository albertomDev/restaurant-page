import contactImg from './imgs/contact.jpg'

const contact = () => {
	const contactDiv = document.createElement('div')
	contactDiv.className = 'info-div'
	const title = document.createElement('h2')
	title.textContent = 'Contact'
	contactDiv.append(title)
	const img =  new Image()
	img.src = contactImg
	contactDiv.append(img)

	return contactDiv
}

export default contact