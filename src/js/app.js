import { Api } from './api.js';
import { UI } from './ui.js';
const api = new Api();
const ui = new UI();

function getBooks() {
	const books = api.getData()
		.then( data => ui.displayBooks(data))
		.catch( err => console.log(err))
}




export function init() {
	getBooks();
	console.log(ui)
}