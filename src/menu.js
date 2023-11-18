import menuImg from './imgs/menu.jpg'

const menu = () => {
	const menuDiv = document.createElement('div')
	menuDiv.className = 'info-div'
	const title = document.createElement('h2')
	title.textContent = 'Menu'
	menuDiv.append(title)
	const img =  new Image()
	img.src = menuImg
	menuDiv.append(img)

	return menuDiv
}

export default menu