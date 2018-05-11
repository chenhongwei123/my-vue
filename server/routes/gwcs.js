var express = require("express")
var router = express.Router();
var mongoose = require('mongoose');
var Gwc = require('../models/gwcs');

mongoose.connect('mongodb://127.0.0.1:27017/one'); //链接MongoDB数据库

mongoose.connection.on("connected", function() { //链接成功回调
	console.log("MongoDB connected success.")
})

mongoose.connection.on("error", function() { //链接成功失败
	console.log("MongoDB connected fail.")
})

mongoose.connection.on("disconnected", function() { //链接断开
	console.log("MongoDB connected disconnected.")
})

// 查询商品列表数据
router.get("/", function(req, res, next) { //定义二级路由
	//	res.send('hello word  111')
	let sort = req.param("sort") //通过req.param() 拿到前端传过来的参数（比如sort这个参数）
	let page = parseInt(req.param("page")) //获取当前第几页
	let pageSize = parseInt(req.param("pageSize")) //获取当前页数有多少条数据
	let priceLevel = req.param("priceLevel") //拿到前端传过来的价格范围参数  

	var priceGt = '',priceLte = '';
	   // 大于的区间        小于等于的区间 
	if (priceLevel !== "all") {
		switch(priceLevel) {
			case '0':
				priceGt = 0;
				priceLte = 100;
				break; //大于0小于等于100
			case '1':
				priceGt = 100;
				priceLte = 500;
				break; //大于100小于等于500
			case '2':
				priceGt = 500;
				priceLte = 1000;
				break; //大于500小于等于1000
			case '3':
				priceGt = 1000;
				priceLte = 5000;
				break; //大于0小于等于5000
		}
	}else{
		priceGt = 0;
		priceLte = 5000;
	}

	let skip = (page - 1) * pageSize //分页方法  
	// （当前第2页 - 1）* 每页8条数据  = 8 

	let params = { //定一个要传入的条件查询对象参数，（mongoDB都是传入一个对象）
		salePrice: { //把前端拿来的范围值传入条件查询对象
			$gt: priceGt,
			$lte: priceLte
		}
	}

	let gwcsModel = Gwc.find(params).skip(skip).limit(pageSize); //定一个模型，对模型进行操作，find（）是查找所有数据
	//skip（）方法：跳过之前多少条数据  
	//limit() 方法：显示条数（如：第一页显示了8条数据，第二页就是跳过之前8条数据，然后从第9条数据开始，再显示8条数据  ）

	gwcsModel.sort({
		'salePrice': sort
	});             //用sort方法，来进行升降序操作(对price金额进行排序)
    //  console.log(gwcsModel)

	//	Gwcs.find({}, function(err, doc) { //链接MongoDB数据库（普通查询）
	gwcsModel.exec(function(err, doc) { //链接MongoDB数据库 （方法查询，exec来执行方法）
		if(err) { //如果err，输出错误信息
			res.json({
				status: "1",
				msg: err.message
			});
		} else { //否则返回正确查找的数据
			res.json({
				status: "0",
				msg: 'ok',
				timestamp: new Date().getTime(),
				result: {
					count: doc.length,
					list: doc //数据
				}
			});
		}
	})
});

//加入购物车
router.post("/addCart", function(req, res, next) {
	var userId = "0001",productId = req.body.productId //(post方式通过req.body来取参，get方式通过req.param)
	var User = require('../models/user')

	User.findOne({userId: userId}, function(err, userDoc) { //findOne()：只拿当前第一个用户
		if(err) {
			res.json({
				status: "1",
				msg: err.message
			})
		} else {
			console.log("userDoc:" + userDoc)
			if(userDoc) { //如果有当前用户
				
				let goodsItem = "";
				userDoc.cartList.forEach(function(item) { //遍历用户购物车列表是否有商品productId
					if(item.productId == productId) { //如果有这个商品id
						goodsItem = item; //存入goodsItem里面
						item.productNum++ //并且该商品数量++
					}
				})
				
				if(goodsItem) {                          //判断goodsItem是否有值
					userDoc.save(function(err2, doc2) { //  有值进行保存输出
						if(err2) {
							res.json({
								status: "1",
								msg: err2.message
							})
						} else {
							res.json({
								status: "0",
								msg: 'ok',
								timestamp: new Date().getTime(),
								result: "加入成功"
							})
						}
					})
				} else { //else表示没有这个商品，从而就行保存进去
					Gwc.findOne({productId: productId}, function(err1, doc) { //拿到需要进入购物车的商品id
						if(err1) {
							res.json({
								status: "1",
								msg: err1.message
							})
						} else {
							if(doc) { //如果查到有当前商品
								doc.productNum = 1; //数量加1
								doc.chencked = 1;
								userDoc.cartList.push(doc); //把商品push到userDoc模型的cartList（购物车列表）里去
								userDoc.save(function(err2, doc2) { //进行保存输出
									if(err2) {
										res.json({
											status: "1",
											msg: err2.message
										})
									} else {
										res.json({
											status: "0",
											msg: 'ok',
											timestamp: new Date().getTime(),
											result: "加入成功"
										})
									}
								})
							}
						}
					})
				}

			}
		}
	})
})

module.exports = router //输出

//sort	        可选,int	排序方式,0-升序，1-降序
//page	        必选,int	分页参数，显示第几页
//pageSize	必选,int	分页参数，单页展示数量