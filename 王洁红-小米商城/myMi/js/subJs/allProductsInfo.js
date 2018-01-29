define(function(require,exports,module){
	let jq = require('../common.js');


 function createAll(){
 		let arrTopBar = ["小米商城","MIUI","loT","云服务","水滴","金融","有品","Select Region"];
		let arrTopBarHref = ["https://www.mi.com/index.html","http://www.miui.com/","https://iot.mi.com/index.html","https://i.mi.com/","https://shuidi.mi.com/","https://jr.mi.com/?from=micom","https://youpin.mi.com/","https://www.mi.com/index.html#J_modal-globalSites"];
		let  logIn = ["#","#","#"];
		let inform = ["登录","注册","消息通知"];

/**
 * 顶部导航栏的内容
 * @param  {[type]} let i             [description]
 * @return {[type]}     [description]
 */
		for(let i = 0 ; i < arrTopBar.length;i++ ){
		
			$(".topbar-nav").append("<a href = "+ arrTopBarHref[i] +"></a><span>|</span>");
		}
			$(".topbar-nav span:last-child").remove();

		for(let i = 0 ; i < arrTopBar.length;i++ ){
		// 注意问题，需要给指定的a元素来进行指定
			$(".topbar-nav a").eq(i).text( arrTopBar[i]  );
		}
		//顶部的登录
		for(let i = 0 ; i < logIn.length;i++ ){
		
			$(".topbar-info").append("<a href = "+ logIn[i] +"></a><span>|</span>");
		}
			$(".topbar-info span:last-child").remove();

		for(let i = 0 ; i < inform.length;i++ ){
		// 注意问题，需要给指定的a元素来进行指定
			$(".topbar-info a").eq(i).text( inform[i]);
		}
/**
 * 头部的信息
 */
		let headerArr = ["小米手机","红米","笔记本","电视","盒子","新品","路由器","智能硬件","服务","社区"]; 
		
		for(let i = 0 ; i < headerArr.length;i++ ){
			$(".header-nav").append("<a></a>");
			$(".header-nav a").eq(i).text( headerArr[i]);
		}
/**
 * 首先先建立每一块区域的标题
 */
 	for(let i = 0 ; i < 10 ;i++ ){
 		let $header = $("<header></header>");
			$("#allProducts").append($header);
			$header.css({
				"height":73,
				"lint-height":73,
				"font-size":18
			});
			// $("#allProducts").attr("class","cl");

		}
 }

 		




		exports.jq =jq;
		exports.createAll = createAll;
});
