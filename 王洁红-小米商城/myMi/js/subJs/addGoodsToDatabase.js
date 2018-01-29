//将产品的信息添加到数据库
define(function(require,exports,module){
let topUI = require("topCommon.js");
/**
 * 添加商品的信息去数据库中
 */
	function add(){
		topUI.topUI();	
		$("#addCart").on("click",toAddDatabase);
	}

	function toAddDatabase(){
		$.ajax({
			"url":"php/addGoodsInfoToDatabase.php",
			"data":{"id":1000,"name":"手机","price":999,"number":1},
			"success":f
		});
	}
	function f(d){
		if(d==0){
			alert("商品已经添加过了，请尽快在购物车结算。");
		}else{
			window.open("http://localhost/publish3/myMi/addGoodsSuccess.html");   
		}
	}
exports.add = add;
});