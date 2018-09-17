(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space





 var clickeado = false;
     var rela = $("[href='#contacto']").click(function(){
        clickeado = true;
     });  
     var links = $("[href]");
     links.click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
 
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 
                 if (clickeado){
                     $('html,body').animate({scrollTop: targetOffset+800}, 1000); 
                     clickeado = false;
                 } 
                 else{
                     $('html,body').animate({scrollTop: targetOffset}, 2000);
                 }   
            
                 
              
               return false;
            }
      
       }
   });
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });

 // $("#modal-trigger1").click(function(){
 //     $("#modal1").show('fast');

 // });

 // $("#modal-close1").click(function(){
 //    $("#modal1").hide('fast')
 // });



 // $("#modal-trigger2").click(function(){
 //     $("#modal2").show('fast');

 // });

 // $("#modal-close2").click(function(){
 //    $("#modal2").hide('fast')
 // });


 // $("#modal-trigger3").click(function(){
 //     $("#modal3").show('fast');

 // });

 // $("#modal-close3").click(function(){
 //    $("#modal1").hide('fast')
 // });