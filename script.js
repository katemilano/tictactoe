//Onload make all Xs and Os invisible
$(window).on('load', function() {
    var ptags = $("p");
    ptags.each(function(i, element){
        $(element).attr("style","opacity:0;")
    });
    
})

$("#video").on('play',function(){
    $(this).playbackRate = .5;
  });

//When you click on the box game starts
var count = 0;

function showMove(){
    var p = $(this).children('p')[0];

    if (count % 2 === 0){
        let p = $(this).children('p')[0];
        $(p).attr("style", "opacity:1;")
    }else{
        let p = $(this).children('p')[1];
        $(p).attr("style", "opacity:1;")
    }
   count++;
}

$(".cell").on("click", showMove);