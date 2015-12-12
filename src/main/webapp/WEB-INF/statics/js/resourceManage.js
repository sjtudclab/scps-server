/**
 * Created by Kevin on 12/10/2015.
 */
$(function() {
    $('#resourceManageService1').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand1').show();
    })

    $('#resourceManageService2').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand2').show();
    })

    $('#resourceManageService3').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand3').show();
    })
    $('#resourceManageService1').click();

})
