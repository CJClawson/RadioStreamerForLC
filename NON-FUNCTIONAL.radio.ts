var player = document.getElementById("AudioPlayer");

// window.onload = function(){
//     var player = {};
//     function Play(){}
// }

function PlayIt(){
    
    if(player.paused){
        player.play();
    }else{
        player.pause();
    }


};