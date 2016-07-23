$(function(){
	var setList = $('.listCover'),
	setItem = $('.listItem'),
	setReplace = $('.selfRep'),
	listBaseWidth = 130,
	thumbOpacity = 0.8,
	expandHeight = 300,
	expandFadeTime = 300,
	expandEasing = 'linear',
	switchFadeTime = 1000,
	switchEasing = 'linear';

	setList.each(function(){
		var targetObj = $(this);

		var findItem = targetObj.find(setItem),
		findElm = targetObj.find(setReplace);

		// リストアイテムクリック
		findItem.click(function(){
			if($(this).hasClass('active')){
				closeExpandActive = targetObj.find('.expandField');
				closeExpandActive.stop().animate({height:'0',opacity:'0'},expandFadeTime,expandEasing,function(){
					closeExpandActive.remove();
				});
				findItem.removeClass('active');
			} else {
				var setExpand = $('.expandField'),
				findExpand = targetObj.find(setExpand),
				thisElm = $(this).find(setReplace).html();

				// 展開ボックス制御
				if(0 < findExpand.size()){
					findExpand.empty().html(thisElm);
					$(this).after(findExpand).next().append('<span class="btnPrev"></span><span class="btnNext"></span><span class="btnClose"></span>');
					var setReplaceInner = $('.selfRepInner'),
					findInner = targetObj.find(setReplaceInner);
					findInner.css({opacity:'0'}).stop().animate({opacity:'1'},switchFadeTime,switchEasing);
				} else {
					$(this).after('<li class="expandField">' + thisElm + '</li>').next().css({height:'0', opacity:'0'}).stop().animate({height:expandHeight, opacity:'1'},expandFadeTime,expandEasing).append('<span class="btnPrev"></span><span class="btnNext"></span><span class="btnClose"></span>');
				}

				// スクロール位置調整
				var thisOffset = $(this).find('img').offset();
				$('html,body').animate({scrollTop:(thisOffset.top-10)},200,'linear');

				// 操作ボタン動作
				function switchNext(){
					var setActiveN = targetObj.find('.active');
					setActiveN.each(function(){
						var listLenghN = findItem.length,
						listIndexN = findItem.index(this),
						listCountN = listIndexN+1,
						findItemFirst = findItem.first();

						if(listLenghN == listCountN){
							findItemFirst.click();
						} else {
							$(this).next().next().click();
						}
					});
				}
				function switchPrev(){
					var setActiveP = targetObj.find('.active');
					setActiveP.each(function(){
						var listLenghP = findItem.length,
						listIndexP = findItem.index(this),
						listCountP = listIndexP+1,
						findItemLast = findItem.last();

						if(1 == listCountP){
							findItemLast.click();
						} else {
							$(this).prev().click();
						}
					});
				}
				function switchHide(){
					closeExpand = targetObj.find('.expandField');
					closeExpand.stop().animate({height:'0',opacity:'0'},expandFadeTime,expandEasing,function(){
						closeExpand.remove();
					});
					findItem.removeClass('active');
				}

				$(this).addClass('active').siblings().removeClass('active');

				var btnPrev = targetObj.find('.btnPrev'),btnNext = targetObj.find('.btnNext'),btnClose = targetObj.find('.btnClose');
				btnPrev.click(function(){switchPrev();});
				btnNext.click(function(){switchNext();});
				btnClose.click(function(){switchHide();});

			}
		});

		// サムネイルロールオーバー
		var agent = navigator.userAgent;
		if(!(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1)){
			findItem.hover(function(){
				$(this).stop().animate({opacity:thumbOpacity},200);
			},function(){
				$(this).stop().animate({opacity:'1'},200);
			});
		}

		// リキッド操作
		function listAdjust(){
			var ulWrap = targetObj.width(),
			ulNum = Math.floor(ulWrap / listBaseWidth),
			liFixed = Math.floor(ulWrap / ulNum);
			findItem.css({width: (liFixed)});
		}
		$(window).resize(function(){listAdjust();}).resize();
		$(window).load(function(){setTimeout(function(){listAdjust();},200);}); // for IE8
	});
});