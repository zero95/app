$(function(){
			var swiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
			scrollbarHide : false,
			scrollbarDraggable : true,
			spaceBetween:30,
			onSlideChangeStart: function(swiper){
				var index = swiper.activeIndex;
				$(".tab").find("li").removeClass("tab-nav");
				$(".tab").find("li").eq(index).addClass("tab-nav");
			}
	  	})
			$('.tab>li').click(function(){
				var index = $(this).index();
				//alert(index);
				$(".tab").find("li").removeClass("tab-nav");
				$(this).find("li").eq(index).addClass("tab-nav");
				swiper.slideTo(index,1000);
			})
			$("#footer").load('personage.html',function(){
		})
})
	