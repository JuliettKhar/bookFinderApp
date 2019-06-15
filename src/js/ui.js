export class UI {
	constructor() {
		this.init();
	}
	init() {
		this.result = document.querySelector('#results');
	}
	displayBooks(data) {
		const instance = data.response.items;
		let template = '';
		instance.forEach( book => {
			 template += `
			 <ul class="book">
			 	<li class="book__img"><img src="${book.volumeInfo.imageLinks.smallThumbnail}"></li>
					<li class="book__title">${book.volumeInfo.title}</li>
					<li class="book__author">by ${book.volumeInfo.authors}</li>
					<li class="book__pages">${book.volumeInfo.pageCount} pages</li>
					<li class="book__published">published ${book.volumeInfo.publishedDate}</li>
					<li class=""><a class="book__download" href="${book.accessInfo.webReaderLink}">read on GooglePlay</a></li>
					<li><a class="book__download" href="${book.accessInfo.epub.acsTokenLink}">epub</a></li>
					<li><a class="book__download" href="${book.accessInfo.pdf.acsTokenLink}">pdf</a></li>
			</ul>
			`
		});
		this.result.innerHTML = template;
		console.log(data)
	}
}