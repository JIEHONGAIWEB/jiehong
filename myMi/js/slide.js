/**
 * 面向对象的实现轮播图
 * 轮播图的属性
 * 轮播图的方法
 * 轮播图的返回值
 * 
 */
 define(function(require,exports,module){
 
/*轮播图面向对象使用jQuery编写,面向对象*/
//需要什么样的类，都有什么样的属性
//需要的是，先看传进来数组的元素有几个，确定有几个小豆豆，定位在自己父元素的底部的中间

/**
 * 轮播图类的声明
 * @author Oliva 
 * @Time 2018.1.14 13:51
 */

class slideShow {
	/**
	 * 构造方法的描述
	 * @param  {[json对象]}
	 * obj [传进来的图片区域的宽高，背景的颜色，设置底部小圆点的样式]
	 * @return {[type]}     [无]
	 */
	constructor(obj){
		
		this.objDom = obj.objDom;

		this.width = obj.width;
		this.height = obj.height;
		this.bgColor = obj.bgColor;

		//传进来的图片数组
		//？？后期需要修改，数据的获取需要从后边的数据库中进行获取
		this.arrImg = obj.arrImg;

		this.myTimer = null;
		//创建的两个节点：1、轮播图图片展示的区域 2、底部小豆豆
		
		this.myDom = null;
		this.myBtn = [];

		//小豆豆,宽高，设置背景的颜色，高亮之后的背景的颜色

		this.btnWidth = obj.btnWidth;
		this.btnHeight = obj.btnHeight;
		this.btnBgColor = obj.btnBgColor;
		this.btnHLight = obj.btnHLight;
		//初始化样式
		this.createUI(obj);
		this.autoPlay();
	}	
}


slideShow.prototype.createUI = function(obj){
	/**
	* 初始化图片区域的样式
	* @param 
	* @return
	* @author
	* @Time 2018-1-14 14:01
	*/

	/*定义了默认的轮播图的区域的样式*/
	let defaultStyle = {
		"objDom" : this.objDom,
		"width" :"600",
		"height" :"400",
		"bgColor" :"#f1f1f1",
		"btnWidth" : "10",
		"btnHeight" : "10",
		"btnBgColor" : "gray",
		"btnHLight" : "red"
	};

    /*for将默认的样式和传进来的样式进行合并*/
    for(let key in obj){
    	defaultStyle[key] = obj[key];
    }
    for(let key in defaultStyle){
    	this[key] = defaultStyle[key];
    }
	  /*添加节点.*/
	  this.myDom = $("<img />");
	  $(this.objDom).append(this.myDom);

	  
	  /*全局变量 index 在for循环中进行存储下标*/
	  let index =-1;
	  /*全局变量 $spanDom 创建的新的豆豆的节点*/
	  let $spanDom;

      for(let i=0;i< this.arrImg.length;i++){
      	index=i;
      	$spanDom = $("<span></span>");
      	this.objDom.append($spanDom);
	  
	      	$spanDom.css({
	      				/*动态的修改豆豆之间的距离*/
				"right":function (){return index+=30}
			});
      }
      

      /*设置了 轮播图区域图片展示的样式*/
      $(this.myDom).css({
      		"display":"block",
			"position":"absolute",
			"width":this.width,
			"height":this.height,
			"backgroundColor":this.bgColor
		});

      /*设置了 小豆豆的样式*/
      $spanDom.css({
			"position":"absolute",
			"bottom":10,
			"margin":10,
			"width":this.btnWidth,
			"height":this.btnHeight,
			"backgroundColor":this.btnBgColor,
			"border-radius":"50%"
		});
}

slideShow.prototype.autoPlay = function(){
	/**
	*图片实现自动播放
	*/
    
	this.myTimer = setInterval(()=>{
		/*每次从0开始循环*/
		this.index++;
		if(this.index < this.arrImg.length){
			/*只是读取数组中的代表图片路径的值*/
			$(this.myDom)[0].src = this.arrImg[this.index];

			
      

			$(this.myDom).prev().fadeOut(100).animate({"opacity":0},2000);
			$(this.myDom).fadeIn(100);
		}else{
			this.index = -1;
		}
	},3000);
	

		
		
}
/*
slideShow.prototype.stopPlay = function(){
	/**
	*图片实现停止播放
	*
	
}*/














/**
 * 界面的设计
 * @param {obj对象}
 * 
 */

let obj = {
	    "objDom" : $("#slide"),
		"arrImg" :["img/1.jpeg","img/2.jpeg","img/3.jpeg","img/4.jpeg"]	
};

let s1 = new  slideShow(obj);



/*手风琴的效果，需要使用jQuery编写，做成面向对象的*/

/*购物车的全选做成面向对象的*/

/*放大镜需要做成单例模式并且使用jquery进行编写*/
});