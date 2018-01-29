/**
 * 面向对象的实现轮播图
 * 轮播图的属性
 * 轮播图的方法
 * 轮播图的返回值
 * 
 */
 define(function(require,exports,module){
 
/**
 * 实现轮播图的区域
 */
class slideShow {
	/**
	 * 构造方法的描述
	 * @param  {[json对象]}
	 * obj [传进来的图片区域的宽高，背景的颜色，设置底部小圆点的样式]
	 * @return {[type]}     [无]
	 */
	constructor(obj){
		//属性
		this.objDom = obj.objDom;
		//轮播图区域的宽高
		this.width = obj.width;
		this.height = obj.height;
		this.bgColor = obj.bgColor;

		//传进来的图片数组
		
		this.arrImg = obj.arrImg;
		//当前图片的下标
		this.index = -1;
		this.myTimer = null;

		//创建的两个节点：1、轮播图图片展示的区域 2、底部小豆豆
		
		this.myDom = null;
		this.spanDom = null;

		//轮播图中的按钮
	    this.btnWidth = obj.btnWidth;
	    this.btnHeight = obj.btnHeight;
	    this.btnBgColor = obj.btnBgColor;//原始颜色
	    this.btnHighColor = obj.btnHighColor;//高亮颜色
	    this.btnMarginRight	 = obj.btnMarginRight;

		//初始化创建标签
		this.createUI(obj);
		//图片进行轮播
		this.changeIndex();
	}	
}


slideShow.prototype.createUI = function(obj){


	/*定义了默认的轮播图的区域的样式*/
	let defaultStyle = {
		"objDom" : this.objDom,
		"width" :"220",
		"height" :"200",
		"bgColor" :"#f1f1f1",
		"btnWidth":20,
        "btnHeight":20,
        "btnBgColor":"#f5f5f5",
        "btnHighColor":"red",
        "btnMarginRight":10
		
	};

    /*for将默认的样式和传进来的样式进行合并*/
    for(let key in obj){
    	defaultStyle[key] = obj[key];
    }
    for(let key in defaultStyle){
    	this[key] = defaultStyle[key];
    }

    for(let i=0;i< (this.arrImg.length);i++){
      	this.index ++;
      	this.myDom = $("<img />");
      	//设置了轮播图片盒子的样式
     	 $(this.myDom).css({
			"position":"absolute",
			"width":this.width,
			"height":this.height
		});
      	

      	//添加了标签节点
      	$(this.objDom).append(this.myDom);
      	

      	//设置了轮播图片的地址
      	this.myDom.attr("src","http:"+this.arrImg[this.index]);
	      	
      }

      for(let i =0;i<(this.arrImg.length);i++){
      	this.spanDom = $("<span></span>");
      	//设置了轮播图片盒子的样式
      	
     	 $(this.spanDom).css({
			"position":"absolute",
			"top":this.height-this.btnHeight-30,
			"right":i*30,
			"width":this.btnWidth,
			"height":this.btnHeight,
			"borderRadius":"50%",
			"marginRight":this.btnMarginRight+10,
			"backgroundColor":this.btnBgColor
		});
     	 $(this.objDom).append(this.spanDom);
      }


}
/**
 * 图片的下标切换
 */
slideShow.prototype.changeIndex = function (){
	setInterval(()=>{
		//记录前一个的下标
		let outOrd = this.index;
		//下一个图片地址
		this.index ++;
		//循环
		if(this.index >= this.arrImg.length){
			this.index = 0;
		}
		//调用自动播放轮播图
		this.autoPlay(outOrd,this.index)
	},3000);

	 

		

}

/**
*图片实现自动播放
*/
    
slideShow.prototype.autoPlay = function(outOrd,inOrd){

	let currentOpacity = 1;
	let incOpacity = -0.3;

	this.myTimer = setInterval(()=>{

		currentOpacity = currentOpacity+incOpacity;

			if(currentOpacity<=0){
				clearInterval(this.myTimer);
			}	
			$(this.objDom).children().eq(outOrd).css("opacity",currentOpacity);

			$(this.objDom).children().eq(inOrd).css("opacity",1-currentOpacity);
			
		},100);
	//改变豆豆的背景颜色。
        let lis = this.objDom.find('span');
        //把所有的按钮变成橙色（初始颜色）
        for(let i=0;i<lis.length;i++){
            lis.eq(i).css({
            	"backgroundColor":this.btnBgColor
            }); 
        }
        //把当前的变成红色
        lis.eq(-inOrd-1).css({
        	"backgroundColor":this.btnHighColor
        });

}
/**
 * 初始化事件
 */
    
exports.slide = function(obj){
		 new slideShow(obj);
	}
});