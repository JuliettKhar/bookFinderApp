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
				<li class="book__pages">pages: ${book.volumeInfo.pageCount}</li>
				<li class="book__published">published ${book.volumeInfo.publishedDate}</li>
			</ul>
			`
		});
		this.result.innerHTML = template;
		// console.log(data)
	}
}