 define(function(require,exports,module){
 function createPage(){
    let create = require("createDiv.js");
    create.UI();

/*第一大部分=====================================================*/
/**
 * 使用到导航栏的信息，引入文件,并且赋值
 */
        
    let navDate = require("navDate.js");
    /*arrNavRightImage
    arrNavRightTitle*/
    for(let i =0;i< 10;i++){
        $("#slide-nav").children().eq(i).children().eq(0).html(navDate.arrNavData[i]);
    }
    for(let i =0;i< 10;i++){
     $("#slide-nav").children().eq(i).children().eq(0).attr("class","iconfont icon-right");
    }
/**
 * 调用我的第一个的数据
 * 改进封装成为函数
 * @type {[type]}
 */ 
let little = require("nav.js");
/**
 * 给所有的li
 * 添加鼠标滑过的事件updateNavDate
 * 
 * @return {[type]} [description]
 */
for(let i =0 ;i<10;i++){
    $("#slide-nav").children().eq(i).on("mouseover",updateNavDate);
}
for(let i =0 ;i<10;i++){
    $("#slide-nav").children().eq(i).on("mouseout",none);

}
/***************************
*/
function none(){
    $("#slide-nav-des").css({
        "display":"none"
    });


}
 let imgSrcArr = [navDate.arr0NavRightImage,navDate.arr1NavRightImage,navDate.arr2NavRightImage,navDate.arr3NavRightImage,navDate.arr4NavRightImage,navDate.arr5NavRightImage,navDate.arr6NavRightImage,navDate.arr7NavRightImage,navDate.arr8NavRightImage,navDate.arr9NavRightImage];

let contentArr = [navDate.arr0NavRightTitle,navDate.arr1NavRightTitle,navDate.arr2NavRightTitle,navDate.arr3NavRightTitle,navDate.arr4NavRightTitle,navDate.arr5NavRightTitle,navDate.arr6NavRightTitle,navDate.arr7NavRightTitle,navDate.arr8NavRightTitle,navDate.arr9NavRightTitle];


//通过孩子的下标来调用函数
function updateNavDate(){
    $("#slide-nav-des span").css({
        "display":"none"
    });
   //这就是第一个孩子
     let indexNav = -1;         
            let liNum =  $(this).index();
             let length = Math.ceil(contentArr[liNum].length/6);
             let much0= contentArr[liNum].length;//17
             
                 for(let i =0;i<length;i++){
                    let left = 0;
                    let top = 0;
                    left = i*240 + 20;
                    for(let j = 0 ;j<6;j++ ){
                        indexNav++;
                        top = j*70 +20;
                        if(indexNav<much0){
                            little.little({
                                "parentDom":$("#slide-nav-des"),
                                "imgWidth":40,
                                "imgHeight":40,
                                "height":340,
                                "spanTop":top,
                                "spanLeft":left,
                                "imgSrc":imgSrcArr[liNum][indexNav],
                                "content":contentArr[liNum][indexNav],
                                "display":"block"
                            });
                        }else{
                            break;
                        }
                
                    }
                }
}

   


/**
 * 鼠标滑过的时候，导航栏信息的显示
 */

/**
 * 鼠标滑过导航栏信息的赋值
 */
/*第二大部分=================================================*/

/**
  * 使用到产品的信息数据，引入文件
  * @type {[type]}
  */
        let dataProcessing = require("dataProcessing.js");  
/**
  * 0--明星单品 
  * @param  {[type]} let i             [description]
  * @return {[type]}     [description]
*/

        for(let j = 0 ;j<4;j++){
           /*
            if(i == 1 && j ==3){
                break;
            }*/
            let $left = j*266;

            create.cell({
            "imgWidth":160,
            "imgHeight":160,
            "height":340,
            "background":"#fff",
            "parentDom":$(".allProducts").eq(0),
            "left":$left,
            "top":0,
            "introTitle":dataProcessing.arrSingleProTitle[j],
            "introInfo":dataProcessing.arrSingleProIntroInfo[j],
            "priceNow":dataProcessing.arrSingleProPriceNow[j]
                
         });

        }

      
/**
  * 1--家电 按照right进行找孩子
  * @param  {[type]} let i             [description]
  * @return {[type]}     [description]
*/

        
        // arrHomeElecTitle.push(json.homeelec.right[0].items[1].title);
    //家电right区域  
    let index = -1;
        for(let i =0;i<2;i++){
            let $top = i*315;

            for(let j = 0 ;j<4;j++){
               let $left = j*246;
               index++;
                create.cell({

                    "parentDom":$(".right").eq(0),
                    "left":$left,
                    "top":$top,
                    
                    "introTitle":dataProcessing.arrHomeElecTitle[index],
                    "introInfo":dataProcessing.arrHomeElecIntroInfo[index],
                    "priceNow":dataProcessing.arrHomeElecPriceNow[index],
                    "infoImg":dataProcessing.arrHomeElecImage[index]
                    
                    
             });

            }
        }
    //家电left区域
      create.cell({

                    "parentDom":$(".left").eq(0),
                    "left":0,
                    "top":0,
                    "imgWidth":235,
                    "imgHeight":615,
                    "marginLeft":0,
                    "imgPaddingTop":0,
                    "infoImg":dataProcessing.arrHomeElecLeftImage
                    
                    
             });
     
       
/**
 * 2--智能
 * @param  {[type]} let i             [description]
 * @return {[type]}     [description]
 */
     index = -1;
        for(let i =0;i<2;i++){
            let $top = i*315;

            for(let j = 0 ;j<4;j++){
               let $left = j*246;
               index++;
                create.cell({

                    "parentDom":$(".right").eq(1),
                    "left":$left,
                    "top":$top,
                    
                    "introTitle":dataProcessing.arrSmartTitle[index],
                    "introInfo":dataProcessing.arrSmartIntroInfo[index],
                    "priceNow":dataProcessing.arrSmartPriceNow[index],
                    "infoImg":dataProcessing.arrSmartImage[index]
                    
                    
             });

            }
        }

    //智能left区域
    create.cell({

                    "parentDom":$(".left").eq(1),
                    "left":0,
                    "top":0,
                    "imgWidth":234,
                    "imgHeight":300,
                    "marginLeft":0,
                    "imgMarginTop":0,
                    "imgPaddingTop":0,

                    "infoImg":dataProcessing.arrSmartLeftImage[0]
                    
                    
            });
     create.cell({

                    "parentDom":$(".left").eq(1),
                    "left":0,
                    "top":315,
                    "imgWidth":234,
                    "imgHeight":300,
                    "marginLeft":0,
                    "imgPaddingTop":0,
                    "infoImg":dataProcessing.arrSmartLeftImage[1]
                    
                    
             });
    

/**
 * 3--搭配
 * @param  {[type]} let i             [description]
 * @return {[type]}     [description]
*/
         index = -1;
        for(let i =0;i<2;i++){
            let $top = i*315;

            for(let j = 0 ;j<4;j++){
               let $left = j*246;
               index++;
                create.cell({

                    "parentDom":$(".right").eq(2),
                    "left":$left,
                    "top":$top,
                    
                    "introTitle":dataProcessing.arrMatchTitle[index],
                    "introInfo":dataProcessing.arrMatchIntroInfo[index],
                    "priceNow":dataProcessing.arrMatchPriceNow[index],
                    "infoImg":dataProcessing.arrMatchImage[index]
                    
                    
             });

            }
        }
    //搭配left区域
    create.cell({

                    "parentDom":$(".left").eq(2),
                    "left":0,
                    "top":0,
                    "imgWidth":234,
                    "imgHeight":300,
                    "marginLeft":0,
                    "imgMarginTop":0,
                    "imgPaddingTop":0,
                    "infoImg":dataProcessing.arrMatchLeftImage[0]
                    
                    
            });
     create.cell({

                    "parentDom":$(".left").eq(2),
                    "left":0,
                    "top":315,
                    "imgWidth":234,
                    "imgHeight":300,
                    "marginLeft":0,
                    "imgPaddingTop":0,
                    "infoImg":dataProcessing.arrMatchLeftImage[1]
                    
                    
             });
    

/**
 * 4--配件
 * @param  {[type]} let i             [description]
 * @return {[type]}     [description]
 */
          index = -1;
        for(let i =0;i<2;i++){
            let $top = i*315;

            for(let j = 0 ;j<4;j++){
               let $left = j*246;
               index++;
                create.cell({

                    "parentDom":$(".right").eq(3),
                    "left":$left,
                    "top":$top,
                    
                    "introTitle":dataProcessing.arrAccessoriesTitle[index],
                    "introInfo":dataProcessing.arrAccessoriesIntroInfo[index],
                    "priceNow":dataProcessing.arrAccessoriesPriceNow[index],
                    "infoImg":dataProcessing.arrAccessoriesImage[index]
                    
                    
             });

            }
        }
     //配件left区域
    create.cell({

                    "parentDom":$(".left").eq(3),
                    "left":0,
                    "top":0,
                    "imgWidth":234,
                    "imgHeight":300,
                    "marginLeft":0,
                    "imgMarginTop":0,
                    "imgPaddingTop":0,

                    "infoImg":dataProcessing.arrAccessoriesLeftImage[0]
                    
                    
            });
     create.cell({

                    "parentDom":$(".left").eq(3),
                    "left":0,
                    "top":315,
                    
                    "imgWidth":234,
                    "imgHeight":300,
                    "marginLeft":0,
                    "imgPaddingTop":0,
                    "infoImg":dataProcessing.arrAccessoriesLeftImage[1]
                    
                    
             });
    

/**
 * 5--周边
 * @param  {[type]} let i             [description]
 * @return {[type]}     [description]
 */
        index = -1;
        for(let i =0;i<2;i++){
            let $top = i*315;

            for(let j = 0 ;j<4;j++){
               let $left = j*246;
               index++;
                create.cell({

                    "parentDom":$(".right").eq(4),
                    "left":$left,
                    "top":$top,
                    
                    "introTitle":dataProcessing.arrAroundTitle[index],
                    "introInfo":dataProcessing.arrAroundIntroInfo[index],
                    "priceNow":dataProcessing.arrAroundPriceNow[index],
                    "infoImg":dataProcessing.arrAroundImage[index]
                    
                    
             });

            }
        }
    //周边left区域
    create.cell({

                    "parentDom":$(".left").eq(4),
                    "left":0,
                    "top":0,
                    "imgWidth":234,
                    "imgHeight":300,
                    "marginLeft":0,
                    "imgMarginTop":0,
                    "imgPaddingTop":0,
                    "imgMarginBottom":20,
                    "infoImg":dataProcessing.arrAroundLeftImage[0]
                    
                    
            });
   create.cell({

                    "parentDom":$(".left").eq(4),
                    "left":0,
                    "top":315,
                    "imgWidth":234,
                    "imgHeight":300,
                    "marginLeft":0,
                    "imgPaddingTop":0,
                    "infoImg":dataProcessing.arrAroundLeftImage[1]
                    
                    
             });
    


/**
 * 6--为你推荐 4列 问题：？？？高度的问题
 * @param  {[type]} let j             [description]
 * @return {[type]}     [description]
 */
        for(let j = 0 ;j<4;j++){
               
                let $left = j*266;
                create.cell({

                    "parentDom":$(".allProducts").eq(6),
                    "left":$left,
                    "top":0,
                    "introTitle":dataProcessing.arrSingleProTitle[j],
                    "introInfo":dataProcessing.arrSingleProIntroInfo[j],
                    "priceNow":dataProcessing.arrSingleProPriceNow[j]
                    
             });
            }
/**
* 7--热评产品 4列 问题：？？？高度的问题
* @param  {[type]} let j             [description]
* @return {[type]}     [description]
*/
        index = -1;
        for(let j = 0 ;j<4;j++){
               index++;
                let $left = j*320;
                create.cell({

                    "parentDom":$(".allProducts").eq(7),
                    "left":$left,
                    "top":0,
                    "width":300,
                    "height":416,
                    "imgHeight":220,
                    "imgWidth":300,
                    "imgPaddingTop":0,
                    "introTitle":dataProcessing.arrCommentTitle[index],
                    "introInfo":dataProcessing.arrCommentIntroInfo[index],
                    "priceNow":dataProcessing.arrCommentPriceNow[index],
                    "infoImg":dataProcessing.arrCommentImage[index]
                    
             });
            }   
    /**
     * 8--内容 4列
     * @param  {[type]} let j             [description]
     * @return {[type]}     [description]
     */
        index = -1;

         for(let j = 0 ;j<4;j++){
               index++;
               
                let $left = j*320;
                create.cell({

                    "parentDom":$(".allProducts").eq(8),
                    "left":$left,
                    "top":0,
                    "width":300,
                    "height":416,/*
                    "imgHeight":140,
                    "imgWidth":106,*/

                    "imgHeight":178,
                    "imgWidth":300,
                    "imgPaddingTop":0,

                    "marginRight":12,
                    "marginLeft":0,
                    "introTitle":dataProcessing.arrBookTitle[index],
                    "introInfo":dataProcessing.arrBookIntroInfo[index],
                    "priceNow":dataProcessing.arrBookPriceNow[index],
                    "infoImg":dataProcessing.arrBookImage[index]
                    
             });
            }
    /**
     * 9--视频
     * @param  {[type]} let j             [description]
     * @return {[type]}     [description]
     */
        index = -1;

         for(let j = 0 ;j<4;j++){
               index++;
               
                let $left = j*320;
                create.cell({

                    "parentDom":$(".allProducts").eq(9),
                    "left":$left,
                    "top":0,
                    "width":300,
                    "height":288,
                    "imgHeight":178,
                    "imgWidth":300,
                    "imgPaddingTop":0,
                    "introTitle":dataProcessing.arrVideoTitle[index],
                    "introInfo":dataProcessing.arrVideoIntroInfo[index],
                    "priceNow":dataProcessing.arrVideoPriceNow[index],
                    "infoImg":dataProcessing.arrVideoImage[index]


                    
             });
        

}
  
} 
 exports.createPage = createPage;
});
 