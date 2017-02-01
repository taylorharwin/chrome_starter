console.info('Plaid extension is running');

var headers = document.getElementsByTagName('h1');

for (var i = 0; i <= headers.length; i++) {
	headers[i].innerHTML = 'Hello World';
}