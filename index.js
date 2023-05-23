const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const menuSection = document.querySelector('#menuSection');

openBtn.addEventListener('click', () => {
	menuSection.classList.add('show-menu');
	menuSection.classList.remove('hide-menu');
	closeBtn.style.display = 'grid';
	openBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
	menuSection.classList.remove('show-menu');
	menuSection.classList.add('hide-menu');
	closeBtn.style.display = 'none';
	openBtn.style.display = 'grid';
})