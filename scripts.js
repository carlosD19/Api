var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

request.onload = function () {

  	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		const app = document.getElementById('root');
		const logo = document.createElement('img');
		logo.src = data.message;
		app.appendChild(logo);
	} else {
	  	console.log('error');
	}
  }
request.send();