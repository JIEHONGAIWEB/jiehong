var pwdpass = false;

$("#password").on('blur',function (){
	//判断密码
	//要求1：用户名称只能包含数字，字母，下划线，长度不小于6位

	var reg = /\w{6,}/;
	if(reg.test(this.value)){
		pwdpass = true;
		console.log(1);
	}else{
		alert("密码应该大于6位，请重新输入!!");
	}



}); 




$("#logIn").on('click',pwdIn);
function pwdIn (){
	if(pwdpass){
		$.ajax({
			"url":"php/addUserPasswordToDatabase.php",
			"type":"post",
			"data":{"password":$("#password").val()},
			"success":addPassword
		});
	}
	function addPassword(d){
		if(d==1){
			window.open("http://localhost/publish3/myMi/logIn.html");
		}else{
			alert("密码格式不正确，请直接设置密码");
		}
	}
}