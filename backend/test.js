const getProducts = async (searchParameter = "") => {
	const response = await fetch('http://localhost:3001/', {method: 'GET', mode: 'no-cors'});
	const results = await response.json();
	console.log(results);
}

getProducts();