$(document).ready(function () {

  // var popupHtml = '';
  // $("body").append(popupHtml);

  $("#ViewMyWork").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#topNav").offset().top
      },
      'slow');
  });

  $("#navProjects").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top
      },
      'slow');
  });
  $("#navAbout").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#aboutMe").offset().top
      },
      'slow');
  });
  $("#navContact").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#contact").offset().top
      },
      'slow');
  });

  $('.projItem').click(function (event) {
    event.preventDefault();
    var e = $(this);
    var title = e.data('title');
    var tech = e.data('tech');
    var about = e.data('about');
    var url = e.data('url');

    $("#myModal").modal("show");
    $('.projTitleModal').html(title);
    $('.projTechModal').html(tech);
    $('.projAboutModal').html(about);
    $('#projVisitModal').attr("href", url);
  });

  //Contact handler
  $('#contact-form').submit(function (e) {
    e.preventDefault();
    var nameVal = $("#contact-form").find('input[name="name"]').val();
    var emailVal = $("#contact-form").find('input[name="email"]').val();
    var messageVal = $("#contact-form").find('input[name="message"]').val();

    $.ajax({
      url: "https://jumprock.co/mail/JudeEmail",
      method: "POST",
      data: {
        name: nameVal,
        email: emailVal,
        message: messageVal
      },
      dataType: "json"
    }).done(function (response) {
      // $('#success').addClass('expand');
      $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
      $('#emailGreeting').hide();
      $('#emailSuccess').show();
      $('#emailSuccess').fadeOut(3000, function () {
        $('#emailSuccess').hide();
      });
    });
  });


  // $('#contact-form').submit(function (e) {
  //   e.preventDefault();

  //   $.ajax({
  //     url: "https://formspree.io/cjprestia@gmail.com",
  //     method: "POST",
  //     data: {
  //       message: $('form').serialize()
  //     },
  //     dataType: "json"
  //   }).done(function (response) {
  //     $('#success').addClass('expand');
  //     $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
  //   });
  // });


  function getCookie(cookiename) {
    var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
    return decodeURIComponent(
      !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : ""
    );
  }


});