$(function() {

	$("#back_p").click(function(){
		history.back(-1);
	})

	function init_level() {
		$("#weak").attr("class", "level");
		$("#middle").attr("class", "level");
		$("#strong").attr("class", "level");
		
		$("#weak_level").attr("class","level_text");
		$("#middle_level").attr("class","level_text");
		$("#strong_level").attr("class","level_text");
		
		$("#weak_space").attr("class","level_space");
		$("#middle_space").attr("class","level_space");
		$("#strong_space").attr("class","level_space");
	
	}

	$("#input_new_password").bind('input propertychange', function() {
		var bind = $("#input_new_password").val();
		var number = bind.replace(/[^0-9]/ig, "");
		var word = bind.replace(/[^a-zA-Z]/ig, "")
		var spe = bind.replace(/[^!@*_.]/ig, "")

		if (number != "" && bind.length > 5 || word != "" && bind.length > 5 || spe != "" && bind.length > 5) {
			init_level();
			$("#weak_space").attr("class","level_text");
			$("#weak_level").attr("class","level_current");
			$("#weak").attr("class", "level weak");
		}

		if (number != "" && word != "" && bind.length > 7 || number != "" && spe != "" && bind.length > 7 || spe != "" && word != "" && bind.length > 7) {
			init_level();
			$("#middle_space").attr("class","level_text");
			$("#middle_level").attr("class","level_current");
			$("#weak").attr("class", "level weak");
			$("#middle").attr("class", "level middle");
		}

		if (number != "" && word != "" && spe != "" && bind.length > 15) {
			init_level();
			$("#strong_space").attr("class","level_text");
			
			$("#strong_level").attr("class","level_current");
			
			$("#weak").attr("class", "level weak");
			$("#middle").attr("class", "level middle");
			$("#strong").attr("class", "level strong");
		}

		if (bind == "") {
			init_level();
		}
	})

	function init() {

		$("#input_current_password").attr("class", "input_box");
		$("#input_new_password").attr("class", "input_box");
		$("#input_define_password").attr("class", "input_box");

		$("#define_null").attr("class", "error_off");
		$("#new_null").attr("class", "error_off");
		$("#current_null").attr("class", "error_off");

		$("#current_error").attr("class", "error_off")
		$("#new_current_error").attr("class", "error_off")
		$("#new_define_error").attr("class", "error_off")
		$("#check_error").attr("class", "error_off");

		$("#space").attr("class", "space_off");

	}

	$("#button_update").click(function() {
		var count = 0;
		var current = "";
		var new_psd = "";
		var define = "";
		var checked = false;
		do {

			current = $("#input_current_password").val();
			new_psd = $("#input_new_password").val();
			define = $("#input_define_password").val();
			checked = $("#check_allow").is(':checked');

			init();
			if (current == "") {
				$("#input_current_password").attr("class", "input_box error_current");
				$("#current_null").attr("class", "error_on");
				$("#space").attr("class", "space_on");
				break;
			}
			init();

			if (new_psd == "") {
				$("#input_new_password").attr("class", "input_box error_current");
				$("#new_null").attr("class", "error_on");
				$("#space").attr("class", "space_on");
				break;
			}
			init();

			if (define == "") {
				$("#input_define_password").attr("class", "input_box error_current");
				$("#define_null").attr("class", "error_on");
				$("#space").attr("class", "space_on");
				break;
			}
			init();

			if (current != "admin") {
				$("#input_current_password").attr("class", "input_box error_current");
				$("#current_error").attr("class", "error_on");
				$("#space").attr("class", "space_on");
				break;
			}
			init();

			if ((current == new_psd) == true) {
				$("#input_current_password").attr("class", "input_box error_current");
				$("#input_new_password").attr("class", "input_box error_current");
				$("#new_current_error").attr("class", "error_on");
				$("#space").attr("class", "space_on");
				break;
			}
			init();

			if ((new_psd == define) == false) {
				$("#input_new_password").attr("class", "input_box error_current");
				$("#input_define_password").attr("class", "input_box error_current");
				$("#new_define_error").attr("class", "error_on")
				$("#space").attr("class", "space_on");
				break;
			}
			init();

			if (checked == false) {
				$("#check_error").attr("class", "error_on");
				$("#space").attr("class", "space_on");
				break;
			} else {
				alert("修改成功");
				window.local.href = "./exam_system_examing.html";
			}
			init();
		} while (count > 1)
	})
})
