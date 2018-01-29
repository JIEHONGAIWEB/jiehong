var pwdpass = false;

$("#password").on('blur',function (){
	//判断密码
	//长度不小于6位
	if(this.value != ''){
		var reg = /\w{6,}/;
		if(reg.test(this.value)){
			pwdpass = true;
		}else{
			alert("密码应该大于6位，请重新输入!!");
		}
	}else{
		return;
	}
}); 



//点击登录
$("#logIn").on('click',pwdIn);
function pwdIn (){
	if(pwdpass){
		//首先从cookie中获取用户名
		var username;
		var cookiearr = document.cookie.split("; ");
		for(var i =0;i<cookiearr.length;i++){
			var cookieItems = cookiearr[i].split("=");
			if(cookieItems[0]=="username"){
				username = cookieItems[1];
			}
		}
		//然后再发送ajax请求存储用户名和密码
		//
		$.ajax({
			"url":"php/addUserPasswordToDatabase.php",
			"type":"post",
			"data":{"password":$("#password").val(),"username":username},
			"success":addPassword
		});
	}
	function addPassword(d){
		if(d==1){
			window.location.href="http://localhost/publish3/myMi/logIn.html";
		}else{
			alert("密码格式不正确，请直接设置密码");
		}
	}
}