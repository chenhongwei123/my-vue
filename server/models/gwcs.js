//商品数据模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtSchema = new Schema({ //订模型
	// "dataName": String,
	// "price": Number,
	// "imgSrc": String,
	// "productId": String,
	// "suliang":String
	

	 "productId": String,
	 "productName": String,
	 "salePrice": Number,
	 "checked": String,
	 "productNum": Number,
	 "productImage": String


});

module.exports = mongoose.model('Gwc', produtSchema)