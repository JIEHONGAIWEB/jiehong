var pass = false;
$("#phoneNumber").blur(function (){
	
	var regPhone = /^1[34578]\d{9}$/; 
	if(regPhone.test(this.value)){
			pass=true;
	}else{
		alert("手机格式不正确，请重新输入!");
	}
}); 




$("#signIn").on('click',signIn);
function signIn (){
	if(pass){
		$.ajax({
			"url":"php/addUserNameToDatabase.php",
			"type":"post",
			"data":{"phoneNumber":$("#phoneNumber").val()},
			"success":addNumber
		});
	}else{
		alert("手机号码格式不正确，注册不成功");
	}
	
	function addNumber(data){
		if(data==1){
			$.ajax({
			"url":"php/addUserPasswordToDatabase.php",
			"type":"post",
			"data":{"phoneNumber":$("#phoneNumber").val()},
			"success":function (){window.location.href="http://localhost/publish3/myMi/password.html";}
		});
			
		}else{
			alert("手机号注册已经存在，请直接登录!");
		}
	}
}