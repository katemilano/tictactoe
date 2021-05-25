//Onload make all Xs and Os invisible
$(window).on('load', function() {
    var ptags = $("p");
    ptags.each(function(i, element){
        $(element).attr("style","opacity:0;")
        console.log($(element));

    });
    
})

//When you click on the box game starts

// function showMove(event){
//     console.log(event);
//     console.log(event.target);
// }


// box.addEventListener("click", showMove(event));