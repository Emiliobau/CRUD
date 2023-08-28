const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		console.log(products)
		res.render("index", {products:products} )

		// Do the magic
	},
	search: (req, res) => {

		res.send("hola search")
		// Do the magic
	},
};

module.exports = controller;
