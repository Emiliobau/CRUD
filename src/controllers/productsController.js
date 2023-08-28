const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		//console.log(products)
		res.render("products", {products:products} )
	},

	// Detail - Detail from one product
	detail: (req, res) => {

		idProducto = req.params.id

		let productoEncontrado 
		for( let i=0; i<products.length; i++){
			if(idProducto == products[i].id){

				productoEncontrado=products[i]
			}
		}

		res.render("detail", {products : productoEncontrado})
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {

		res.render("product-create-form" )
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {

		//console.log(req.body)

		let idProductoNuevo = 0

		for(let i=0 ; i < products.length; i++ ){

			if(idProductoNuevo < products[i].id){
				idProductoNuevo++
			}
		}
		idProductoNuevo = idProductoNuevo +1

		let productoNuevo = {
			id : idProductoNuevo,
			name: req.body.name,
			price: req.body.price,
			discount : req.body.discount,
			description: req.body.description,
		}

		products.push(productoNuevo)

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null," "))

		res.render("products", {products:products})

		

		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;