$(function(){
	
	var second = 7;
	setTimeout(function(){
		$(".loader").css("display","none");
		$(".finish").css("display","inline-block");
	},6000)
	var time = setInterval(function(){
		if(second == 0){
			clearInterval(time);
			location.href="../kaoshi/welcome.html"
		}
		$("#time").text(second);
		second -= 1;
	},1000)
	
})