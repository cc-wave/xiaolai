$(function() {
	//实现显示精简与显示全部的jq代码
	var $type = $("main ul li:gt(4):not(:last)");
	$type.hide();
	$(".btn a").click(function() {
		if($type.is(":visible")) {
			$type.hide();
			$(this).text("显示全部");
		} else {
			$type.show();
			$(this).text("显示精简");
		}
	})
	//js代码底部导航栏的悬浮状态
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