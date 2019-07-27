/* Bootstrap Override JS */

/* XDS Analytics */
 var _paq = _paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['trackAllContentImpressions']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', window.location.hostname]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
/* End XDS Anayltics */

$(function() {
  $(".search").keyup(function () {
    var searchTerm = $(".search").val();
    var listItem = $('.results .category-list').children('.item');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
    
  $(".results .category-list .item").not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
  });

  $(".results .category-list .item:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $('.results .category-list .item[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
      });

    $(function () {
      $('[data-toggle="popover"]').popover()
    });
});

$(document).on('click','.yamm .dropdown-menu',function(e) {
  if( $(e.target).is('a') ) {
      $(this).collapse('hide');
  }
});

//Add background overlay for mobile menu and close out menu by clicking/tapping overlay background
$(function() {
  $('.navbar-toggle').click(function() {
    $('.overlay-mask-modal').addClass('overlay-mask-modal-visible');
  });
});
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
        if ($('.collapsed').length) {
        $('.overlay-mask-modal').removeClass('overlay-mask-modal-visible');
      };
      $('.overlay-mask-modal').click(function() {
        $('.navbar-toggle').addClass('collapsed');
        $('.navbar-collapse').removeClass('in');
      });
    });
});
$(document).ready(function() {
  $('.pagination li a, .breadcrumb li a').click(function(){
     $(this).addClass('current-pagination');
  });
  $('.pagination li a, .breadcrumb li a').blur(function() {
    if($(this).hasClass('current-pagination')) {
       $(this).removeClass('current-pagination');
    }
  });
});

$(function() {
  if ($("li#mega-menu-item-1856").hasClass('mega-current-menu-parent')) {
    $('li.mega-current-menu-parent').addClass('mega-toggle-on');
    $('li#mega-menu-item-1856').addClass('mega-current-menu-item');
  }
  if ($(".pattern-side-nav li, .pattern-side-nav li.mega-current-menu-item > a.mega-menu-link").hasClass('mega-current-menu-parent')) {
    $('li.mega-current-menu-parent').addClass('mega-toggle-on');
    $('li#mega-menu-item-1856').addClass('mega-current-menu-item');
  }
  if ($(".pattern-side-nav li").hasClass('mega-current-menu-item')) {
    $('li#mega-menu-item-1856').addClass('mega-current-menu-item');
  }
});