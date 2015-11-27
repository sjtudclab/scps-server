$(function(){
    $('#registerForm').on('submit', function(){
        alert('hi');
        var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();
        $.ajax({
            type: "POST",
            url: "/register",
            data:  JSON.stringify({
                "username":username,
                "password":password,
                "email": email,
            }),
            contentType: "application/json",
            success: function() {
                console.log('Redirect to Login');
                window.location.href="login.html";
            },
            error: function(error) {
                console.log('Oops');
            }
        });
        event.preventDefault();
    })
});