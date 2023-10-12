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
        if ($(document).scrollTop() > 360) {
            $(".bg-image-holder").css({ opacity: '0.02' })
            $("body").css({ backgroundColor: 'var(--scroll-bg-color)' })
        } else {
            $(".bg-image-holder").css({ opacity: 'var(--bg-opacity)' })
            $("body").css({ backgroundColor: 'var(--global-bg-color)' })
        }
    })
})


//Horizontal scroll on homepage

//Get the gallery from th DOM
const gallery = document.querySelector(".gallery");
const gallerywrapper = document.querySelector(".gallery-wrapper");
//Get the gallery total width
let galleryWidth = gallery.offsetWidth;
let gallerywrapperWidth = gallerywrapper.offsetWidth;
//This is a static var where I put the padding-right found in gallery
let paddingright = 16;
/*Get the ammount to scroll horizontally 
by subtracting the window width 
from the full width of the gallery*/
let ammountToScroll = galleryWidth - gallerywrapperWidth - paddingright;
console.log(ammountToScroll)

gsap.registerPlugin(ScrollTrigger);

//responsive
let mm = gsap.matchMedia();

mm.add("(min-width: 560px)", () => {
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
    });
});

//Initialize Lenis smooth scrolling
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
