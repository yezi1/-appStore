$(function () {
	
	/***
	 * 头部菜单
	 */
	var menuStatus = true;
	$('.catalogue').on('click',function () {
		menuStatus = !menuStatus;
		console.log(menuStatus);
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
});
