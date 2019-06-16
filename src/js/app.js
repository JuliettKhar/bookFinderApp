import { Api } from './api.js';
import { UI } from './ui.js';
const api = new Api();
const ui = new UI();

function getBooks(queryString) {
	const books = api.getData(queryString)
		.then( data => ui.displayBooks(data))
		.catch( err => console.log(err))
}


function onClick(event) {
	const inputValue = ui.input.value;
	const queryString = inputValue.split(' ').join('+');
	getBooks(queryString);
	event.preventDefault();
}

function subscribe() {
	ui.btn.addEventListener('click', onClick);
}

export function init() {
		subscribe();
		
}