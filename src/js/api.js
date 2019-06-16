export class Api {
	constructor() {
		this.apiKey = 'AIzaSyBtaCmhGVVgqlfkNQnNnnIhY0nPUR1MU0g';
	}
	async getData(queryString) {
		const query = queryString;
		const url = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${this.apiKey}`);
		const response = await url.json();
		return {
			response
		}
	}
}