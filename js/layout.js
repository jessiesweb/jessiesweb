$(document).ready(function(){
   
    /*手機版漢堡圖==================================================================================================================*/

    //當視窗大於550時(電腦版)，nav要出現、漢堡圖不出現 ; 否則 當視窗小於550時(手機版)，nav不出現、漢堡圖出現
    function navshow(){
        if($(window).width() > 550){  $('nav').css('display','block');$('.fa-bars').css('display','none');  }
        else{  $('nav').css('display','none');$('.fa-bars').css('display','block');  }
    }
    navshow();
    $(window).resize(navshow);

    //當漢堡圖沒顯示時(電腦版)，要做nav滑入動畫，nav a按下去nav要出現 ; 否則漢堡圖顯示時(手機版)動畫要移除，漢堡圖、叉叉、nav a要切換
    function navaciick(){
        
        if(  $('.fa-bars').is(':hidden')  ){  
            $('nav a').hover(function(){  $(this).stop(true,true).append('<div class="navspan"></div>');$('.navspan').animate({left:'0px'},1000,'easeOutElastic')  }
                            ,function(){  $('.navspan').remove();  });
            $('nav a').click(function(){  $('nav').show();  });
          }

        else{ 
            $('nav a').hover(function(){  $('.navspan').remove();  });
            $('.fa-bars').click(function(){  $('nav').slideDown();  });
            $('.fa-times').click(function(){  $('nav').hide();  });
            $('nav a').click(function(){  $('nav').hide();  });
         }
    }
    navaciick();
    $(window).resize(navaciick);



    /*視窗下滑時header往下出現===================================================================================================================*/
    $(window).scroll(function(){
        if(  $(document).scrollTop() > $('header').height()  ){ $('header').addClass('fixed')  };
        if(  $(document).scrollTop() > $('header').height()  ){ $('header .container .logo a img').css('width','110px')  };
        if(  $(document).scrollTop() == 0  ){  $('header').removeClass('fixed')  };
        if(  $(document).scrollTop() == 0  ){  $('header .container .logo a img').css('width','140px')  };
    })
    
})