
$(document).ready(function(){
		$(".job-tab li").click(function(){
			var index=$(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".job-tabcont>li").eq(index).show();
			$(".job-tabcont>li").eq(index).siblings().hide();
		});
			$(".job-tab li").eq(0).attr("class","on");
			$(".job-tabcont>li").eq(0).show();



/*输入框的提示弹出与隐藏*/
	$(".search").on("focus blur",function(event){
		if(event.type == "focus"){
			$(".search-tips").show();
		}
		else if(event.type == "blur"){
			$(".search-tips").hide();			
		}
	});

/*友情链接展开*/
	$(".morelink").on("click",function(){
		var show=$(".morelink").text();
		console.log(show);
		if(show=="展开"){
			$(".link-list").css("height","110px");
			$(".morelink").text("收起");
		}
		else{
			$(".link-list").css("height","20px");
			$(".morelink").text("展开");
		}
	});

/*滚动快速工具*/

$(document).scroll(function(){
	var top=$(document).scrollTop();
	if(top>5){
		$(".back-to-top").show();
	}
	else{
		$(".back-to-top").hide();
	}
});	
})
