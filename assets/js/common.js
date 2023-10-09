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
            $("body").css({ backgroundColor: '#F5FFFE' })
        } else {
            $(".bg-image-holder").css({ opacity: '.25' })
            $("body").css({ backgroundColor: 'var(--global-bg-color)' })
        }
    })
})
