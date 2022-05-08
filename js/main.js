// *********** NavBar / change backgroundColor***************

$(window).scroll(function(){
    
    let screenTop = $(window).scrollTop();
    let aboutTop = $("#about").offset().top;


    if(screenTop > aboutTop) {

        $("header").css({backgroundColor:"white" , boxShadow :"0px 2px 90px rgb(1 41 112 / 10%)"});

    }else {
        $("header").css({backgroundColor:"white" , boxShadow :"0px 0px 0px"});
    }
})

//******* Links / smooth behavior **********/


$(".nav-link").click(function() {
 
    let sectionTop = $(this).attr("href")
    let linkOffset =$(sectionTop).offset().top;
    $("body , html").animate({scrollTop : linkOffset} , {queue : false , duration : 3000})

})


//******* traversing active class for links ******** */

// $(".nav-item").click(function(){
//     console.log("hello")
//     $(".nav-item").find(".nav-link").addClass(".active")
// })


    $('nav ul li a').click(function() {
        $('nav ul li a').removeClass('active');
$(this).addClass('active');
    })
