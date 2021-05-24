$(function () {
   'use strict';
   $(window).scroll(function () {
      var navbar = $('.navbar');
      // window.console.log($('.navbar').height());
      // window.console.log($(window).scrollTop());
      //  لو السكرول اللي انا عاملو من فوق للويندو يعني لو مقدار السكرول اللي انا بعملو للويندو و طبعا السكرول بيكون من فوق و السكرول دا لو كان اكبر من طول الناف بار اعملي التالي
      // $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
      // تحسين للكون و بالتالي البيرفورمانس بيبقي افضل بدل ما كل سوية يشيك و يضيف و يحط فانا هخلية لو السكرول اكبر من البار شوف هل فية كلاس السكروليد ولا لا لو اه متعملش حاجة لو لا ضيفة فدا هيوفر كل شوية ان المتصفح يروح يضيف الكلاس اللي بالفعل موجوود و دا اللي في الكود القديم فهنا في الكود الجديد بقولو شيك قبل ما تضيف لو مش موجود ضيفو غير كدا خلاص
      if ($(window).scrollTop() >= navbar.height()) {
         if (!navbar.hasClass('scrolled')) {
            navbar.addClass('scrolled');
         }
      } else {
         navbar.removeClass('scrolled');
      }
   });
   // Deal With Tabs
   $('.tab-switch li').click(function () {
      // Add Selected Class To Active Link
      $(this).addClass('selected').siblings().removeClass('selected');
      // Hide All Divs
      // علشان تخفي كل الديفات اللي في التاب كونتينت علشان بعد كدا لما اظهر الديف اللي لية نفي الكلاس اللي في الكاستم اتربيوت يظهر علي نظافة و يكون الديف اللي قبلو اختفي
      $('.tabs-section .tabs-content > div').hide();
      // Show Div Connected With This Link
      $($(this).data('class')).show();
   });
});
