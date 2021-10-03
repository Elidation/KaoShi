$(function() {
	$("#button_login").click(function() {
		function init(){
			
			$("#input_username").attr("class", "input_box");
			$("#input_password").attr("class", "input_box");
			
			$("#account_null").attr("class", "error_off");
			$("#password_null").attr("class", "error_off");
			
			$("#check_error").attr("class", "error_off");
			$("#login_error").attr("class", "error_off");
			
			$("#space").attr("class","space_off");
			
		}
		
		var count = 0;
		var username = "";
		var password = "";
		var checked = false;
		
		username = $("#input_username").val();
		password = $("#input_password").val();
		checked = $("#check_allow").is(':checked');
		
		do{
			// 判断账号与密码空值
			if (username == "") {
				$("#input_username").attr("class", "input_box error_current");
				$("#account_null").attr("class", "error_on");
				$("#space").attr("class","space_on");
				break;
			}
			init();
			
			if (password == "") {
				$("#input_password").attr("class", "input_box error_current");
				$("#password_null").attr("class", "error_on");
				$("#space").attr("class","space_on");
				break;
			} 
			init();
			
			// 判断账号与密码对错
			if (username != "admin" || password != "admin") {
				$("#input_username").attr("class", "input_box error_current");
				$("#input_password").attr("class", "input_box error_current");
				$("#login_error").attr("class", "error_on");
				$("#space").attr("class","space_on");
				break;
			} 
			init();
			
			// 判断复选框是否被选中
			if (checked == false) {
				$("#check_error").attr("class", "error_on");
				$("#space").attr("class","space_on");
				break;
			} else {
				location.href="../kaoshi/welcome.html";
			}
			init();
		}while(count >1)
	})
})
