//用户数据模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtSchema = new Schema({ //订模型
	"userId": String,
	"userName": String,
	"userPwd": String,
	"orderList": Array,           //订单列表
	"cartList": [{               //购物车列表
		"dataName": String,
		"price": Number,
		"imgSrc": String,
		"productId": String,
		"chencked": String,
		"productNum": String
	}],
	"addressList":Array         //地址列表
});

module.exports = mongoose.model('User', produtSchema, "users")