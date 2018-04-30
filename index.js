$(function(){
    let socket = null;

    $('#joinUs').click(function(){
        let nickname = $('#nickname').val().trim();
        if(nickname){
            socket = io('http://localhost:3000');
            socket.on('welcome', function(data){
                $('#show').append(JSON.stringify(data));
            });
        }
    })
})