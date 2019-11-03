$(function() {
	//轮播图
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
	
	//通过Ajax显示列表数据
	$.ajax({
		url: "json/hot.json",
		type: "get",
		dataType: "json",
		async: true,

		success: function(data) {
			for(var i = 0; i < data.length; i++) {
				$("body nav").append("<div class='img'><img src=" + data[i].img +
					"/><div><p><a href='detial.html'>" + data[i].name +
					"</a></p><h4><a href='detial.html'>" + data[i].price +
					"</a></h4><small><a href='detial.html'>" + data[i].speak +
					"</a></small></div></div>"
				)
			}
		}
	})
	
	//底部导航栏的鼠标移入移出
	var shou = document.getElementById("shouye");
	var fenlei = document.getElementById("fenlei");
	var gouwu = document.getElementById("gouwu");
	var my = document.getElementById("my");
	shou.onmouseover = function() {
		shou.src = "img/首页-首页替换.png";
	}
	shou.onmouseout = function() {
		shou.src = "img/首页-首页.png";
	}
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