const getProducts = async (searchParameter = "") => {
	try {
    	const data = await (await fetch('http://localhost:3001/', {method: 'GET', mode: 'no-cors'})).json()
    	console.log(data);
    } catch (err) {
    	console.log(err.message)
    }
}

getProducts();