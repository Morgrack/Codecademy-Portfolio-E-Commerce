const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'ecommerce',
  password: 'password',
  port: 5432,
});

const getProductsAndPrices = (request, response) => {
    console.log('Get request received!');
    pool.query('SELECT * FROM products', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

module.exports = {
    getProductsAndPrices
}