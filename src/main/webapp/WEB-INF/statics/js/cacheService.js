/**
 * Created by hadoop on 12/13/15.
 */
$(function() {
    $('#cacheService1').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand7').show();
        $('#amIframe').contents().find('.ember-view.nav.nav-list.nav-services li:nth-child(3) span').click();
    })

    $('#cacheService2').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand8').show();
        $.ajax({
            type: "GET",
            url: "/getExpand/3",
            cache: false,
            success: function(data){
                var threshold_setting=$.parseJSON(data.threshold_setting);
                var schema_setting_auto = $.parseJSON(data.schema_setting_auto);

                $('.serviceAutoExpand8 .form-control:eq(0)').val(threshold_setting.memory);
                $('.serviceAutoExpand8 .form-control:eq(1)').val(threshold_setting.workload);
                $('.serviceAutoExpand8 .form-control:eq(2)').val(threshold_setting.interval);

                $('.serviceAutoExpand8 .form-control:eq(3)').val(schema_setting_auto.nodeNum);
                $('.serviceAutoExpand8 .form-control:eq(4)').val(schema_setting_auto.nodeTime);
                $('.serviceAutoExpand8 .bs-example .dropdown-menu:eq(0) li a:eq(' + schema_setting_auto.vm[0] + ')').click()
                $('.serviceAutoExpand8 .bs-example .dropdown-menu:eq(1) li a:eq(' + schema_setting_auto.vm[1] + ')').click()
            }
        });
    })

    $('#cacheService3').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand9').show();
        $.ajax({
            type: "GET",
            url: "/getExpand/3",
            cache: false,
            success: function(data){
                var schema_setting_manual = $.parseJSON(data.schema_setting_manual);
                $('.serviceAutoExpand9 .form-control:eq(0)').val(schema_setting_manual.nodeNum);
                $('.serviceAutoExpand9 .bs-example .dropdown-menu:eq(0) li a:eq(' + schema_setting_manual.vm[0] + ')').click();
                $('.serviceAutoExpand9 .bs-example .dropdown-menu:eq(1) li a:eq(' + schema_setting_manual.vm[1] + ')').click();
                $('.serviceAutoExpand9 .bs-example .dropdown-menu:eq(2) li a:eq(' + schema_setting_manual.vm[2] + ')').click();
                $('.serviceAutoExpand9 .bs-example .dropdown-menu:eq(3) li a:eq(' + schema_setting_manual.vm[3] + ')').click();
                $('.serviceAutoExpand9 .bs-example .dropdown-menu:eq(4) li a:eq(' + schema_setting_manual.vm[4] + ')').click();
                $('.serviceAutoExpand9 .bs-example .dropdown-menu:eq(5) li a:eq(' + schema_setting_manual.vm[5] + ')').click();
            }
        });
    })
})