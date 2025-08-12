// ============ preview scripts =============

// ------------ swiper sliders -----------
$(document).ready(function () {


    // ------------ tc-demos marq-slider -----------
    var swiper = new Swiper(".home-preview .tc-demos .marq-slider", {
        slidesPerView: "auto",
        spaceBetween: 140,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        //   allowTouchMove: false,
        disableOnInteraction: true,
    });

    // ------------ pages-slider -----------
    var swiper = new Swiper('.home-preview .tc-inner-pages .pages-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3.3,
            }
        }
    });

    // ------------ tc-mobile marq-slider -----------
    var swiper = new Swiper(".home-preview .tc-mobile .marq-slider", {
        slidesPerView: "auto",
        spaceBetween: 140,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        //   allowTouchMove: false,
        disableOnInteraction: true,
    });

    // ------------ pages-slider -----------
    var swiper = new Swiper('.home-preview .testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.testimonials-content .swiper-button-next',
            prevEl: '.testimonials-content .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


});




// ============ home 1 scripts =============

// ------------ swiper sliders -----------
$(document).ready(function () {


    // ------------ portfolio slider1 -----------
    var portSwiper = new Swiper('.tc-portfolio-st1 .portfolio-slider', {
        // slidesPerView: 3,
        spaceBetween: 120,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-portfolio-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: false,
        on: {
            init: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            },
            slideChange: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            }
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1.4,
            }
        }
    });

    // custom pagination 
    function updateCustomPagination(portSwiper) {
        const totalSlides = portSwiper.slides.length - (portSwiper.loop ? 2 : 0); // Adjust for cloned slides if loop is true
        const currentIndex = portSwiper.realIndex + 1; // realIndex starts from 0
      
        const customPagination = document.querySelector('.numbers-pagination');
        
        customPagination.innerHTML = `<span class="slide-cont"> ${currentIndex} </span> <span class="slide-mark"> / </span> <span class="slide-all"> ${totalSlides} </span>`;
    }
    updateCustomPagination(portSwiper);


    function updateProgressBar(portSwiper) {
        const totalSlides = portSwiper.slides.length - (portSwiper.loop ? 2 : 0); // Adjust for duplicated slides in loop mode
        const currentIndex = portSwiper.realIndex + 1; // realIndex starts from 0
        const progressPercentage = (currentIndex / totalSlides) * 100;
        const progressBar = document.querySelector('.swiper-progress-bar');
        progressBar.style.width = `${progressPercentage}%`;
      }

    //   end portfolio slider 


    // testimonials slider
    var swiper = new Swiper('.tc-testimonials-st1 .testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // blog slider
    var swiper = new Swiper('.tc-blog-st1 .blog-slider', {
        // slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-blog-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


});



// ============ home 2 scripts =============

// ------------ swiper sliders -----------
$(document).ready(function () {


    // ------------ portfolio slider1 -----------
    var portSwiper2 = new Swiper('.tc-portfolio-st2 .portfolio-slider', {
        // slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-portfolio-st2 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: true,
        on: {
            init: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            },
            slideChange: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            }
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // custom pagination 
    function updateCustomPagination(portSwiper2) {
        const totalSlides = portSwiper2.slides.length - (portSwiper2.loop ? 2 : 0); // Adjust for cloned slides if loop is true
        const currentIndex = portSwiper2.realIndex + 1; // realIndex starts from 0
      
        const customPagination = document.querySelector('.numbers-pagination');
        
        customPagination.innerHTML = `<span class="slide-cont"> ${currentIndex} </span> <span class="slide-mark"> / </span> <span class="slide-all"> ${totalSlides} </span>`;
    }
    updateCustomPagination(portSwiper2);


    function updateProgressBar(portSwiper2) {
        const totalSlides = portSwiper2.slides.length - (portSwiper2.loop ? 2 : 0); // Adjust for duplicated slides in loop mode
        const currentIndex = portSwiper2.realIndex + 1; // realIndex starts from 0
        const progressPercentage = (currentIndex / totalSlides) * 100;
        const progressBar = document.querySelector('.swiper-progress-bar');
        progressBar.style.width = `${progressPercentage}%`;
    }

    //   end portfolio slider 


    // ------------ cases slider1 -----------
    var swiper = new Swiper('.tc-testimonials-st2 .testimonials-slider', {
        slidesPerView: 3,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-testimonials-st2 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });


});



// ============ home 3 scripts =============

// ------------ swiper sliders -----------
$(document).ready(function () {


    // ------------ header slider -----------
    var swiper = new Swiper('.tc-header-st3 .marq-slider', {
        slidesPerView: "auto",
        spaceBetween: 50,
        centeredSlides: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        speed: 30000,
	    allowTouchMove: false,
        autoplay: {
            delay: 1,
        },
        loop: true,
    });


    // ------------ cases slider1 -----------
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 40,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-cases-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // blog slider
    var swiper = new Swiper('.tc-blog-st3 .blog-slider', {
        // slidesPerView: 5,
        spaceBetween: 24,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-blog-st3 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


});


// ============ home 4 scripts =============

// navbar toggle
$(function () {
    function checkWidth() {
      if ($(window).width() < 991) {
        $(".toggle-content").slideUp();
      } else {
        $(".toggle-content").slideDown();
      }
    }
      checkWidth();
      $(window).resize(function() {
      checkWidth();
    });

    $(".toggle-nav").click(function() {
        if ($(window).width() < 991) {
          $(".toggle-content").slideToggle();
        }
      });
  });
  
// ------------ swiper sliders -----------
$(document).ready(function () {

    // header marq slider 
    var swiper = new Swiper('.tc-header-st4 .marq-slider', {
        slidesPerView: "auto",
        spaceBetween: 60,
        centeredSlides: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        speed: 20000,
	    allowTouchMove: false,
        autoplay: {
            delay: 1,
        },
        loop: true,
    });


    // blog slider
    var swiper = new Swiper('.tc-portfolio-st4 .portfolio-slider', {
        // slidesPerView: 5,
        spaceBetween: 24,
        centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3.3,
            }
        }
    });


    // blog slider
    var swiper = new Swiper('.tc-blog-st4 .blog-slider', {
        // slidesPerView: 5,
        spaceBetween: 24,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-blog-st4 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


});


// ============ home 5 scripts =============

// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-showcase-st5 -----------
    var swiper = new Swiper(".tc-showcase-st5 .showcase-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        direction: "vertical",
        speed: 1500,
        parallax: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        mousewheel: {
            releaseOnEdges: true,
        },
        loop: true,
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".img")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function () {
                this.update();
            },
        },
    });


    // ------------ cases slider1 -----------
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 40,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-cases-st5 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


});



// ============ inner pages scripts =============

// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ testimonials slider 2 -----------
    var swiper = new Swiper('.tc-testimonials-st2 .testimonials-slider', {
        slidesPerView: 3,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-testimonials-st2 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });


    // portfolio slider
    var slider12 = new Swiper('.tc-portfolio-st12 .portfolio-slider', {
        // slidesPerView: 5,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-portfolio-st12 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: false,
        on: {
            init: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            },
            slideChange: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            }
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3.3,
            }
        }
    });

    // custom pagination 
    function updateCustomPagination(slider12) {
        const totalSlides = slider12.slides.length - (slider12.loop ? 2 : 0); // Adjust for cloned slides if loop is true
        const currentIndex = slider12.realIndex + 1; // realIndex starts from 0
      
        const customPagination = document.querySelector('.numbers-pagination');
        
        customPagination.innerHTML = `<span class="slide-cont"> ${currentIndex} </span> <span class="slide-mark"> / </span> <span class="slide-all"> ${totalSlides} </span>`;
    }
    updateCustomPagination(slider12);


    function updateProgressBar(slider12) {
        const totalSlides = slider12.slides.length - (slider12.loop ? 2 : 0); // Adjust for duplicated slides in loop mode
        const currentIndex = slider12.realIndex + 1; // realIndex starts from 0
        const progressPercentage = (currentIndex / totalSlides) * 100;
        const progressBar = document.querySelector('.swiper-progress-bar');
        progressBar.style.width = `${progressPercentage}%`;
    }



    // ------------ portfolio slider1 -----------
    var portSwiper13 = new Swiper('.tc-portfolio-st13 .portfolio-slider', {
        // slidesPerView: 3,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-portfolio-st13 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: false,
        on: {
            init: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            },
            slideChange: function () {
              updateCustomPagination(this),
              updateProgressBar(this);
            }
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // custom pagination 
    function updateCustomPagination(portSwiper13) {
        const totalSlides = portSwiper13.slides.length - (portSwiper13.loop ? 2 : 0); // Adjust for cloned slides if loop is true
        const currentIndex = portSwiper13.realIndex + 1; // realIndex starts from 0
      
        const customPagination = document.querySelector('.numbers-pagination');
        
        customPagination.innerHTML = `<span class="slide-cont"> ${currentIndex} </span> <span class="slide-mark"> / </span> <span class="slide-all"> ${totalSlides} </span>`;
    }
    updateCustomPagination(portSwiper13);


    function updateProgressBar(portSwiper13) {
        const totalSlides = portSwiper13.slides.length - (portSwiper13.loop ? 2 : 0); // Adjust for duplicated slides in loop mode
        const currentIndex = portSwiper13.realIndex + 1; // realIndex starts from 0
        const progressPercentage = (currentIndex / totalSlides) * 100;
        const progressBar = document.querySelector('.swiper-progress-bar');
        progressBar.style.width = `${progressPercentage}%`;
    }

    //   end portfolio slider 


});


// ------------ gsap scripts -----------
$(function () {

    // ----------- text animation color -----------
    const spans = gsap.utils.toArray(".tc-services-st1 .split-txt span");
    spans.forEach((span, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".tc-services-st1 .split-txt",
                start: "top 200%",
                // end: "bottom 50%",
                scrub: true,
            }
        });
        tl.to(span, {
            color: "#fff",
            filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 1))",
            duration: 1,
            delay: i * 0.8,
        })
        .to(span, {
            color: "transparent",
            filter: "drop-shadow(0px 0px 30px rgba(255, 255, 255, 0))",
            duration: 1,
        });
    });
    
    
});


// ============ preview scripts =============

// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-demos marq-slider -----------
    var swiper = new Swiper(".home-preview .tc-demos .marq-slider", {
        slidesPerView: "auto",
        spaceBetween: 140,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        //   allowTouchMove: false,
        disableOnInteraction: true,
    });

    // ------------ pages-slider -----------
    var swiper = new Swiper('.home-preview .tc-inner-pages .pages-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3.3,
            }
        }
    });

    // ------------ tc-mobile marq-slider -----------
    var swiper = new Swiper(".home-preview .tc-mobile .marq-slider", {
        slidesPerView: "auto",
        spaceBetween: 140,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        //   allowTouchMove: false,
        disableOnInteraction: true,
    });

    // ------------ pages-slider -----------
    var swiper = new Swiper('.home-preview .testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.testimonials-content .swiper-button-next',
            prevEl: '.testimonials-content .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


});


