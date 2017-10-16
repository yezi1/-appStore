$(function () {
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
});
