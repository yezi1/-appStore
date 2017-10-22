$(function() {
	
	/***
	 * 数据异步加载
	 */
	$.ajax({
		type: "get",
		url: "data/index.json",
		dataType: "json",
		success: function(data) {
			var searchHtml = selectHtml = shufflingHtml = thematicHtml = dailyHtml = socializeHtml = musicHtml = appletHtml = "";
			$.each(data, function(index, data) {
				if(index == "search-layer") {
					$.each(data, function(index, data) {
						searchHtml += '<li><a href="#">' + data["text"] + "</a></li>"
					})
				}
				if(index == "select") {
					$.each(data, function(index, data) {
						selectHtml += "<a href=" + data["url"] + ' class="evaluation flex-css">' + '<section class="evaluation-img">' + '<img src="' + data["img"] + '"/>' + "</section>" + '<section class="evaluation-content">' + "<h2>" + data["title"] + "</h2>" + "<p>" + data["describe"] + "</p>" + "</section>" + '<section class="evaluation-number">' + "<h2>" + data["scoring"] + "分</h2>" + "</section>" + "</a>"
					})
				}
				if(index == "shuffling") {
					$.each(data, function(index, data) {
						shufflingHtml += '<div class="swiper-slide shuffling" style="background: url(' + data["src"] + ')">' + '<a href="' + data["url"] + '">' + "<a/>" + "</div>"
					})
				}
				if(index == "thematicData") {
					$.each(data, function(index, data) {
						thematicHtml += '<div class="swiper-slide">' + '<a href="' + data["url"] + '">' + '<img src="img/load.gif" data-src="' + data["src"] + '"/>' + "</a>" + "</div>"
					})
				}
				if(index == "dailyData") {
					$.each(data, function(index, data) {
						dailyHtml += '<a href="' + data["url"] + '" class="swiper-slide">' + '<img src="img/load.gif" data-src="' + data["src"] + '" alt="应用" />' + "<span>" + data["text"] + "</span>" + "</a>"
					})
				}
				if(index == "socializeData") {
					$.each(data, function(index, data) {
						socializeHtml += '<a href="' + data["url"] + '" class="swiper-slide">' + '<img src="img/load.gif" data-src="' + data["src"] + '" alt="应用" />' + "<span>" + data["text"] + "</span>" + "</a>"
					})
				}
				if(index == "musicData") {
					$.each(data, function(index, data) {
						musicHtml += '<a href="' + data["url"] + '" class="swiper-slide">' + '<img src="img/load.gif" data-src="' + data["src"] + '" alt="应用" />' + "<span>" + data["text"] + "</span>" + "</a>"
					})
				}
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
	});	
	
});