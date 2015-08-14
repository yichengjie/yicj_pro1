$(function(){


    $(':input[name=myselect]')
        .bind('change',function(){
            var value = $(this).val() ;
            alert('xxx' + value) ;
        }) ;

    /*$('#mytest').bind('click',function(){


       alert('value : ' + value) ;

    }) ;*/

}) ;