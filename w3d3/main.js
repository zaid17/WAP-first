$(document).ready(function(){

    let isStarted=false;
    $("#start").hover(function(){
        isStarted=true;
      },
      function(){
      
      });


      $("#end").hover(function(){
        if(isStarted)
        alert("you won");
      },
      function(){
      
      });
  
  });