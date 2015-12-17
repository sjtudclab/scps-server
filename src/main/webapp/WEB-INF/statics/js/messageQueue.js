/**
 * Created by Kevin on 12/12/2015.
 */
$(function() {
    function getExpands() {
        $.ajax({
            type: "GET",
            url: SCPS_SERVER_BASE_URL +"/getExpand/4",
            cache: false,
            success: function(data){
                var threshold_setting=$.parseJSON(data.threshold_setting);
                var schema_setting_auto = $.parseJSON(data.schema_setting_auto);

                $('.serviceAutoExpand11 .form-control:eq(0)').val(threshold_setting.memory);
                $('.serviceAutoExpand11 .form-control:eq(1)').val(threshold_setting.workload);
                $('.serviceAutoExpand11 .form-control:eq(2)').val(threshold_setting.socket);
                $('.serviceAutoExpand11 .form-control:eq(3)').val(threshold_setting.ready);
                $('.serviceAutoExpand11 .form-control:eq(4)').val(threshold_setting.total);
                $('.serviceAutoExpand11 .form-control:eq(5)').val(threshold_setting.fileDes);
                $('.serviceAutoExpand11 .form-control:eq(6)').val(threshold_setting.Erlang);

                $('.serviceAutoExpand11 .form-control:eq(7)').val(schema_setting_auto.nodeNum);
                $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(0) li a:eq(' + schema_setting_auto.vm[0] + ')').click()
                $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(1) li a:eq(' + schema_setting_auto.vm[1] + ')').click()
                $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(2) li a:eq(' + schema_setting_auto.vm[2] + ')').click()
                $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(3) li a:eq(' + schema_setting_auto.vm[3] + ')').click()
                $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(4) li a:eq(' + schema_setting_auto.vm[4] + ')').click()
                $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(5) li a:eq(' + schema_setting_auto.vm[5] + ')').click()

                var schema_setting_manual = $.parseJSON(data.schema_setting_manual);
                $('.serviceAutoExpand12 .form-control:eq(0)').val(schema_setting_manual.nodeNum);
                $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(0) li a:eq(' + schema_setting_manual.vm[0] + ')').click();
                $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(1) li a:eq(' + schema_setting_manual.vm[1] + ')').click();
                $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(2) li a:eq(' + schema_setting_manual.vm[2] + ')').click();
                $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(3) li a:eq(' + schema_setting_manual.vm[3] + ')').click();
                $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(4) li a:eq(' + schema_setting_manual.vm[4] + ')').click();
                $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(5) li a:eq(' + schema_setting_manual.vm[5] + ')').click();
            }
        });
    }
    getExpands();
    function updateExpands() {
        var data = {};
        var threshold_setting = {};
        var schema_setting_auto = {};
        var schema_setting_manual = {};

        threshold_setting.memory = $('.serviceAutoExpand11 .form-control:eq(0)').val();
        threshold_setting.workload = $('.serviceAutoExpand11 .form-control:eq(1)').val();
        threshold_setting.socket = $('.serviceAutoExpand11 .form-control:eq(2)').val();
        threshold_setting.ready = $('.serviceAutoExpand11 .form-control:eq(3)').val();
        threshold_setting.total = $('.serviceAutoExpand11 .form-control:eq(4)').val();
        threshold_setting.fileDes = $('.serviceAutoExpand11 .form-control:eq(5)').val();
        threshold_setting.Erlang = $('.serviceAutoExpand11 .form-control:eq(6)').val();

        schema_setting_auto.nodeNum = $('.serviceAutoExpand11 .form-control:eq(7)').val();
        schema_setting_auto.vm = [];
        var v0 = $.trim( $('.serviceAutoExpand11 .bs-example .btn-group:eq(0) button').text());
        var v1 = $.trim($('.serviceAutoExpand11 .bs-example .btn-group:eq(1) button').text());
        var v2 = $.trim( $('.serviceAutoExpand11 .bs-example .btn-group:eq(2) button').text());
        var v3 = $.trim($('.serviceAutoExpand11 .bs-example .btn-group:eq(3) button').text());
        var v4 = $.trim( $('.serviceAutoExpand11 .bs-example .btn-group:eq(4) button').text());
        var v5 = $.trim($('.serviceAutoExpand11 .bs-example .btn-group:eq(5) button').text());
        var lis0 = $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(0) li a');
        var lis1 = $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(1) li a');
        var lis2 = $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(2) li a');
        var lis3 = $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(3) li a');
        var lis4 = $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(4) li a');
        var lis5 = $('.serviceAutoExpand11 .bs-example .dropdown-menu:eq(5) li a');

        schema_setting_auto.vm.push(lis0.index(lis0.filter(function(){ return $(this).text() == v0;})))
        schema_setting_auto.vm.push(lis1.index(lis1.filter(function(){ return $(this).text() == v1;})))
        schema_setting_auto.vm.push(lis2.index(lis2.filter(function(){ return $(this).text() == v2;})))
        schema_setting_auto.vm.push(lis3.index(lis3.filter(function(){ return $(this).text() == v3;})))
        schema_setting_auto.vm.push(lis4.index(lis4.filter(function(){ return $(this).text() == v4;})))
        schema_setting_auto.vm.push(lis5.index(lis5.filter(function(){ return $(this).text() == v5;})))

        schema_setting_manual.nodeNum = $('.serviceAutoExpand12 .form-control:eq(0)').val();
        schema_setting_manual.vm=[];
        var c0 = $.trim( $('.serviceAutoExpand12 .bs-example .btn-group button:eq(0)').text());
        var c1 = $.trim( $('.serviceAutoExpand12 .bs-example .btn-group button:eq(1)').text());
        var c2 = $.trim( $('.serviceAutoExpand12 .bs-example .btn-group button:eq(2)').text());
        var c3 = $.trim( $('.serviceAutoExpand12 .bs-example .btn-group button:eq(3)').text());
        var c4 = $.trim( $('.serviceAutoExpand12 .bs-example .btn-group button:eq(4)').text());
        var c5 = $.trim( $('.serviceAutoExpand12 .bs-example .btn-group button:eq(5)').text());
        var lic0  = $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(0) li a');
        var lic1  = $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(1) li a');
        var lic2  = $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(2) li a');
        var lic3  = $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(3) li a');
        var lic4  = $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(4) li a');
        var lic5  = $('.serviceAutoExpand12 .bs-example .dropdown-menu:eq(5) li a');
        schema_setting_manual.vm.push(lic0.index(lic0.filter(function(){ return $(this).text() == c0;})))
        schema_setting_manual.vm.push(lic1.index(lic1.filter(function(){ return $(this).text() == c1;})))
        schema_setting_manual.vm.push(lic2.index(lic2.filter(function(){ return $(this).text() == c2;})))
        schema_setting_manual.vm.push(lic3.index(lic3.filter(function(){ return $(this).text() == c3;})))
        schema_setting_manual.vm.push(lic4.index(lic4.filter(function(){ return $(this).text() == c4;})))
        schema_setting_manual.vm.push(lic5.index(lic5.filter(function(){ return $(this).text() == c5;})))

        data.threshold_setting =  JSON.stringify(threshold_setting);
        data.schema_setting_auto =  JSON.stringify(schema_setting_auto);
        data.schema_setting_manual =  JSON.stringify(schema_setting_manual);
        data.id = 4;

        $.ajax({
            type: "POST",
            url: SCPS_SERVER_BASE_URL +'/updateExpand',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function() {

            },
            error: function(e) {
                console.log(e);
            }
        });
    }

    $('#mqService1').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand10').show();
    })

    $('#mqService2').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand11').show();
    })

    $('#mqService3').on('click', function() {
        $('.expand').hide();
        $('.serviceAutoExpand12').show();
    })

    $('#serviceAutoExpand11Save').on('click', function() {
        updateExpands();
    });
    $('#serviceAutoExpand12Save').on('click', function() {
        updateExpands();
    })
})
