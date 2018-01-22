define(function(){
	

   
    let arrNavData = [];
    let arrNavRightImage = [] ; 
           
/**
     * 数据的获取需要请求
     * 直接用Jquery的请求方式
     * 服务器请求获取需要的数据
 */

    $.ajax({
        "url":"json/productsInfo.json",
        "success":jsonNavData,
        "async":false,
        "dataType":"json"
    });

    
    function jsonNavData(json){
        // console.log(json.comment.length);
       let length = json.length;
        for(let i =0; i < length;i++ ){
            //家电
           arrNavData.push(json[i].data.title);
           
           //arrNavRightImage.push(json.homeelec.right[2].items[i].image);
   
        }
           
        console.log(arrNavData);


      
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
  
	



});
                 
