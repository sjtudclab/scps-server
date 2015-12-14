/**
 * Created by Kevin on 12/10/2015.
 */
$(function() {
    $('#coordinateService1').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand1').show();
        $('#amIframe').contents().find('.ember-view.nav.nav-list.nav-services li:nth-child(4) span').click();
    })

    $('#coordinateService2').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand5').show();
    })

    $('#coordinateService3').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand6').show();
    })
})
