$(function () {
	
	/***
	 * 头部菜单
	 */
	var menuStatus = true;
	$('.catalogue').on('click',function () {
		menuStatus = !menuStatus;
		if(menuStatus) {
			$('.header-menu').removeClass('header-menu-on');
			$('.PopUp-layer').removeClass('PopUp-layer-on');
		}else{
			$('.header-menu').addClass('header-menu-on');
			$('.PopUp-layer').addClass('PopUp-layer-on');
		}
	});
	
    $('.menu-content,.PopUp-layer,.search').on('click',function () {
    	menuStatus = !menuStatus;
    	$('.header-menu').removeClass('header-menu-on');
		$('.PopUp-layer').removeClass('PopUp-layer-on');
    });
    
    /***
     * 搜索框
     */
    $('.search').on('click',function () {
    	$('.public-header-2').addClass('public-header-on');
    	$('.search-layer').addClass('search-layer-on');
    });
    
    $('.return-goto').on('click',function () {
    	$('.public-header-2').removeClass('public-header-on');
    	$('.search-layer').removeClass('search-layer-on');
    });
   
    $('.search-layer').on('click','ul li a',function () {
    	$('.header-input input').val($(this).text());
    });
    
    $.ajax({
    	type: 'get',
    	url: 'data/index.json',
    	dataType: 'json',
    	success: function (data) {
    		var searchHtml = selectHtml = shufflingHtml = thematicHtml = dailyHtml = socializeHtml = musicHtml = appletHtml = '';
    		$.each(data, function(index,data) {
    			
    			/***
    			 * 热门搜索
    			 */
    			if(index == 'search-layer'){
	    			$.each(data, function(index,data) {
	    				searchHtml += '<li><a href="#">' + data['text'] + '</a></li>'
	    			});    				
    			}
    			
    			/***
    			 * 新鲜评测
    			 */
    			if(index == 'select') {
    				$.each(data, function(index,data) {
	    				selectHtml += '<a href=' + data['url'] + ' class="evaluation flex-css">' + 
		    							  '<section class="evaluation-img">' +
		    							  	  '<img src=' + data['img'] + '/>' +
		    							  '</section>' + 
		    							  '<section class="evaluation-content">' +
			    							  '<h2>' + data['title'] + '</h2>' +
			    							  '<p>' + data['describe'] + '</p>' +
		    							  '</section>' + 
		    							  '<section class="evaluation-number">' +
		    							  	  '<h2>' + data['scoring'] + '分</h2>' + 
		    							  '</section>' +
	    							  '</a>'
	    			});
    			}
    			
    			/***
    			 * 轮播
    			 */
    			if(index == 'shuffling') {
    				$.each(data, function(index,data) {
    					shufflingHtml += '<div class="swiper-slide shuffling" style="background: url(' + data["src"] + ')">' +
				    					 	'<a href="' + data['url'] + '">' + '<a/>' +
				    					 '</div>'
    				});
    			}
    			
    			/***
    			 * 专题
    			 */
    			if(index == 'thematicData') {
    				$.each(data, function(index,data) {
    					thematicHtml += '<div class="swiper-slide">' + 
	    									'<a href="' + data['url'] + '">' +
	    										'<img src="' + data['src'] + '"/>'+
	    									'</a>'+
    									'</div>'
    				});
    			}
    			
    			/***
    			 * 每日精选
    			 */
    			if(index == 'dailyData') {
    				$.each(data, function(index,data) {
    					dailyHtml += '<a href="' + data['url'] + '" class="swiper-slide">'+
	    								 '<img src="' + data['src'] + '" alt="应用" />'+
	    								 '<span>' + data['text'] + '</span>'+
    								 '</a>'
    				});
    			}
    			
    			/***
    			 * 社交
    			 */
    			if(index == 'socializeData') {
    				$.each(data, function(index,data) {
    					socializeHtml += '<a href="' + data['url'] + '" class="swiper-slide">'+
		    								 '<img src="' + data['src'] + '" alt="应用" />'+
		    								 '<span>' + data['text'] + '</span>'+
	    								 '</a>'
    				});
    			}
    			
    			/***
    			 * 音乐
    			 */
    			if(index == 'musicData') {
    				$.each(data, function(index,data) {
    					musicHtml += '<a href="' + data['url'] + '" class="swiper-slide">'+
	    								 '<img src="' + data['src'] + '" alt="应用" />'+
	    								 '<span>' + data['text'] + '</span>'+
    								 '</a>'
    				});
    			}
    			
    			/***
    			 * 小程序
    			 */
    			if(index == 'appletData') {
    				$.each(data, function(index,data) {
    					appletHtml += '<a href="' + data['url'] + '" class="swiper-slide">'+
	    								  '<img src="' + data['src'] + '" alt="应用" />'+
	    								  '<span>' + data['text'] + '</span>'+
    								  '</a>'
    				});
    			}
    			
    		});
    		
    		$('.search-layer ul').append(searchHtml);
    		$('.daily .content').append(selectHtml);
    		$('.shufflingBox .swiper-wrapper').append(shufflingHtml);
    		$('.thematicBox .swiper-wrapper').append(thematicHtml);
    		$('.dailyBox').append(dailyHtml);
    		$('.socializeBox').append(socializeHtml);
    		$('.musicBox').append(musicHtml);
    		$('.appletBox').append(appletHtml);
    		
    	},
    	error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log('XMLHttpRequest 对象:' + XMLHttpRequest.status);
			console.log('错误信息:' + XMLHttpRequest.readyState);
			console.log('（可选）捕获的错误对象:' + textStatus);
    	}
    });
});
