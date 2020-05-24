/*
 * DOM结构加载完触发执行（可以获取到页面中的DOM元素）
 * 形成一个闭包 
 */
$(function () {
	
	let $container = $('.lunbo-wrapper'),
		$slideList = $container.find('.slide'),
		$paginationList = $container.find('.pagination>li');
	$('.lunbo').css('background-color',`${$slideList.eq(0).attr('data-color')}`);
	$('#epet-type2').css('background-color',`${$slideList.eq(0).attr('data-color')}`);
	$('#epet-type2>a').css('color',`#fff`);
	let step = 0,
		prev = 0,
		interval = 1500,
		autoTimer = null,
		len = $slideList.length;

	// CHANGE实现切换
	function change() {
		let $cur = $slideList.eq(step),
			$pre = $slideList.eq(prev);
		$cur.css('zIndex', 1);
		$pre.css('zIndex', 0);
		$('.lunbo').css('background-color',`${$cur.attr('data-color')}`);
		$('.flag').css('background-color',`${$cur.attr('data-color')}`);
		
		$cur.css({
			transitionDuration: '.3s',
			opacity: 1
		}).one('transitionend', () => {
			$pre.css({
				transitionDuration: '0s',
				opacity: 0
			});
		});

		// 焦点自动对齐
		// $paginationList.eq(step).addClass('active')
		// 	.siblings().removeClass('active');
		$paginationList.each((index, item) => {
			if (index === step) {
				$(item).addClass('active');
				return;
			}
			$(item).removeClass('active');
		});
	}

	// AUTOMOVE自动切换
	function autoMove() {
		prev = step;
		step++;
		step > (len - 1) ? step = 0 : null;
		change();
	}
	
	// 加载页面开始自动切换
	autoTimer = setInterval(autoMove, interval);

	// 鼠标进入和离开控制自动的关闭和开启
	$('.lunbo-box').on('mouseenter', () => clearInterval(autoTimer))
		.on('mouseleave', () => autoTimer = setInterval(autoMove, interval));

	// 点击焦点切换
	$paginationList.on('mousemove', function () {
		//  $(this).index() 当前点击这一项的索引
		let index = $(this).index();
		if (index === step) return;
		prev = step;
		step = index;
		change();
	});
});