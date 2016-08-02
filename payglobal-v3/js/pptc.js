(function ($) {
	$(document).ready(function(){
		$('.privacypolicyspan').click(function(){
			$('.pptc.provacypolicy')[0].style.display="flex";
		});
		$('.termsconditionsspan').click(function(){
			$('.pptc.termsconditions')[0].style.display="flex";
		});
		$('.closepptc').click(function(){
			$(this).parents('.pptc')[0].style.display="none";
		});
		$('.limg img').click(function(){
			$('.fullimg').html('');
			var heightImg = $(this).parents('.pptc')[0].clientHeight;
			var widthImg = $(this).parents('.pptc')[0].clientWidth;
			$('.fullimg').html('<img class="cur-img" src="'+this.src+'" width="'+widthImg+'">');
			$('.fullimg').css({"width":widthImg+"px","height":"auto","margin-top":"0px"});
			$('.fullimg')[0].style.display="block";
		});
		$('.fullimg').click(function(){
			this.style.display="none";
		});
		$("a.youtube").YouTubePopup({ hideTitleBar: true });
	})
})(jQuery);