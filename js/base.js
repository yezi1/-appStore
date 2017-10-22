$(function() {
	
	/***
	 * 顶部菜单
	 */
	var menuStatus = true;
	$(".catalogue").on("click", function() {
		menuStatus = !menuStatus;
		if(menuStatus) {
			$(".header-menu").removeClass("header-menu-on");
			$(".PopUp-layer").removeClass("PopUp-layer-on");
		} else {
			$(".header-menu").addClass("header-menu-on");
			$(".PopUp-layer").addClass("PopUp-layer-on");
		}
	});
	
	$(".menu-content,.PopUp-layer,.search").on("click", function() {
		menuStatus = !menuStatus;
		$(".header-menu").removeClass("header-menu-on");
		$(".PopUp-layer").removeClass("PopUp-layer-on");
	});
	
	/***
	 * 搜索框
	 */
	$(".search").on("click", function() {
		$(".public-header-2").addClass("public-header-on");
		$(".search-layer").addClass("search-layer-on");
		
		//移动端自动唤起键盘(QQ浏览器需手动交互才能触发)
		var inputSetTime = setTimeout(function () {
			$(".header-input input").trigger('focus');
		},500);
	});
	
	$(".return-goto").on("click", function() {
		$(".public-header-2").removeClass("public-header-on");
		$(".search-layer").removeClass("search-layer-on");
		
		//返回上一页清空内容
		$(".header-input input").val("");		
	});
	
	//点击热门搜索替换文本框内容
	$(".search-layer").on("click", "ul li a", function() {
		$(".header-input input").val($(this).text());
	});

	/***
	 * 可视区域加载图片
	 */
	$(window).scroll(function() {
		$("img").each(function(index, el) {
			var imgTop = $(this).offset().top - $(document).scrollTop() - $(window).height();
			if(imgTop < 0) {
				$(this).attr("src", $(this).attr("data-src"));
			}
		})
	})	
	
});
