$(function(){
	$('.top_a2').click(function(){
		$('.top_a1').css({"background": "rgba(255,255,255,.4)","color": "rgba(255,255,255,.6)"})
		$('.top_a2').css({"background": "rgba(255,255,255,.6)","color": "#fff"})
	})
	$('.top_a1').click(function(){
		$('.top_a2').css({"background": "rgba(255,255,255,.4)","color": "rgba(255,255,255,.6)"})
		$('.top_a1').css({"background": "rgba(255,255,255,.6)","color": "#fff"})
	})
	$('#footer').load('footer.html',function(){
		
	})
})