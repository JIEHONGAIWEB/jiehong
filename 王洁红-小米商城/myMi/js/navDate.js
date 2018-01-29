define(function(require,exports,module){
	
var arrNavData =[];
   
    let arr0NavRightImage = [] ; 
    let arr0NavRightTitle = [] ; 


    let arr1NavRightImage = [] ; 
    let arr1NavRightTitle = [] ; 

    let arr2NavRightImage = [] ; 
    let arr2NavRightTitle = [] ; 

    let arr3NavRightImage = [] ; 
    let arr3NavRightTitle = [] ; 

    let arr4NavRightImage = [] ; 
    let arr4NavRightTitle = [] ; 

    let arr5NavRightImage = [] ; 
    let arr5NavRightTitle = [] ; 

    let arr6NavRightImage = [] ; 
    let arr6NavRightTitle = [] ; 

    let arr7NavRightImage = [] ; 
    let arr7NavRightTitle = [] ; 

    let arr8NavRightImage = [] ; 
    let arr8NavRightTitle = [] ; 

    let arr9NavRightImage = [] ; 
    let arr9NavRightTitle = [] ; 
 

           
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
/**
 * 数据的处理需要进一步的完善
 */
    
    function jsonNavData(json){
       
       let length = json.length;
       //10个对象
        for(let i =0; i < length;i++ ){
            arrNavData.push(json[i].data.title);
        }

        let length0Right = json[0].right.length;
        for(let j =0;j< length0Right;j++){
                
                arr0NavRightTitle.push(json[0].right[j].title);
                arr0NavRightImage.push(json[0].right[j].img);
        }

         let length1Right = json[1].right.length;
        for(let j =0;j< length1Right;j++){
                
                arr1NavRightTitle.push(json[1].right[j].title);
                arr1NavRightImage.push(json[1].right[j].img);
        }

         let length2Right = json[2].right.length;
        for(let j =0;j< length2Right;j++){
                
                arr2NavRightTitle.push(json[2].right[j].title);
                arr2NavRightImage.push(json[2].right[j].img);
        }


         let length3Right = json[3].right.length;
        for(let j =0;j< length3Right;j++){
                
                arr3NavRightTitle.push(json[3].right[j].title);
                arr3NavRightImage.push(json[3].right[j].img);
        }

         let length4Right = json[4].right.length;
        for(let j =0;j< length4Right;j++){
                
                arr4NavRightTitle.push(json[4].right[j].title);
                arr4NavRightImage.push(json[4].right[j].img);
        }


         let length5Right = json[5].right.length;
        for(let j =0;j< length5Right;j++){
                
                arr5NavRightTitle.push(json[5].right[j].title);
                arr5NavRightImage.push(json[5].right[j].img);
        }


         let length6Right = json[6].right.length;
        for(let j =0;j< length6Right;j++){
                
                arr6NavRightTitle.push(json[6].right[j].title);
                arr6NavRightImage.push(json[6].right[j].img);
        }


         let length7Right = json[7].right.length;
        for(let j =0;j< length7Right;j++){
                
                arr7NavRightTitle.push(json[7].right[j].title);
                arr7NavRightImage.push(json[7].right[j].img);
        }


         let length8Right = json[8].right.length;
        for(let j =0;j< length8Right;j++){
                
                arr8NavRightTitle.push(json[8].right[j].title);
                arr8NavRightImage.push(json[8].right[j].img);
        }


         let length9Right = json[9].right.length;
        for(let j =0;j< length9Right;j++){
                
                arr9NavRightTitle.push(json[9].right[j].title);
                arr9NavRightImage.push(json[9].right[j].img);
        }
    }

     exports.arrNavData  = arrNavData;


     exports.arr0NavRightImage  = arr0NavRightImage;
     exports.arr0NavRightTitle  = arr0NavRightTitle;
  
	 exports.arr1NavRightImage  = arr1NavRightImage;
     exports.arr1NavRightTitle  = arr1NavRightTitle;
  
     exports.arr2NavRightImage  = arr2NavRightImage;
     exports.arr2NavRightTitle  = arr2NavRightTitle;
  
     exports.arr3NavRightImage  = arr3NavRightImage;
     exports.arr3NavRightTitle  = arr3NavRightTitle;
  

     exports.arr4NavRightImage  = arr4NavRightImage;
     exports.arr4NavRightTitle  = arr4NavRightTitle;
  

     exports.arr5NavRightImage  = arr5NavRightImage;
     exports.arr5NavRightTitle  = arr5NavRightTitle;
  

     exports.arr6NavRightImage  = arr6NavRightImage;
     exports.arr6NavRightTitle  = arr6NavRightTitle;
  

     exports.arr7NavRightImage  = arr7NavRightImage;
     exports.arr7NavRightTitle  = arr7NavRightTitle;
  

     exports.arr8NavRightImage  = arr8NavRightImage;
     exports.arr8NavRightTitle  = arr8NavRightTitle;
  
     exports.arr9NavRightImage  = arr9NavRightImage;
     exports.arr9NavRightTitle  = arr9NavRightTitle;
  



});
                 
