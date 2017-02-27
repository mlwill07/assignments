$(document).ready(function () {

    //    $('a[href*="#"]:not([href="#"])').click(function () {
    //        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //            var target = $(this.hash);
    //            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //            if (target.length) {
    //                $('html, body').animate({
    //                    scrollTop: target.offset().top
    //                }, 1000);
    //                return false;
    //            }
    //        }
    //    });
    
    

    $("a").on('click', function (event) {


        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {


                window.location.hash = hash;
            });
        }
    });

})