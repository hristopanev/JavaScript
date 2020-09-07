function createArticle() {
	const createTittleInput = document.getElementById('createTitle');
	const createContentInput = document.getElementById('createContent');
	const articleSection = document.getElementById('articles');

	const titleInputValue = createTittleInput.value;
	const contentValue = createContentInput.value;

	if(!titleInputValue || !contentValue) {
		alert('Please enter text!');
		return;
	}
	

	const newArticle = document.createElement('article');
	const articleHeading = document.createElement('h3');
	const articleParagraph = document.createElement('p');

	newArticle.appendChild(articleHeading);
	newArticle.appendChild(articleParagraph);

	articleSection.appendChild(newArticle);
	
	articleHeading.innerText= titleInputValue;
	articleParagraph.innerText = contentValue;

	createTittleInput.value = '';
	createContentInput.value = '';


}