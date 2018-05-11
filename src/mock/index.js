// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function () {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }

    return {
        articles: articles
    }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/lists', 'get', produceNewsData);

// import Mock from 'mockjs'
// Mock.mock('/lists', {//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
//     'name': '@cname',
//     'age|1-10': 10
// })
// Mock.mock('/list/listusers', 'get', {//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
//     'data|1-2': [{
//         'title': '@title',
//         'article': '@csentence'
//     }]
// })
