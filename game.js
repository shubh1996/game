
var correct = function(){
    $('.bottom').html("<h2>Correct !!!!!!!</h2>");
    $('#cor').css({'background-color':'green'});
};

var wrong = function(){
    var bid=$(this).attr('id');
     $('.bottom').html("<h2>Wrong (try again)</h2>");
};

$(document).ready(function(){
    $('.olpbtn').mouseenter(function(){
     var btnid=$(this).attr('id');                       
      $('#'+btnid).html(".");
    $('#'+btnid).css({'background-color':'transparent','border-color':'transparent'});                        
    });
    $('.olpbtn').mouseleave(function(){
     var btnid=$(this).attr('id');                       
      $('#'+btnid).html("HOVER OVER ME");
    $('#'+btnid).css({'background-color':'orange','border-color':'transparent'});     
    
    });

    });
