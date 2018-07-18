// Swiper
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    speed: 600,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
 });

// Accordion
$('.item__title').on('click', function(){
	$('.item__text').slideUp(400);
	$('.item__title').removeClass('active');
	$(this).addClass('active').next('.item__text').slideToggle(400);
});

// Anchor
$('#cta').on('click', function(e){
	e.preventDefault();
	var t = $(this).attr('href'),
		  i = $(t).offset().top;
	$('html, body').animate({ scrollTop: i }, 500);
});

// Init actions
$(document).ready(function(){
  $('.item__title.active').next('.item__text').slideToggle(400);
  $('.mask-phone').mask('(00) 000000009');
});

// Validation
$('form[name="formContact"]').on('submit', function() {
  var formName = this;
      validationEmail = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/,
      valErrors = 0;

  $('[data-validation]', formName).each(function(){
    var formField = $(this),
        formField_type = formField.attr('data-validation');

    // Text validation
    if (formField_type == 'text') {
      if (formField.val() == "" || formField.val() == " " || formField.val().length < 5) {
        formField.addClass('invalid').next('span').css('display', 'block');
        valErrors = (valErrors + 1);
      }
      else {
        formField.removeClass('invalid').next('span').css('display', 'none');
      }
    }
 
    // Email validation
    if (formField_type == 'email') {
      if (formField.val() == "" || formField.val() == " " || !validationEmail.exec(formField.val())) {
        formField.addClass('invalid').next('span').css('display', 'block');
         valErrors = (valErrors + 1);
      }
      else {
        formField.removeClass('invalid').next('span').css('display', 'none');
      }
    }
  });

  // Return
  if (valErrors > 0) {
    return false;
  }
  else {
    return true;
  }
});