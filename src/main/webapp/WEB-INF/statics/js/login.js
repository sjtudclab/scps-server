$(function(){
    $('#loginForm').on('submit', function(){
        alert('login now ...');
        var username = $('#username').val();
        var password = $('#password').val();
        $.ajax({
            type: "POST",
            url: "/login",
            data:  JSON.stringify({
                "username":username,
                "password":password,
            }),
            contentType: "application/json",
            success: function() {
                console.log('Redirect to homepage');
                window.location.href="base.html";
            },
            error: function(error) {
                console.log('Oops');
            }
        });
        event.preventDefault();
    })
});