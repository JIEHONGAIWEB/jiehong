/**
 * 定义一个产品每一个小盒子的类
 * 盒子属性
 * 盒子的方法
 * 盒子的返回值
 */
define(function(require,exports,module){
	let jq = require('common.js');	
	class cell_Product{
 /**
 *  
 * 面向对象的实现，单例模式的每一个盒子的实现
 * 导航栏的属性：宽高,上边框,图片的展示,介绍的标题信息,介绍的详细信息,
 * 以前的价格,现在的价格,享受的活动
 */

        constructor(obj){
            let defalutObj = {
                //盒子默认的样式
                "width":234,
                "height":300,
                "marginLeft":20,
                "marginRight":0,
                "top":0,
                "left":0,
                "background":"white",
                "borderTop":"",
                //盒子内部图片的样式
                "infoImg":"//i1.mifile.cn/a1/pms_1508927539.71959246!220x220.png",
                "imgWidth":150,
                "imgHeight":150,
                "imgPaddingTop":33,
                //h6标题的信息
                "introTitle": "",
                //p标签的信息详情
                "introInfo":"",
                //span价格信息
                "pricePre":"",
                "priceNow":"",
                //活动标签
                "activeTag" : ""

                
            };
            for(let key in obj){
                defalutObj[key] = obj[key];
            }
            for(let key in defalutObj){
                this[key] = defalutObj[key];
            }
            this.myDom = null;
            this.createUI();
        }
    createUI(){
/**
 * 方法的实现:初始化我的盒子的样式
 * @return {[type]} [description]
 */
        //解决父元素高度塌陷的问题
    
       
        this.myDom = $("<div></div>");
        this.myDom.appendTo(this.parentDom);
        this.myDom.css({
            "width":this.width,
            "height":this.height,
            "background":this.background,
            "position":"absolute",
            "left":this.left,
            "top":this.top,
            "marginLeft":this.marginLeft,
            "borderTop":this.borderTop
        });

        //这就是一系列添加标签操作
        this.myDom.append("<img />").append("<h6></h6>").append("<p></p>").append("<span></span>").append("<span></span>");
        
/**
 * 注意每一次传进来的数据都是需要设置清楚的
 */
        //给父元素设置样式来定义孩子的样式
        this.parentDom.css({
            "text-align":"center"
        });
        this.myDom.css({
            "marginRight":this.marginRight,
            "marginLeft":this.marginLeft
        });
        // 图片
        this.myDom.children().eq(0).attr("src","http:"+this.infoImg);
        this.myDom.children().eq(0).css({
            "width":this.imgWidth,
            "height":this.imgHeight,
            "paddingTop":this.imgPaddingTop,
            "margin":"0 auto ",
            "display":"block"
            


        });
        //介绍的标题
        this.myDom.children().eq(1).html(this.introTitle);
        this.myDom.children().eq(1).css({
            "text-overflow":"ellipsis",
            "white-space":"nowrap",
            "overflow":"hidden",
            "display":"block",
            "color":"#212121",
            "font-size":"14px",
            "font-weight":"400"
        });
        //介绍的信息 
        this.myDom.children().eq(2).html(this.introInfo);
        this.myDom.children().eq(2).css({
            "margin": "10px  10px",
            "height": "18px",
            "font-size": "12px",
            "text-align": "center",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            "overflow":"hidden",
            "color": "#b0b0b0"
        });
        //价格
        
        this.myDom.children().eq(3).css({
            "margin":"  20px 10px",
            "text-align": "center",
            "color":" #ff6700"
        });
        this.myDom.children().eq(3).html(this.priceNow+"元");

        //原先的价格
        this.myDom.children().eq(4).html(this.pricePre);
    }
 }
    
/*cell_Product.prototype.initEvent = function(){
*
 * 方法的实现:初始化我的盒子的鼠标滑过显示的事件
 * 效果实现：鼠标滑过的时候，出现盒子向上移动一点，然后出现盒子的阴影
 * @return {[type]} [description]
 
}*/



/**
 * 对外开放我的类的构造函数，外界只能调用类对象来新建小盒子cell
 * 
 */

	exports.jq = jq;
    exports.cell = function (obj){
       new cell_Product(obj);  
    }
       
    
    
});