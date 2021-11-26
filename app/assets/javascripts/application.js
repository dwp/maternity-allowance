/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  $('ul.dwp-sub-navigation__list li a').on('click', function(){
          $('ul.dwp-sub-navigation__list li a').removeAttr('aria-current');
          $(this).attr('aria-current', 'page');
  });

  window.GOVUKFrontend.initAll()
})
