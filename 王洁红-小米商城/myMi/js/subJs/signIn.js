var pass = false;
$("#phoneNumber").blur(function (){
	if(this.value != ''){
		var regPhone = /^1[34578]\d{9}$/; 
		if(regPhone.test(this.value)){
				pass=true;
		}else{
				alert("手机格式不正确，请重新输入!");
			}	
	}else{
		return;
	}
	
}); 



$("#signIn").on('click',signIn);
function signIn (){
	if(pass){
		var date = new Date();
		date.setDate(date.getDate()+7);
		document.cookie = "username="+ $("#phoneNumber").val()+"; expires="+date.toGMTString();
		window.location.href="http://localhost/publish3/myMi/password.html";
		
	}else{
		alert("手机号码格式不正确，注册不成功");
	}
}