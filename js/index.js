$(function() {
	
	/***
	 * 页面JSON数据
	 */
	$.ajax({
		type: "get",
		url: "data/index.json",
		dataType: "json",
		success: function(data) {
			var selectHtml = shufflingHtml = thematicHtml = dailyHtml = socializeHtml = musicHtml = appletHtml = searchHtml = "";
			$.each(data, function(index, data) {
				
				/***
				 * 热门搜索数据
				 */				
				if(index == "search-layer") {
					$.each(data, function(index, data) {
						searchHtml += '<li><a href="#">' + data["text"] + "</a></li>"
					})
				}				
				
				/***
				 * 新鲜评测
				 */
				if(index == "select") {
					$.each(data, function(index, data) {
						selectHtml += "<a href=" + data["url"] + ' class="evaluation flex-css">' + '<section class="evaluation-img">' + '<img src="' + data["img"] + '"/>' + "</section>" + '<section class="evaluation-content">' + "<h2>" + data["title"] + "</h2>" + "<p>" + data["describe"] + "</p>" + "</section>" + '<section class="evaluation-number">' + "<h2>" + data["scoring"] + "分</h2>" + "</section>" + "</a>"
					})
				}
				
				/***
				 * 轮播
				 */
				if(index == "shuffling") {
					$.each(data, function(index, data) {
						shufflingHtml += '<div class="swiper-slide shuffling" style="background: url(' + data["src"] + ')">' + '<a href="' + data["url"] + '">' + "<a/>" + "</div>"
					})
				}
				
				/***
				 * 专题广告
				 */
				if(index == "thematicData") {
					$.each(data, function(index, data) {
						thematicHtml += '<div class="swiper-slide">' + '<a href="' + data["url"] + '">' + '<img src="img/load.gif" data-src="' + data["src"] + '"/>' + "</a>" + "</div>"
					})
				}
				
				/***
				 * 每日精选
				 */
				if(index == "dailyData") {
					$.each(data, function(index, data) {
						dailyHtml += '<a href="' + data["url"] + '" class="swiper-slide">' + '<img src="img/load.gif" data-src="' + data["src"] + '" alt="应用" />' + "<span>" + data["text"] + "</span>" + "</a>"
					})
				}
				
				/***
				 * 社交
				 */
				if(index == "socializeData") {
					$.each(data, function(index, data) {
						socializeHtml += '<a href="' + data["url"] + '" class="swiper-slide">' + '<img src="img/load.gif" data-src="' + data["src"] + '" alt="应用" />' + "<span>" + data["text"] + "</span>" + "</a>"
					})
				}
				
				/**
				 * 音乐
				 */
				if(index == "musicData") {
					$.each(data, function(index, data) {
						musicHtml += '<a href="' + data["url"] + '" class="swiper-slide">' + '<img src="img/load.gif" data-src="' + data["src"] + '" alt="应用" />' + "<span>" + data["text"] + "</span>" + "</a>"
					})
				}
				
				/***
				 * 小程序
				 */
				if(index == "appletData") {
					$.each(data, function(index, data) {
						appletHtml += '<a href="' + data["url"] + '" class="swiper-slide">' + '<img src="img/load.gif" data-src="' + data["src"] + '" alt="应用" />' + "<span>" + data["text"] + "</span>" + "</a>"
					})
				}
			});
			
			$(".search-layer ul").append(searchHtml);
			$(".daily .content").append(selectHtml);
			$(".shufflingBox .swiper-wrapper").append(shufflingHtml);
			$(".thematicBox .swiper-wrapper").append(thematicHtml);
			$(".dailyBox").append(dailyHtml);
			$(".socializeBox").append(socializeHtml);
			$(".musicBox").append(musicHtml);
			$(".appletBox").append(appletHtml)
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log("XMLHttpRequest 对象:" + XMLHttpRequest.status);
			console.log("错误信息:" + XMLHttpRequest.readyState);
			console.log("（可选）捕获的错误对象:" + textStatus)
		}
	})	
	
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
	
	
	$('.header-menu .menu-content,.module>a').on('click', function() {
		
		var _thisClass = $(this).attr('class');
		
		function indexHide() {
			$('body').addClass('mescrollHide');
		}
			
		function evaluating() {
			
		}
		
		function leaderboard() {
			
		}
		
		function category() {
			$('.appClass .level-1,.public-header-2').removeClass('pageRight').addClass('search-layer-on');
		}
		
		switch(_thisClass) {
			case 'menu-content list-1':
				$('.pageShow').addClass('pageRight');
				$('body').removeClass('mescrollHide');
				break;
			case 'menu-content list-2':
				indexHide();
				break;
			case 'menu-content list-3':
				indexHide();
				break;
			case 'menu-content list-4':
				indexHide();
				break;
			case 'menu-content list-5':
				indexHide();
				category();
				break;
			case 'review':
				indexHide();
				
				break;
			case 'project':
				indexHide();
				
				break;
			case 'leaderboard':
				indexHide();
				
				break;
			case 'category':
				indexHide();
				category();
				break;	
		}
	});
	
	function indexShow() {
		$('body').removeClass('mescrollHide');
	}	
	
	$('.public-header-2 .return-goto').on('click', function() {
		$('.public-header-2,.pageShow2').removeClass('search-layer-on').addClass('pageRight');
		indexShow();
	});
	
	/***
	 * 搜索框
	 */
	$(".search").on("click", function() {
		$(".public-header-1").addClass("public-header-on");
		$(".search-layer").addClass("search-layer-on");
		
		//移动端自动唤起键盘(QQ浏览器需手动交互才能触发)
		var inputSetTime = setTimeout(function () {
			$(".header-input input").trigger('focus');
		},500);
	});
	
	$(".return-goto").on("click", function() {
		$(".public-header-1").removeClass("public-header-on");
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
