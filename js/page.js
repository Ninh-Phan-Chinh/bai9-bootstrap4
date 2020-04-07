$(document).ready(function () {

    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()+270);
    });

    $('a').click(function () {
      var link = $(this).attr('href');
      if (link == '#') {
        return false;
      }
      return true;
    })

    $(".btn_home").click(function () {
      $(".btn_homes").toggle(200)
    });
    $(".btn_shop").click(function () {
      $(".two_btn_shop").toggle(200)
    });
    $(".btn_catalog").click(function () {
      $(".btn_catalogs").toggle(200)
    });
    $(".btn_pages").click(function () {
      $(".btn_pagess").toggle(200)
    });
    $(".btn_search").click(function () {
      $(".container_search").show(200)
    });
    $(".delete_screen_search").click(function () {
      $(".container_search").hide(200)
    });
    
    $(".delete_screen_cart").click(function () {
      $(".container_cart").hide(200)
    });
    $(".hover_trending_image").hover(function () {
      $(this).children(".price_trending_image").toggle()
      $(this).find(".Add_to_card").toggle()
    });

    // blog
  $(".btn_cart").click(function () {
      $(".container_cart").show(200)
  });
  // check out
  $(".btn").click(function () {
    $(".btn_down").toggle()
    $(".btn_up").toggle()
    $(".show_order").toggle()
    $(".hide_order").toggle()
});


$(".btn_view").click(function () {
  $(".container_list").hide(200)
  $(".spinner-border").show()
  window.setTimeout( show_view, 1000 ); // 5 seconds
});

function show_view(){
  
  $(".container_gird").show(200)
  $(".spinner-border").hide()
  $(".btn_menu").css("color","#bdbdbd")
  $(".btn_view").css("color","#232323")
};


$(".btn_menu").click(function () {
  $(".container_gird").hide(200)
  $(".spinner-border").show()
  window.setTimeout( show_menu, 1000 ); // 5 seconds
});

function show_menu(){
 
  $(".container_list").show(200)
  $(".spinner-border").hide()
  
  
  $(".btn_menu").css("color","#232323")
  $(".btn_view").css("color","#bdbdbd")
};

// screen sacrificial chair design
  
  $('a').click(function () {
      var link = $(this).attr('href');
      if (link == '#') {
          return false;
      }
      return true;
  })

$(".size_x").click(function () {
  $(".size_x").addClass("some_size_sacrificial_chair")
  $(".size_xl").removeClass("some_size_sacrificial_chair")
  $(".size_s").removeClass("some_size_sacrificial_chair")
});
$(".size_xl").click(function () {
  $(".size_xl").addClass("some_size_sacrificial_chair")
  $(".size_x").removeClass("some_size_sacrificial_chair")
  $(".size_s").removeClass("some_size_sacrificial_chair")
});
$(".size_s").click(function () {
  $(".size_s").addClass("some_size_sacrificial_chair")
  $(".size_xl").removeClass("some_size_sacrificial_chair")
  $(".size_x").removeClass("some_size_sacrificial_chair")
});
$(".btn_description").click(function () {
  $(".btn_description").addClass("color_button_sacrificial_chair")
  $(".btn_shipping").removeClass("color_button_sacrificial_chair")
  $(".btn_faqs").removeClass("color_button_sacrificial_chair")
  $(".btn_reviews").removeClass("color_button_sacrificial_chair")
  $(".content_of_button_description").show()
  $(".content_of_button_shipping").hide()
  $(".content_of_button_faqs").hide()
  $(".content_of_button_reviews").hide()
});
$(".btn_shipping").click(function () {
  $(".btn_shipping").addClass("color_button_sacrificial_chair")
  $(".btn_description").removeClass("color_button_sacrificial_chair")
  $(".btn_faqs").removeClass("color_button_sacrificial_chair")
  $(".btn_reviews").removeClass("color_button_sacrificial_chair")
  $(".content_of_button_description").hide()
  $(".content_of_button_shipping").show()
  $(".content_of_button_faqs").hide()
  $(".content_of_button_reviews").hide()
});
$(".btn_faqs").click(function () {
  $(".btn_faqs").addClass("color_button_sacrificial_chair")
  $(".btn_shipping").removeClass("color_button_sacrificial_chair")
  $(".btn_description").removeClass("color_button_sacrificial_chair")
  $(".btn_reviews").removeClass("color_button_sacrificial_chair")
  $(".content_of_button_description").hide()
  $(".content_of_button_shipping").hide()
  $(".content_of_button_faqs").show()
  $(".content_of_button_reviews").hide()
});
$(".btn_reviews").click(function () {
  $(".btn_reviews").addClass("color_button_sacrificial_chair")
  $(".btn_shipping").removeClass("color_button_sacrificial_chair")
  $(".btn_faqs").removeClass("color_button_sacrificial_chair")
  $(".btn_description").removeClass("color_button_sacrificial_chair")
  $(".content_of_button_description").hide()
  $(".content_of_button_shipping").hide()
  $(".content_of_button_faqs").hide()
  $(".content_of_button_reviews").show()
});
$(".icon-start_rate1").click(function () {
  $(".icon-start_rate1").addClass("color_icon_start_when_rating")
  $(".icon-start_rate2").removeClass("color_icon_start_when_rating")
  $(".icon-start_rate3").removeClass("color_icon_start_when_rating")
  $(".icon-start_rate4").removeClass("color_icon_start_when_rating")
  $(".icon-start_rate5").removeClass("color_icon_start_when_rating")
});
$(".icon-start_rate2").click(function () {
  $(".icon-start_rate2").addClass("color_icon_start_when_rating")
  $(".icon-start_rate1").addClass("color_icon_start_when_rating")
  $(".icon-start_rate3").removeClass("color_icon_start_when_rating")
  $(".icon-start_rate4").removeClass("color_icon_start_when_rating")
  $(".icon-start_rate5").removeClass("color_icon_start_when_rating")
});
$(".icon-start_rate3").click(function () {
  $(".icon-start_rate3").addClass("color_icon_start_when_rating")
  $(".icon-start_rate2").addClass("color_icon_start_when_rating")
  $(".icon-start_rate1").addClass("color_icon_start_when_rating")
  $(".icon-start_rate4").removeClass("color_icon_start_when_rating")
  $(".icon-start_rate5").removeClass("color_icon_start_when_rating")
});
$(".icon-start_rate4").click(function () {
  $(".icon-start_rate4").addClass("color_icon_start_when_rating")
  $(".icon-start_rate2").addClass("color_icon_start_when_rating")
  $(".icon-start_rate3").addClass("color_icon_start_when_rating")
  $(".icon-start_rate1").addClass("color_icon_start_when_rating")
  $(".icon-start_rate5").removeClass("color_icon_start_when_rating")
});
$(".icon-start_rate5").click(function () {
  $(".icon-start_rate5").addClass("color_icon_start_when_rating")
  $(".icon-start_rate2").addClass("color_icon_start_when_rating")
  $(".icon-start_rate3").addClass("color_icon_start_when_rating")
  $(".icon-start_rate4").addClass("color_icon_start_when_rating")
  $(".icon-start_rate1").addClass("color_icon_start_when_rating")
});

  // --- Nav |  01  |  Side-Slide
  $('.btn01').click(function() {
    $('.side-slide').animate({left: "0px"}, 200);
    $('.mask').toggle()
  });
  
  $('.nav01').click(function() {
    $('.side-slide').animate({left: "-285px"}, 200);
    $('.mask').toggle()
  });

  $('.mask').click(function () {
    $('.mask').toggle();
    $('.side-slide').animate({left: "-285px"}, 200);
})
  


    $('.trending_img_slick').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });

    $('.your-logo').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      // dots: true,
      infinite: false,
      speed: 300,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });

    $('.slick_blog').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });

  });

  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }