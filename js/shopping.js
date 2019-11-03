$(function() {
	//通过Ajax显示列表数据
	$.ajax({
		url: "json/shopping.json",
		type: "get",
		dataType: "json",
		async: true,

		success: function(data) {
			for(var i = 0; i < data.length; i++) {
				$("body main").append("<div class='main'><div class='c'><h4><input type='checkbox'/>" + data[i].name +
					"</h4></div><div class='img'><img src=" + data[i].img +
					"/><ul><li><a href='detial.html'>名称：" + data[i].name +
					"</a></li><li><a href='detial.html'>简介：" + data[i].text1 +
					"</a></li><li><a href='detial.html'>定价：<small>" + data[i].price +
					"</small></a></li><li><a href='#'><img src=" + data[i].quxiao + "/></a></li></ul></div>" +
					"<div class='f'>小计：<span>" + data[i].price +
					"</span><div><button class='btn btn-default'><img src=" + data[i].jian +
					"/></button><input type='' id='' value='1' /><button class='btn btn-default'><img src=" +
					data[i].add + "/></button></div></div>")
			}
		
		//点击"x"时将整个板块移除或隐藏，并重新计算金额
		$(".img ul img").click(function() {
			$(this).parents(".main").remove();
			jine()//金额改变
		})
		
		var count;//点击数量变量
		var num;//物品数量变量
		var price;//单价变量
		//点击减时文本框的数量改变(最小为0),数量乘以单价结果显示在小计上
		$(".f div button:nth-child(1)").click(function() {
			count = $(this).next().val();			//获取buttond的下一项表单的值
        	count--;
        	if (count <= 1) {							//判断不能为负数
        	    count = 1;
       		}
        	$(this).next().val(parseInt(count));	//数量加1
       		price=0;//获取单价
price= $(this).parents(".main").children(".img").children("ul").children("li").children("a").children("small").text().slice(1,-3);
       		num= $(this).next().val();
       		$(this).parents(".f").children("span").text("￥" + num*price + ".00");
        	jine(); 
		})
		
		//点击加号时文本框的数量改变(最小为0),数量乘以单价结果显示在小计上
		$(".f div button:nth-child(3)").click(function() {
			count = $(this).prev().val(); 		    //获取当前数量表单中的值
       		$(this).prev().val(parseInt(count) + 1);	//数量加1
			price=0;//获取单价
price= $(this).parents(".main").children(".img").children("ul").children("li").children("a").children("small").text().slice(1,-3);
       		num= $(this).prev().val();
       		$(this).parents(".f").children("span").text("￥" + num*price + ".00");
        	jine(); 
		})
		
		//包装一个函数进行金额变换的调用
		function jine(money){
			var money = 0; //判断复选框是否选中
			for(var i = 0; i < $(".main").length; i++) {
				if($(".main input[type='checkbox']:eq(" + i + ")").is(":checked")) {
					var $index = $(".main input[type='checkbox']:eq(" + i + ")").parents(".main").index(); //获取父级的索引
					var price = $(".f span:eq(" + $index + ")").text().slice(1,-3);
					money += parseInt(price);
				}
			}
			$(".moneyz").text("￥" + money + ".00");
		}

		//点击check时计算金额
		$(".main input").change(function() {
			jine();
		})
		//总计金额
		$("footer input").click(function() {
			var money = 0; //判断全选全不选
			//循环使金额改变结合点击check时计算金额
			for(var i = 0; i < $(".main").length; i++) {
				if($("footer input[type='checkbox']").is(":checked")) {
					//把每一个checked选项选中
					$(".main input[type='checkbox']:eq(" + i + ")").prop("checked", true)
					//获取父级的索引
					var $index = $(".main input[type='checkbox']:eq(" + i + ")").parents(".main").index(); 
					//找到当前索引的文本
					var price = $(".f span:eq(" + $index + ")").text().slice(1,-3);
					money += parseInt(price);
				}
				else {
					$(".main input").prop("checked", false);
					money = 0;
				}
			}
			$(".moneyz").text("￥" + money + ".00");
		})
		
		//点击结算
		$("footer button").click(function(){
			//清空上一次的订单信息
       		$(".modal-body").children("div").remove()
    		//建立表格
       		var table="";
			var tbheader="";
			var tbody="";
			var tbfooter="";
			var id="";
			tbheader='<div><table width="280px" border="1"><thead><th>商品编号</th><th>单价</th><th>订购数量</th><th>小计</th></thead><tbody>';
			for(var i = 0; i < $(".main").length; i++) {
				if($(".main input[type='checkbox']:eq(" + i + ")").is(":checked")) {
					var index1 = $(".main input[type='checkbox']:eq(" + i + ")").parents(".main").index(); //获取父级的索引
					var total = $(".f span:eq(" + index1 + ")").text().slice(1,-3);//获取小计
				 	var count=$(".f input:eq(" + index1 + ")").val();//获取数量
					var price=data[i].price;//获取单价
					var name=data[i].name;//获取商品名称
					id=data[i].id;//获取商品编号
					tbody += '<tr><td>' + id+'</td><td>' + price + '</td><td>' + count + '</td><td>' + total+'</td></tr>'
				}
			}
			if(id==false)
			{
				$("#mymodal .btn").attr("disabled","true")
			}
			else
			{
				$("#mymodal .btn").removeAttr("disabled")
			}
			var sum = $(".moneyz").text();
       		tbfooter+= "</tbody></table><br>总金额："+sum+"</div>";
       		table=tbheader+tbody+tbfooter;
       		$(".modal-body").append(table)
		})
		
	}
	})
})