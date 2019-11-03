$(function() {
	//js代码：收藏和加入购物车图片切换
	var cang = document.getElementById("cang");
	var cang1 = 0;
	var shopping = document.getElementById("shopping");
	var shopping1 = 0;
	cang.onclick = function() {
		if(cang1 == 0) {
			cang1++;
			cang.src = "img/详情-收藏1.png";
		} else {
			cang1--;
			cang.src = "img/详情-收藏.png";
		}
	}
	shopping.onclick = function() {
		if(shopping1 == 0) {
			shopping1++;
			shopping.src = "img/详情-购物车1.png";
		} else {
			shopping1--;
			shopping.src = "img/详情-购物车.png";
		}
	}
	$(function() {
		$("main ul li a").click(function() {
			//点击不同的标签页下划线也跟着变化
			$(this).parent().addClass("li1").siblings().removeClass("li1");
		})
	})
})