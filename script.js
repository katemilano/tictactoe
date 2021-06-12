//Onload make all Xs and Os invisible
$(window).on('load', function() {
    var ptags = $("p");
    ptags.each(function(i, element){
        $(element).attr("style","opacity:0;")
    });
    
})

//When you click on the box game starts
var count = 0;

function showMove(){
    var p = $(this).children('p')[0];
    let o = $(this).children('p')[0];
    let x = $(this).children('p')[1];

    if($(o).css('opacity') != 1 && $(x).css('opacity') != 1){
        console.log("open");
        if (count % 2 === 0){
            $(o).attr("style", "opacity:1;");   
        }else{
            $(x).attr("style", "opacity:1;");
        }
       count++;
    }else{
        console.log("taken");
    }

    // if($(x).attr("style", "opacity:0;") || $(o).attr("style", "opacity:0;")){
    //     if (count % 2 === 0){
    //         $(o).attr("style", "opacity:1;");   
    //     }else{
    //         $(x).attr("style", "opacity:1;");
    //     }
    //    count++;
    // }

  
}

$(".cell").on("click", showMove);