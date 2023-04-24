/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

var ready = function(callback) {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}

ready(function() {
    var bodyEl = document.body;

    if(bodyEl.classList.contains('template-product')) {

      var el = document.querySelector('.mod-stickybar-cart');

      window.addEventListener('scroll', function() {

        var scrolled = document.scrollingElement.scrollTop;
        var position = el.offsetTop;
        
        if(scrolled > 350) {
          el.classList.add('fade-in');
        } else {
          el.classList.remove('fade-in');
        }
      });
	}
  
  jQuery('.ProductForm__Label:contains("Menge"), .ProductForm__QuantitySelector').wrapAll('<div class="wrapped" />');
  
});

