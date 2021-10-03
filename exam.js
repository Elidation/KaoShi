$(function() {
	$("#back_p").click(function(){
		history.back(-1);
	})
	
	$("#button_login").click(function(){
		location.href = "../kaoshi/exam_system_examination.html"
	})
	
	function queren() {
		var se = confirm("您是否同意交卷？");
		if (se == true) {
			for (var i = 0; i < answer.length; i++) {
				if (answer[i] == "") {
					$("#null_window").css("display", "inline-block");
					setTimeout(function() {
						$("#null_window").css("display", "none");
					}, 2000)
					break;
				}
				if (i == (answer.length-1)) {
					location.href = "../kaoshi/result.html";
				}
			}
		}
	}

	function fullScreen() {
		var el = document.documentElement;
		var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
			el.mozRequestFullScreen || el.msRequestFullScreen;
		if (typeof rfs != "undefined" && rfs) {
			rfs.call(el);
		} else if (typeof window.ActiveXObject != "undefined") {
			//for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript != null) {
				wscript.SendKeys("{F11}");
			}
		}
	}

	fullScreen();

	$(document).bind("contextmenu", function() {
		return false;
	}); //禁止右键
	document.oncontextmenu = function() {
		return false;
	};
	document.onkeydown = function() {
		if (window.event && window.event.keyCode == 123) {
			event.keyCode = 0;
			event.returnValue = false;
			return false;
		}
	};

	document.onkeydown = function() {
		if (window.event && window.event.keyCode == 116) {
			event.keyCode = 0;
			event.returnValue = false;
			return false;
		}
	};



	var answer = new Array();
	var second = 59;
	var minute = 59;
	var hour = 0;
	for (var i = 0; i < 20; i++) {
		answer[i] = "";
	}

	$(".hand_on").click(function() {
		queren();
	})

	$(".answer").bind("input propertychange", function() {
		var item = $(this).attr('id');
		var number = item.replace(/[^0-9]/ig, "");
		number = parseInt(number);

		if (this.value.length > 0) {
			$("#order_fill" + number)[0].className = "order_item order_define";
			answer[4 + number] = this.value;
		} else {
			$("#order_fill" + number)[0].className = "order_item";
			answer[4 + number] = "";
		}
	})

	$(".choose").click(function() {
		var choose_item = $(this).attr('id');
		var number = choose_item.replace(/[^0-9]/ig, "");
		var word = choose_item.replace(/[^a-zA-Z]/ig, "");
		number = parseInt(number);

		if ($(this).attr("class") == "choose") {
			if (word.length == 1) {
				for (var i = 0; i < $("#choice" + number + " div").length; i++) {
					$("#choice" + number + " div")[i].className = "choose";
				}
				$("#order_choice" + number)[0].className = "order_item order_define";
				answer[number - 1] = word;
			} else {
				for (var i = 0; i < $("#judge" + number + " div").length; i++) {
					$("#judge" + number + " div")[i].className = "choose";
				}
				$("#order_judge" + number)[0].className = "order_item order_define";
				answer[9 + number] = word;
			}
			$("#" + choose_item)[0].className = "choose choose_current";
		} else {
			$(this).attr("class", "choose");
			if (word == "A" || word == "B" || word == "C" || word == "D") {
				$("#order_choice" + number)[0].className = "order_item";
				answer[number - 1] = "";
			} else {
				$("#order_judge" + number)[0].className = "order_item";
				answer[9 + number] = "";
			}
		}
	})

	var time = setInterval(function() {
		second = second - 1;

		if (hour == 0 && minute == 0 && second == 0) {
			clearInterval(time);
			location.href = "../result.html";
		}

		if (second == 0 && minute > 0) {
			second = 59;
			minute = minute - 1;
		}

		if (minute == 0 && hour > 0) {
			hour = hour - 1;
			minute = 59;
		}
		
		if (hour == 0 && minute == 29 && second == 59) {
			$("#warn_window").css("display", "inline-block");
			setTimeout(function() {
				$("#warn_window").css("display", "none");
			}, 2000)
		}

		$("#hour").text("" + hour)
		$("#second").text("" + second);
		$("#minute").text("" + minute);
	}, 1000);


})
