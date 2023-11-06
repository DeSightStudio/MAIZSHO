jQuery(document).ready(function() {
	
	setTimeout(function(){ 
		
		jQuery('#RecoverPassword').on('click', function(event) {
			event.preventDefault(); 
			jQuery("#CustomerLoginForm").addClass("hide");
			jQuery("#ResetPassword").removeClass("hide");
		});
		
		jQuery('#HideRecoverPasswordLink').on('click', function(event) {
			event.preventDefault(); 
			jQuery("#CustomerLoginForm").removeClass("hide");
			jQuery("#ResetPassword").addClass("hide");
		});
		  
		  jQuery('.ProductForm__Label:contains("Menge"), .ProductForm__QuantitySelector').wrapAll('<div class="wrapped" />');
		  
		  if (jQuery(".open-pop-up").length > 0){
			jQuery('.open-pop-up').magnificPopup({
			  type:'inline',
			  midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
			  removalDelay: 500, //delay removal by X to allow out-animation
			  callbacks: {
			  beforeOpen: function() {
				 this.st.mainClass = this.st.el.attr('data-effect');
			  },
			  open: function() {
				/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
				screen.orientation.lock('landscape');
				}*/
				$.magnificPopup.instance.close = function() {
				// Do whatever else you need to do here
			
				// Call the original close method to close the popup
				$.magnificPopup.proto.close.call(this);
				};
			  }
			  }
			});
		  }
		  
		  setTimeout(function(){  
			  
			  /*jQuery('.open-pop-up').magnificPopup({
				  type:'inline',
				  removalDelay: 500, //delay removal by X to allow out-animation
				  callbacks: {
					  beforeOpen: function() {
						  this.st.mainClass = this.st.el.attr('data-effect');
					  }
				  }
			  });*/
		  
		  }, 100);
		
	}, 100);
	
});