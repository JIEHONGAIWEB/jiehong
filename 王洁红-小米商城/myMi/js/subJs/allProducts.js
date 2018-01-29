define(function(require,exports,module){
	let jq = require('../common.js');


 function createAll(){
let arrTopBar = ["小米商城","MIUI","loT","云服务","水滴","金融","有品","Select Region"];
		let arrTopBarHref = ["../myMi/index.html","http://www.miui.com/","https://iot.mi.com/index.html","https://i.mi.com/","https://shuidi.mi.com/","https://jr.mi.com/?from=micom","https://youpin.mi.com/","https://www.mi.com/index.html#J_modal-globalSites"];
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
		$(".topbar-info a").eq(0).attr("href","../myMi/logIn.html");
		$(".topbar-info a").eq(1).attr("href","../myMi/signIn.html");
/**
 * 头部的信息
 */
		let headerArr = ["全部商品列表","小米手机","红米","笔记本","电视","盒子","新品","路由器","智能硬件","服务","社区"]; 
		
		for(let i = 0 ; i < headerArr.length;i++ ){
			$(".header-nav").append("<a></a>");
			$(".header-nav a").eq(i).text( headerArr[i]);
		}
		$(".header-nav :first-child").attr("href","../myMi/allProductsInfo.html");
		$(".header-nav :nth-child(5)").attr("href","../myMi/goodsDetailInfo.html");

/**
 * 首先先建立每一块区域的标题
 */
//新建我的小盒子，需要进入类
let little =  require('../nav.js');

//nav 数据的请求获取
let navDate =  require('../navDate.js');

//数据图片的存储
let imgSrcArr = [navDate.arr0NavRightImage,navDate.arr1NavRightImage,navDate.arr2NavRightImage,navDate.arr3NavRightImage,navDate.arr4NavRightImage,navDate.arr5NavRightImage,navDate.arr6NavRightImage,navDate.arr7NavRightImage,navDate.arr8NavRightImage,navDate.arr9NavRightImage];

//数据内容的存储
let contentArr = [navDate.arr0NavRightTitle,navDate.arr1NavRightTitle,navDate.arr2NavRightTitle,navDate.arr3NavRightTitle,navDate.arr4NavRightTitle,navDate.arr5NavRightTitle,navDate.arr6NavRightTitle,navDate.arr7NavRightTitle,navDate.arr8NavRightTitle,navDate.arr9NavRightTitle];



		let $header = null;
		let $area = null;
/**
 * 动态的增加了每一个标题需要的header区域
 * 并且给每一个标题区域进行赋值并且进行样式的设置
 */
		for(let i =0 ;i<10;i++){
			$header= $("<header><a></a></header>");
			$area = $("<div></div>");
			$("#allProducts").append($header);
			$("#allProducts").append($area);
			$("#allProducts").children().eq(2*i).children().eq(0).html(navDate.arrNavData[i]);
    		$("#allProducts").children().eq(2*i).children().eq(0).css({
				"height":40,
				"font-size":18,
				"display":"inline-block",
				"padding-top":33,
				"color":"#ff6700"
			});	
			$("#allProducts").children().eq(2*i).css({
				"padding-left":60
			});
			$("#allProducts").children().eq(2*i+1).css({
				"height":808,
				"width":1226,
				"margin":"0 auto",
				"position":"relative"
			});	
				
		}
        
		
/**
 * 为每一个标题区域的下边进行赋值
 * 获取到数据并且进行赋值
 */

		//-*****************************

		//利用div标签的每一个的索引进行新建对象和赋值     
          
              // let divLength = imgSrcArr[0].length;
              // 1,3,5,7,9,
              let indexNav = -1;
              let lengthAll = imgSrcArr.length;//10
              for(let i = 0;i<lengthAll;i++){
              		
	           		let $parent = $("#allProducts").children().eq(2*i+1);//1

	           		let length = imgSrcArr[i].length;//17

	           		
	           		  
	              	for(let j=0;j<length;j++){ //17
					
					 let left = j%5*245; 
	            	 
	                 let top = parseInt(j/5)*163;
	                 
		                 	
	                            little.little({
	                                "parentDom":$parent,
	                                "imgWidth":60,
	                                "imgHeight":65,
	                                "height":137,
	                                "width":245,
	                                "spanTop":top,
	                                "spanLeft":left,
	                                "imgSrc":imgSrcArr[i][j],
	                                "content":contentArr[i][j],
	                                "display":"block"
	                               
	                            });
		                 
	                  	
	              }		
              }
              
                 
                /*for(let i =0;i<10;i++){
                 	$("#allProducts").children().eq(2*i+1).index();//1

                 	let length = Math.ceil((contentArr[0].length)/6);//3

             		let much0= contentArr[liNum].length;//17

                    let left = 0;
                    let top = 0;
                    left = i*240 + 20;
                    for(let j = 0 ;j<6;j++ ){
                        indexNav++;
                        top = j*70 +20;
                        if(indexNav<much0){
                            little.little({
                                "parentDom":$("#allProducts").children().eq(2*i+1),
                                "imgWidth":40,
                                "imgHeight":40,
                                "height":340,
                                "spanTop":top,
                                "spanLeft":left,
                                "imgSrc":imgSrcArr[liNum[i]][indexNav],
                                "content":contentArr[liNum[i]][indexNav],
                               
                            });
                        }else{
                            break;
                        }
                
                    }
                }*/


		//-*****************************














    



 }

  
    	




		exports.jq =jq;
		exports.createAll = createAll;
});
