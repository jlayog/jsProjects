var user = cookie.get('user');
if(user) {
    user = prompt('Enter a username:');
    if(!user) {
        alert('Username must be entered.')
    } else {
        cookie.set('user', user);
    }
}

var socket = io();
//user count
socket.on('count', function (data) {
    $('.user-count').html(data);
});


//receive message
socket.on('message', function (data) {
    $('.chat').append('<p><strong>' + data.user + '</strong>: ' + data.message + '</p>');
});

//when form is submitted
$('form').submit(function (e) {
    //avoid submitting through http
    e.preventDefault();

    //retrieve message from user
    var message = $(e.target).find('input').val();

    //send the message to server
    socket.emit('message', {
        user: cookie.get('user') || 'Anonymous',
        message: message
    });

    e.target.reset();
    $(e.target).find('input').focus();
});