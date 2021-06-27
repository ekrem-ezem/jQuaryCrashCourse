$(document).ready(function(){
    $("p span").css("color","red");
    $("ul#list li:first").css("color","red");
    $("ul#list li:last").css("color","green");
    $("ul#list li:even").css("background-color","#cccccc");
    $("ul#list li:odd").css("background-color","yellow");
    $("ul#list li:nth-child(3n)").css("list-style","none");
    //$(":text").hide();
    $("[href]").css("color","red");
    $("a:last").css("color","green");
    $("#btn1").on("mousedown",function(){
       $(".para1").toggle();
    $("#btn2").on("click",function(){
         $(".para1").show();})})
    $("#btn3").dblclick(function(){
        $(".para1").toggle();})
    $("#btn4").hover(function(){
        $(".para1").toggle();})
    $(document).on("mousemove",function(e){
            $("#coords").html("coords:Y: "+e.
                  clientY+"X:"+e.clientX)
        })
    $("input").focus(function(){
        $(this).css("background","pink")
    })
    $("input").blur(function(){
        $(this).css("background","white")
    })


})
