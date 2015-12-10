/**
 * Created by Kevin on 12/10/2015.
 */
$(function() {
    $('#resourceManageService1').on('click', function() {
        $('.serviceAutoExpand1').show();
        $('.serviceAutoExpand2').hide();
        $('.serviceAutoExpand3').hide();
    })

    $('#resourceManageService2').on('click', function() {
        $('.serviceAutoExpand1').hide();
        $('.serviceAutoExpand2').show();
        $('.serviceAutoExpand3').hide();
    })

    $('#resourceManageService3').on('click', function() {
        $('.serviceAutoExpand1').hide();
        $('.serviceAutoExpand2').hide();
        $('.serviceAutoExpand3').show();
    })
    $('#resourceManageService1').click();
})
