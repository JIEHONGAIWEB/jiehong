
define(function(require,exports,module){


    

 /**
     * 数据的获取需要请求
     * 直接用Jquery的请求方式
     * 服务器请求获取需要的数据
 */

    let arrSingleProTitle = ["小米MIX 2","红米5A","小米Note 3","小米电视4A 43英寸 标准版","小米笔记本","小米手环 2","小米净水器 厨下式","小米圈铁耳机Pro"];
    let arrSingleProIntroInfo = ["全面屏2.0，5.99 大屏","8天超长待机，137g轻巧机身","1600万美颜自拍，2倍变焦双摄","全高清HDR  四核高性能处理器","更轻更薄，像杂志一样随身携带","OLED 显示屏幕，升级计步算法","直出纯净水，隐藏式安装","独创双动圈+动铁，三单元发声"];
    let arrSingleProPriceNow = ["3299","599","1999","1999","3599","149","1999","149"];
/**
 * 家电的数据获取
 * @type {Array}
 */
    let arrHomeElecTitle = [];
    let arrHomeElecIntroInfo = [];
    let arrHomeElecPriceNow = [];
    let arrHomeElecImage = [];
/**
 * 智能数据的获取
 */
    let arrSmartTitle = [];
    let arrSmartIntroInfo = [];
    let arrSmartPriceNow = [];
    let arrSmartImage = [];
/**
 * 搭配数据获取
 */
    let arrMatchTitle = [];
    let arrMatchIntroInfo = [];
    let arrMatchPriceNow = [];
    let arrMatchImage = [];

/**
 * 配件数据获取
 */
    let arrAccessoriesTitle = [];
    let arrAccessoriesIntroInfo = [];
    let arrAccessoriesPriceNow = [];
    let arrAccessoriesImage = [];
/**
 * 周边数据获取
 */
    let arrAroundTitle = [];
    let arrAroundIntroInfo = [];
    let arrAroundPriceNow = [];
    let arrAroundImage = [];

/**
 * 热评产品数据获取 comment
 */
    let arrCommentTitle = [];
    let arrCommentIntroInfo = [];
    let arrCommentPriceNow = [];
    let arrCommentImage = [];

/**
 * 内容数据获取 content
 */
    let arrBookTitle = [];
    let arrBookIntroInfo = [];
    let arrBookPriceNow = [];
    let arrBookImage = [];

    let arrGameTitle = [];
    let arrGameIntroInfo = [];
    let arrGamePriceNow = [];
    let arrGameImage = [];

    let arrThemeTitle = [];
    let arrThemeIntroInfo = [];
    let arrThemePriceNow = [];
    let arrThemeImage = [];

    let arrAppTitle = [];
    let arrAppIntroInfo = [];
    let arrAppPriceNow = [];
    let arrAppImage = [];
/**
 * 视频数据获取 video
 */
    let arrVideoTitle = [];
    let arrVideoIntroInfo = [];
    let arrVideoPriceNow = [];
    let arrVideoImage = [];

    
    let jq = require('common.js');  
    
    $.ajax({
        "url":"json/comment.json",
        "success":jsonData,
        "async":false,
        "dataType":"json"
    });

    // $.getJSON("json/comment.json", success);
    
    function jsonData(json){
        // console.log(json.comment.length);
       let length = json.homeelec.right[0].items.length;
        for(let i =0; i < length;i++ ){
            //家电
           arrHomeElecTitle.push(json.homeelec.right[2].items[i].title);
           arrHomeElecIntroInfo.push(json.homeelec.right[2].items[i].desc);
           arrHomeElecPriceNow.push(json.homeelec.right[2].items[i].sale_price);
           arrHomeElecImage.push(json.homeelec.right[2].items[i].image);
            //智能
           arrSmartTitle.push(json.smart.right[0].items[i].title);
           arrSmartIntroInfo.push(json.smart.right[0].items[i].desc);
           arrSmartPriceNow.push(json.smart.right[0].items[i].sale_price);
           arrSmartImage.push(json.smart.right[0].items[i].image);
            //搭配
           arrMatchTitle.push(json.match.right[1].items[i].title);
           arrMatchIntroInfo.push(json.match.right[1].items[i].desc);
           arrMatchPriceNow.push(json.match.right[1].items[i].sale_price);
           arrMatchImage.push(json.match.right[1].items[i].image);
            //配件
           arrAccessoriesTitle.push(json.accessories.right[1].items[i].title);
           arrAccessoriesIntroInfo.push(json.accessories.right[1].items[i].desc);
           arrAccessoriesPriceNow.push(json.accessories.right[1].items[i].sale_price);
           arrAccessoriesImage.push(json.accessories.right[1].items[i].image);
            //周边
           arrAroundTitle.push(json.around.right[0].items[i].title);
           arrAroundIntroInfo.push(json.around.right[0].items[i].desc);
           arrAroundPriceNow.push(json.around.right[0].items[i].sale_price);
           arrAroundImage.push(json.around.right[0].items[i].image);
         
            
        }

/**
 * 为你推荐  数据的获取？？？？？
 */

    //热评产品
    let commentLength = json.comment.length;
    for(let i =0;i<commentLength;i++){
      
        arrCommentTitle.push(json.comment[i].title);
        arrCommentIntroInfo.push(json.comment[i].desc);
        arrCommentPriceNow.push(json.comment[i].sale_price);
        arrCommentImage.push(json.comment[i].image);
        //http://i1.mifile.cn/a4/bae79ac6-60d5-478d-90e7-ff1222764bd1
      
    }

    
    //内容
    let booksLength = json.content.book.length;
    let themeLength = json.content.theme.length;
    let gameLength = json.content.game.length;
    let appLength = json.content.app.length;

    for(let i =0;i<booksLength;i++){
        arrBookTitle.push(json.content.book[i].title);
        arrBookIntroInfo.push(json.content.book[i].desc);
        arrBookPriceNow.push(json.content.book[i].sale_price);
        arrBookImage.push(json.content.book[i].image);
     
    }
    for(let i =0;i<themeLength;i++){
        arrThemeTitle.push(json.content.theme[i].title);
        arrThemeIntroInfo.push(json.content.theme[i].desc);
        arrThemePriceNow.push(json.content.theme[i].sale_price);
        arrThemeImage.push(json.content.theme[i].image);
     
    }
    for(let i =0;i<gameLength;i++){
        arrGameTitle.push(json.content.game[i].title);
        arrGameIntroInfo.push(json.content.game[i].desc);
        arrGamePriceNow.push(json.content.game[i].sale_price);
        arrGameImage.push(json.content.game[i].image);
     
    }
    for(let i =0;i<appLength;i++){
        arrAppTitle.push(json.content.app[i].title);
        arrAppIntroInfo.push(json.content.app[i].desc);
        arrAppPriceNow.push(json.content.app[i].sale_price);
        arrAppImage.push(json.content.app[i].image);
     
    }
     //视频
    let videoLength = json.video.length
    for(let i = 0 ;i< 4; i++ ){
    
        
        arrVideoTitle.push(json.video[i].title);
        arrVideoIntroInfo.push(json.video[i].desc);
        arrVideoPriceNow.push(json.video[i].sale_price);
        arrVideoImage.push(json.video[i].image);

    }
   // console.log(json.video[0].title);
      
}//end ajax





/**
 * 
 *
 *开放我的数据
 *
 *
 * 
 * @type {[type]}
 */
     exports.arrSingleProTitle  = arrSingleProTitle;
     exports.arrSingleProIntroInfo  = arrSingleProIntroInfo;
     exports.arrSingleProPriceNow  = arrSingleProPriceNow;

/**
 * 家电数据的开放访问
 */
   
     exports.arrHomeElecTitle        =  arrHomeElecTitle  ;
     exports.arrHomeElecIntroInfo    =  arrHomeElecIntroInfo ;
     exports.arrHomeElecPriceNow     =  arrHomeElecPriceNow;
     exports.arrHomeElecImage        =  arrHomeElecImage  ;
/**
 * 智能数据的开放访问
 */
     exports.arrSmartTitle           =  arrSmartTitle     ;
     exports.arrSmartIntroInfo       =  arrSmartIntroInfo ;
     exports.arrSmartPriceNow        =  arrSmartPriceNow  ;
     exports.arrSmartImage           =  arrSmartImage     ;
/**
 * 搭配数据开放访问
 */
     exports.arrMatchTitle           =  arrMatchTitle     ;
     exports.arrMatchIntroInfo       =  arrMatchIntroInfo ;
     exports.arrMatchPriceNow        =  arrMatchPriceNow  ;
     exports.arrMatchImage           =  arrMatchImage     ;

/**
 * 配件数据开放访问
 */
     exports.arrAccessoriesTitle     =  arrAccessoriesTitle;
     exports.arrAccessoriesIntroInfo =  arrAccessoriesIntroInfo;
     exports.arrAccessoriesPriceNow  =  arrAccessoriesPriceNow;
     exports.arrAccessoriesImage     =  arrAccessoriesImage;
/**
 * 周边数据开放访问
 */
     exports.arrAroundTitle          =  arrAroundTitle    ;
     exports.arrAroundIntroInfo      =  arrAroundIntroInfo;
     exports.arrAroundPriceNow       =  arrAroundPriceNow ;
     exports.arrAroundImage          =  arrAroundImage    ;

/**
 * 热评产品数据开放访问 comment
 */
     exports.arrCommentTitle         =  arrCommentTitle   ;
     exports.arrCommentIntroInfo     =  arrCommentIntroInfo;
     exports.arrCommentPriceNow      =  arrCommentPriceNow;
     exports.arrCommentImage         =  arrCommentImage   ;

/**
 * 内容数据开放访问 content
 */
     exports.arrBookTitle            =  arrBookTitle      ;
     exports.arrBookIntroInfo        =  arrBookIntroInfo  ;
     exports.arrBookPriceNow         =  arrBookPriceNow   ;
     exports.arrBookImage            =  arrBookImage      ;

     exports.arrGameTitle            =  arrGameTitle      ;
     exports.arrGameIntroInfo        =  arrGameIntroInfo  ;
     exports.arrGamePriceNow         =  arrGamePriceNow   ;
     exports.arrGameImage            =  arrGameImage         ; 

     exports.arrThemeTitle           =  arrThemeTitle     ;
     exports.arrThemeIntroInfo       =  arrThemeIntroInfo ;
     exports.arrThemePriceNow        =  arrThemePriceNow  ;
     exports.arrThemeImage           =  arrThemeImage        ; 

     exports.arrAppTitle             =  arrAppTitle       ;
     exports.arrAppIntroInfo         =  arrAppIntroInfo   ;
     exports.arrAppPriceNow          =  arrAppPriceNow    ;
     exports.arrAppImage             =  arrAppImage        ;
  /* *  
 * 视频数据开放访问 video
 */
     exports.arrVideoTitle            = arrVideoTitle      ;
     exports.arrVideoIntroInfo        = arrVideoIntroInfo  ;
     exports.arrVideoPriceNow         = arrVideoPriceNow   ;
     exports.arrVideoImage            = arrVideoImage         ; 


    
     
 


       

});




