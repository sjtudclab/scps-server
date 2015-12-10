$(function(){
    function loginAm() {
	 $.ajax({
                type: "POST",
                url: "http://192.168.1.112/ambari",
                async: false,
                beforeSend: function(xhr){
                        xhr.setRequestHeader("Authorization",btoa("admin:admin"));
                        xhr.setRequestHeader("X-Requested-By","ambari");
                        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                },
                success: function(){
                        console.log("success");
                }
        });
    }
    loginAm();

    state = {
	START: 0,
	FINISH: 1
    };
    function getState() {
        // 0: start                                                                                                                              
        // 1: finish                                                                                                                             
        var len = $('#amIframe').contents().find('.services-menu.well.span2.service-menu-width').length;
        if (len > 0)
            return state.FINISH;
        else
            return state.START;
    }
    setInterval(function() {
	switch(getState()) {
            case 0:
                $('#deploy').css('font-weight', 'bold');
	        $('#manage').css('font-weight', 'normal');
                break;
            case 1:
                $('#manage').css('font-weight', 'bold');
	        $('#deploy').css('font-weight', 'normal');
	        break;
	    }
    },1000);
});
