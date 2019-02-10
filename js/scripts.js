// Header Story
$(function(){
  $("#typing").typed({
    strings: ["English", "Português", "Deutsch", "Español", "Français", "Italiano"],
    typeSpeed: 200,
    loop: true,
  })
})

// twitter js

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
    return t;
}(document, 'script', 'twitter-wjs'));

// google maps
var map;
var position;
var marker;
function initMap() {
  position = {lat: 52.4911267, lng: 13.4351339},

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.4911267, lng: 13.4351339},
    zoom: 18,
    mapTypeId: 'satellite',
  });

  marker = new google.maps.Marker({
    position: position,
    map: map,
  });
}

// document ready functions

$(document).ready(function(){
  // smooth scroll
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
      return false;
    }
  });
  // tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // popover
  $(document).ready(function (){
    $('[data-toggle="popover"]').popover();
  });
  // form button functions
  $('#button_submit').on('click', function() {
    var name = $('.name-box').val();
    var email = $('.email-box').val();
    var comment = $('.message-box').val();
    if ($('.message-box').val() === "") {
      alert('Hey, there\'s no message!');
    } else if ($('.email-box').val() === "") {
      alert('Please inform your email!');
    }
    else {
      alert('Thanks for your message!');
      $('#visible-name').html('Hey ' + name + ', the following message was delivered:').css('font-size', '1em');
      $('#visible-comment').html(comment).css('font-size', '1.5em');
      $('.form-control, .form_count, .form_instruction, .button_contact').hide();
      return false;
    }
  });
  // form character counter
  $('.message-box').on('keyup', function() {
    var charCount = $('.message-box').val().length;
    $('#char-count').html(charCount);
    if(charCount > 150) {
      $('#char-count').css('color', 'gold');
    } else {
      $('#char-count').css('color', '#E5E5E5');
    };
  });
  // work section
  for(var i = 0; i < works.length; i++ ) {
    $('#works_folio').append('\
      <div class="projects projects_thumbs col-sm-12 col-sm-6 col-md-3">\
        <a href="' + works[i].url + '">\
          <img class="img-responsive work_img" src="' + works[i].pic + '">\
          <div class="work_info">\
            <p class="work_title">' + works[i].title + '</p>\
            <p class="work_cat">' + works[i].cat + '</p>\
          </div>\
        </a>\
      </div>\
    ');
  };

  $('.projects_thumbs').mouseenter( function() {
    $('.work_info', this).show();
    $('img', this).css('opacity', '0.2');
  }).mouseleave( function(){
    $('.work_info', this).hide();
    $('img', this).css('opacity', '1');
  });
});
