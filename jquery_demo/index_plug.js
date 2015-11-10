/**
 * Created by mjn on 2015/11/4.
 */
(function($){
    $.fn.extend({
        showMyValue:function(){
            $(this).bind("click", function () {
                console.info($(this).val()) ;
            }) ;
        }
    }) ;

    $.extend() ;


})(jQuery) ;

