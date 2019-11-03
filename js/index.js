$(function() {
	//实现轮播图
	var index = 0;
	var adTimer;
	var length = $(".ul1>li").length;
	$(".ul1").hover(function() {
		clearInterval(adTimer)
	}, function() {
		adTimer = setInterval(function() {
			showImg(index);
			index++;
			if(index == length) {
				index = 0;
			}
		}, 2000)
	}).trigger("mouseleave");

	function showImg(index) {
		var adheight = $(".two").width();
		$(".ul1").stop(true, false).animate({
			"left": -adheight * index
		}, 1000);
	}

	//底部导航栏的悬浮状态
	var shou = document.getElementById("shouye");
	var fenlei = document.getElementById("fenlei");
	var gouwu = document.getElementById("gouwu");
	var my = document.getElementById("my");
	fenlei.onmouseover = function() {
		fenlei.src = "img/首页，分类1.png";
	}
	fenlei.onmouseout = function() {
		fenlei.src = "img/首页-分类.png";
	}
	gouwu.onmouseover = function() {
		gouwu.src = "img/首页-购物车1.png";
	}
	gouwu.onmouseout = function() {
		gouwu.src = "img/首页-购物车.png";
	}
	my.onmouseover = function() {
		my.src = "img/首页-我的1.png";
	}
	my.onmouseout = function() {
		my.src = "img/首页-我的.png";
	}
})