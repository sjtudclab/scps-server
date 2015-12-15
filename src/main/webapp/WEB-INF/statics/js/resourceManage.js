/**
 * Created by Kevin on 12/10/2015.
 */
$(function() {
    $('#resourceManageService1').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand1').show();
        $('#amIframe').contents().find('.ember-view.nav.nav-list.nav-services li:nth-child(3) span').click();
    })

    $('#resourceManageService2').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand2').show();
        $.ajax({
            type: "GET",
            url: "/getExpand/1",
            cache: false,
            success: function(data){
                var threshold_setting=$.parseJSON(data.threshold_setting);
                var schema_setting_auto = $.parseJSON(data.schema_setting_auto);

                $('.serviceAutoExpand2 .form-control:eq(0)').val(threshold_setting.memory);
                $('.serviceAutoExpand2 .form-control:eq(1)').val(threshold_setting.workload);
                $('.serviceAutoExpand2 .form-control:eq(2)').val(threshold_setting.interval);

                $('.serviceAutoExpand2 .form-control:eq(3)').val(schema_setting_auto.nodeNum);
                $('.serviceAutoExpand2 .form-control:eq(4)').val(schema_setting_auto.nodeTime);
                $('.serviceAutoExpand2 .bs-example .dropdown-menu:eq(0) li a:eq(' + schema_setting_auto.vm[0] + ')').click()
                $('.serviceAutoExpand2 .bs-example .dropdown-menu:eq(1) li a:eq(' + schema_setting_auto.vm[1] + ')').click()
            }
        });
    })

    $('#resourceManageService3').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand3').show();
        $.ajax({
            type: "GET",
            url: "/getExpand/1",
            cache: false,
            success: function(data){
                var schema_setting_manual = $.parseJSON(data.schema_setting_manual);
                $('.serviceAutoExpand3 .form-control:eq(0)').val(schema_setting_manual.nodeNum);
                $('.serviceAutoExpand3 .bs-example .dropdown-menu:eq(0) li a:eq(' + schema_setting_manual.vm[0] + ')').click();
                $('.serviceAutoExpand3 .bs-example .dropdown-menu:eq(1) li a:eq(' + schema_setting_manual.vm[1] + ')').click();
                $('.serviceAutoExpand3 .bs-example .dropdown-menu:eq(2) li a:eq(' + schema_setting_manual.vm[2] + ')').click();
                $('.serviceAutoExpand3 .bs-example .dropdown-menu:eq(3) li a:eq(' + schema_setting_manual.vm[3] + ')').click();
                $('.serviceAutoExpand3 .bs-example .dropdown-menu:eq(4) li a:eq(' + schema_setting_manual.vm[4] + ')').click();
                $('.serviceAutoExpand3 .bs-example .dropdown-menu:eq(5) li a:eq(' + schema_setting_manual.vm[5] + ')').click();
            }
        });
    })
    $('#resourceManageService1').click();

})
