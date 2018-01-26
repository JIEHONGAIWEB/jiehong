var pass = false;
$("#username").blur(function (){
	if(this.value != ''){
		var regPhone = /^1[34578]\d{9}$/; 
		if(regPhone.test(this.value)){
				pass=true;
		}else{
				alert("账号格式不正确，请重新输入！");
			}	
	}else{
		return;
	}
	
}); 



$("#logIn").on('click',logIn);
function logIn (){
	if(pass){
		$.ajax({
			"url":"php/checkUserNameAndLogIn.php",
			"type":"post",
			"data":{"password":$("#password").val(),"username":$("#username").val()},
			"success":checkUser
		});
		
	}else{
		alert("账号格式不正确，请重新输入！");
	}
	function checkUser(t){
		if(t== 1){
			window.location.href="http://localhost/publish3/myMi/index.html";
		}else{
			alert("账号或密码不正确，请重新输入！");
		}
	}
}