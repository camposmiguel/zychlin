$( document ).ready(function() {

    $(document).on("click","#lightButtonOff",function(){
      $("body").css("background-color","black");
    });

    $(document).on("click","#lightButtonOn",function(){
      $("body").css("background-color","white");
    });

    var message = $("p").text();
    alert(message);
});
