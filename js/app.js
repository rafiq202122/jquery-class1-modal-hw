$(function (){

  // JQURAY CODE


   let openModalBtn = $(".openModalBtn")

   openModalBtn.click(function (){


   $('.modal') .fadeIn(500);
   $('.modalbox') .delay (200).slideDown(500);

   })



    let closeBtn = $('.closeBtn')

    //closeBtn.click (function (){
      //$('.modal') .fadeOut(500);
     // $('.modalbox') .delay ().slideUp(500);

    //})

      function modalCloseing (){

      $('.modal') .fadeOut(500);
      $('.modalbox') .delay ().slideUp(500);

     }

     closeBtn.click(modalCloseing);
     $('.modal').click(modalCloseing);

   

    




})