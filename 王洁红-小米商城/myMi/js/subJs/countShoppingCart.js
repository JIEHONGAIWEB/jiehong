//总计购物车的页面的js文件
/**
 * 当页面一打开的时候，需要请求读取数据库的信息
 */
$.ajax({
	"url":"php/readGoodsInfoToShoppingCart",
	"type":"post",
	"success":addToCart

});
/**
 * 读取到数据的时候在页面中创建新的标签来存放产品的信息
 * 1、图片 
 */
function addTOCart(){

}