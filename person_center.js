function init_item(item) {
	for (var i = 0; i < $(item).length; i++) {
		$(item)[i].className = "left_tab_item";
	}
}

function init_right_item() {
	$("#right_base_info").css("display", "none");
	$("#right_result_history").css("display", "none");
	$("#right_update_psd").css("display", "none");
}

$(function() {
	$("#exam_center").click(function(){
		location.href = "../kaoshi/exam_system_start.html"
	})
	
	$("#person_center").click(function(){
		location.href = "../kaoshi/person_center.html"
	})
	
	$("#head_logo").click(function(){
		location.href = "../kaoshi/welcome.html"
	})
	
	$(".quit").click(function(){
		location.href = "../kaoshi/login_student.html";
	})
	
	$(".left_tab_item").click(function() {
		var id = $(this)[0].id;
		console.log(id);
		init_right_item();
		switch (id) {
			case "base_info":
				$("#right_base_info").css("display", "inline-block");
				break;
			case "result_history":
				$("#right_result_history").css("display", "inline-block");
				break;
			case "update_psd":
				$("#right_update_psd").css("display", "inline-block");
				location.href = "../kaoshi/exam_update.html";
				break;
			default:
				break;
		}
		init_item(".left_tab_item");
		$(this)[0].className = "left_tab_item item_define";

	})
})
