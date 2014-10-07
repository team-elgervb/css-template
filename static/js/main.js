document.addEventListener('DOMContentLoaded', function () {

	// make menu smaller when scrolling
	window.onscroll = function(){
		var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	  if (scrollTop){
	    document.querySelector('.main-navigation').classList.add('small');
	  }
	  else{
	    document.querySelector('.main-navigation').classList.remove('small');
	  }
	}
	
});
