 $(function(){
 	$('.header_ul_li1').click(function(){
 		$(this).css({"background":"rgba(255,255,255,.6)","color": "#fff"})
 		$('.header_ul_li2').css({"background":"rgba(255,255,255,.4)","color": "rgba(255,255,255,.6)"})
 	})
 	$('.header_ul_li2').click(function(){
 		$(this).css({"background":"rgba(255,255,255,.6)","color": "#fff"})
 		$('.header_ul_li1').css({"background":"rgba(255,255,255,.4)","color": "rgba(255,255,255,.6)"})
 	})
 	var swiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
		scrollbarHide : false,
		scrollbarDraggable : true,
		spaceBetween:30,
		onSlideChangeStart: function(swiper){
			var index = swiper.activeIndex;
			$("#header_nav").find("span").removeClass("nav_span");
			$("#header_nav").find("span").eq(index).addClass("nav_span");
		}
  	})
	$('#header_nav>span').click(function(){
		var index = $(this).index();
		//alert(index);
		$("#header_nav").find("span").removeClass("nav_span");
		$(this).addClass("nav_span");
		swiper.slideTo(index,1000);
	})
	$("#footer").load('footer.html',function(){
		
	})
})
$(function(){
	$.get("js/index.json",function(e){
			//console.info(e)
			var arr=e.data;
			//console.info(arr)
			$.each(arr, function(m,n) {
				//console.info(n.src)	
				var dl1="<dl class='slide1_dl'>";
				var  dt1="<dt><img src="+n.src+"></dt>";
				dl1 += dt1;
			    var dd1="<dd>"+n.name+"</dd>";
			   	dl1+=dd1;
				dl1+="</dl>";
				$(".slide1").append(dl1);
				//console.info(dl1);
			});
	});
})
$(function(){
			$.get("js/index.json",function(i){
			//console.info(e)
			var arr=i.data2;
			//console.info(arr)
			$.each(arr, function(o,c) {
				//console.info(n.src)	
				var dl2="<dl class='slide2_dl2'>";
				var  dt2="<dt><img src="+c.src+"></dt>";
				dl2 += dt2;
			    var dd2="<dd>"+c.name+"</dd>";
			   	dl2+=dd2;
				dl2+="</dl>";
				$(".slide2").append(dl2);
				//console.info(dl2);
			});
	});
})
