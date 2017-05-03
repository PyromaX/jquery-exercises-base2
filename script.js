$(function(){

//---------------------------------------EXO1------------------------------------------------------------

   $(".but").click(function(){
       alert('On vous ferait vraiment faire n\'importe quoi !');
   });

//---------------------------------------EXO2------------------------------------------------------------

   $(".tigre").dblclick(function () {
       $(this).css('width', '1735px');
   });

//---------------------------------------EXO3------------------------------------------------------------

    $("#exo3").hover(function () {
        $(this).css({"background-color": "#63A8BC",
            "color": "#fff",
            "width": "450px",
            "height": "370px",
            "font-size": "20px"
        });
    });

//---------------------------------------EXO4------------------------------------------------------------

    $(".btn-col").click(function(){
        var colorB = $(this).css("background-color");
        $("#exo4").css({"color": colorB, "border-color": colorB});
    });

//---------------------------------------EXO5------------------------------------------------------------

        $("input").focus(function () {
            $(this).css({"border": "1px solid green"});
        });

        $("input").focusout(function () {
            $(this).css({"border": "1px solid red"});
        });

//---------------------------------------EXO6------------------------------------------------------------

    var colordefault = $("#exo6").css("color");
    $(".btn-color").mouseenter(function(){
        var color = $(this).css("background-color");
        $("#exo6").css("color", color);
    });
    $(".btn-color").mouseleave(function () {
        $("#exo6").css("color", colordefault);
    });


});