console.clear()

function getAllLinks (){
	const oldLink= document.createElement('div');
	let list_sub__link = document.querySelectorAll('.list__link');
	
	list_sub__link = [...list_sub__link];
	oldLink.classList.add('list_oldLink');
	oldLink.style.whiteSpace = 'pre';

	for (let link = 0; link < list_sub__link.length; link += 1) {
		const element = list_sub__link[link];
		const txt = document.createTextNode(element.getAttribute('href'));

		txt.textContent = '\n' + txt.textContent;
		oldLink.append(txt);
	}
	document.body.append(oldLink);
}
// change theme of page
const toggleTheme = document.querySelector('.theme-changer__label');
const docColor = document.documentElement;
 toggleTheme.addEventListener('click', (e) => {
	if (e.target.tagName === 'INPUT') {
		docColor.getAttribute('data-theme') === 'dark' ? 
		docColor.setAttribute('data-theme', 'white') : 
		docColor.setAttribute('data-theme', 'dark');
	}
 });

function newLinkSideBarMapEl () {
	const map = document.querySelector('.map');
	map.setAttribute('href', `./map.htm`);
}

function newLinkSiteToolbar (){
	const siteToolbar = document.querySelector('.sitetoolbar__link');
	siteToolbar.setAttribute('href', './learn.javascript.ru.html');
}

function newLinksArrowNavigation (){
	const prevPage = document.querySelector('.page__nav_prev');
	const nextPage = document.querySelector('.page__nav_next');
	if(!prevPage || !nextPage){ return null;}
	let prevLink = prevPage.getAttribute('href');
	let nextLink = nextPage.getAttribute('href');

	prevPage.setAttribute('href', `./${prevLink.slice(28)}.html`)
	nextPage.setAttribute('href', `./${nextLink.slice(28)}.html`)
};

function newLinksBreadcrumbs () {
	const breadcrumbs = document.querySelectorAll('.breadcrumbs__link');

	for (const el of breadcrumbs) {
		const link = el.getAttribute('href');

		if (link === 'https://learn.javascript.ru/') {
			el.setAttribute('href', './learn.javascript.ru.html');
		}else{
			el.setAttribute('href', `./${link.slice(28)}.html`);
		}
	}
}


function newLessonsList () {
	const lessons_list = document.querySelectorAll('.lessons-list__link');

	for (const el of lessons_list) {
		const link = el.getAttribute('href');

		el.setAttribute('href', `./${link.slice(28)}.html`);
	}
}

// TaskTutorial
const taskList = document.querySelector('.tasks');
let taskAnswer = null;

	if (taskList !== null) {
		taskList.addEventListener('click', (e) => {
			if(e.target.className === 'task__solution'){
				const el = e.target.nextSibling;

				taskAnswer = el;
				if (el.style.display === '' || el.style.display === 'none') {
					el.style.display = 'block';
				} else{
					el.style.display = 'none';
					taskAnswer = null;
				}
			}
			if (e.target.className === 'close-button task__answer-close') {
				taskAnswer.style.display = 'none';
			}
		})
	}


newLinkSiteToolbar()
newLinksBreadcrumbs();
newLinksArrowNavigation();
newLessonsList();
newLinkSideBarMapEl ();

