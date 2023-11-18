import homeImg from './imgs/home.jpg'

const home = () => {
	const homeDiv = document.createElement('div')
	homeDiv.className = 'info-div'
	const title = document.createElement('h2')
	title.textContent = 'Home'
	homeDiv.append(title)
	const img =  new Image()
	img.src = homeImg
	homeDiv.append(img)

	return homeDiv
}

export default home