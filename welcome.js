var now = new Date();

function time_question(id) {
	var hour = now.getHours();
	if (hour < 6) {
		$("#" + id).text("凌晨好！")
	} else if (hour < 9) {
		$("#" + id).text("早上好！")
	} else if (hour < 14) {
		$("#" + id).text("中午好！")
	} else if (hour < 17) {
		$("#" + id).text("下午好！")
	} else if (hour < 22) {
		$("#" + id).text("晚上好！")
	}
}

function initArray() {
	this.length = initArray.arguments.length;
	for (var i = 0; i < this.length; i++) {
		this[i + 1] = initArray.arguments[i]
	}
}

function getDate(id) {
	var d = new initArray("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	$("#" + id).text(now.getFullYear() + " 年 " + (now.getMonth() + 1) + " 月 " + now.getDate() + " 日 " + d[now.getDay() + 1]);
}

function getTime(id){
	var time = setInterval(function(){
		var date = new Date();
		var second = date.getSeconds();
		var minute = date.getMinutes();
		var hour = date.getHours();
		if(second < 10 && second > -1){
			second = "0" + second;
		}
		
		if(minute < 10 && minute > -1){
			minute = "0" + minute;
		}
		
		if(hour < 10 && hour > -1){
			hour = "0" + hour;
		}
		
		$("#" + id).text(hour + "：" + minute + "：" + second);
	});
}

$(function() {
	time_question("say_time");
	getDate("head_date");
	getTime("head_time");
	
	$(".quit").click(function(){
		location.href = "../kaoshi/login_student.html";
	})
	
	$("#exam_center").click(function(){
		location.href = "../kaoshi/exam_system_start.html"
	})
	
	$("#person_center").click(function(){
		location.href = "../kaoshi/person_center.html"
	})
	
	$("#head_logo").click(function(){
		location.href = "../kaoshi/welcome.html"
	})
})
