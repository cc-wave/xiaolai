$(function() {
	//蒙版
	var show = 0;
	$("header a").click(function(){
		//用三元运算符判断是否添加蒙版
		document.getElementById('mengban').style.display = ++show % 2 == 1 ? 'block' : 'none';
	})
	$("#closemodel").click(function(){
		document.getElementById('mengban').style.display = ++show % 2 == 1 ? 'block' : 'none';
	})
	$(".model-content .close").click(function(){
		$("#mengban").hide()
	})
	//折叠面板
	$(".p2").click(function() {
		$(this).find("ul").toggle();
	})
	//鼠标悬停
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
})