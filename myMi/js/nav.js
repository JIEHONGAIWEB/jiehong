/**
 * 定义轮播图上定位的导航栏的效果
 * 面向对象定义
 * 属性
 * 方法
 * 返回值
 * 改为做成单例的样式
 */
define(function(reqiure,exports,module){

	class littleProductorDisplay{
		constructor(obj){
			/**
			 * 导航栏产品信息的详细
			 * span标签进行站位
			 * 进行改进定义默认值
			 */
			this.myDom = null;
			this.parentDom = obj.parentDom;
			//图片的宽高
			this.imgWidth = obj.imgWidth;
			this.imgHeight = obj.imgHeight;
			this.imgSrc = obj.imgSrc;

			//span的位置
			this.spanTop = obj.spanTop;
			this.spanLeft = obj.spanLeft;
			this.display = obj.display;

			//span里边的主要内容
			this.content = obj.content;

			this.createUI();
		}
	
		
}	

    

littleProductorDisplay.prototype.createUI=function(){
	this.parentDom.css("display","block");
			this.myDom = $("<span></span>");
			$("#slide-nav-des").append(this.myDom);
			this.myDom.append("<img/>").append("<a></a>");
			//span本身的样式设置
			this.myDom.css({
				"position":"absolute",
				"top":this.spanTop,
				"left":this.spanLeft,
				"display":this.display
			});	
			this.myDom.children().eq(0).css({
				"width":this.imgWidth,
				"height":this.imgHeight,
				"vertical-align":"middle",
				"margin-right":10
			});
			this.myDom.children().eq(1).css({
				"font-size":12
			});

			//img 标签的样式的设置
			this.myDom.children().eq(0).attr("src","http:"+this.imgSrc);
			
			
			//i文字的美容
			this.myDom.children().eq(1).html(this.content);
	}



	

	exports.little = function (obj){
	 new littleProductorDisplay(obj);
    };
    
});