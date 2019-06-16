export class UI {
	constructor() {
		this.init();
	}
	init() {
		this.result = document.querySelector('#results');
		this.input = document.querySelector('#bookSearch');
		this.btn = document.querySelector('.search__button');
	}
	displayBooks(data) {
		console.log(data)
		const instance = data.response.items;
		let template = '';
		instance.forEach( book => {
			console.log(book.volumeInfo.imageLinks.smallThumbnail)
			 template += `
			 <ul class="book">
			 	<li class="book__img"><img class="book__img-size"src="${book.volumeInfo.imageLinks.smallThumbnail !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : '#'}" alt="image is not aviliable"></li>
					<li class="book__title">${book.volumeInfo.title}</li>
					<li class="book__author">by ${book.volumeInfo.authors !== undefined ? book.volumeInfo.authors : ' - '}</li>
					<li class="book__pages">${book.volumeInfo.pageCount !== undefined ? book.volumeInfo.pageCount : ' - '} pages</li>
					<li class="book__published">Published ${book.volumeInfo.publishedDate !== undefined ? book.volumeInfo.publishedDate : ' - '}</li>
					<li><a class="book__download" href="${book.accessInfo.webReaderLink}">read on GooglePlay</a></li>
					<li><a class="book__download" href="${book.accessInfo.epub.acsTokenLink}">epub</a></li>
					<li><a class="book__download" href="${book.accessInfo.pdf.acsTokenLink}">pdf</a></li>
			</ul>
			`
		})
		this.result.innerHTML = template;
		console.log(data)
	}

// 	displayError(message, className) {
// 			const errorMessage = document.createElement('p');
// 			errorMessage.className = className;
// 			errorMessage.appendClild(document.createTextNode(message));
// 			this.result.appendChild(errorMessage);
// }
}