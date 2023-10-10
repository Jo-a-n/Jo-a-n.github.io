// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});

// scroll hide background image
$(document).ready(function() {
    $(document).scroll(function(){
        if ($(document).scrollTop() > 240) {
            $(".bg-image-holder").css({ opacity: '0.02' })
            $("body").css({ backgroundColor: 'rgb(244, 244, 244)' })
        } else {
            $(".bg-image-holder").css({ opacity: '.25' })
            $("body").css({ backgroundColor: 'var(--global-bg-color)' })
        }
    })
})

//Get the gallery from th DOM
const gallery = document.querySelector(".gallery");
const gallerywrapper = document.querySelector(".gallery-wrapper");
//Get the gallery total width
let galleryWidth = gallery.offsetWidth;
let gallerywrapperWidth = gallerywrapper.offsetWidth;
/*Get the ammount to scroll horizontally 
by subtracting the window width 
from the full width of the gallery*/
let ammountToScroll = galleryWidth - gallerywrapperWidth;
console.log(ammountToScroll)


ScrollTrigger.create({
    trigger: ".gallery-wrapper",
    start: "top 220px",
    pin: true,
    onUpdate: (self) => {
        // console.log(
        //   "progress:",
        //   self.progress.toFixed(3),
        //   "direction:",
        //   self.direction,
        //   "velocity",
        //   self.getVelocity()
        // );
        $('.gallery').css({transform: `translate(-${self.progress.toFixed(3) * ammountToScroll}px)`})
      },
})

//Initialize Lenis smooth scrolling
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
