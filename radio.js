var player = document.getElementById("AudioPlayer");

// window.onload = function(){
//     var player = {};
//     function Play(){}
// }

function Play(){
    
    console.log(player.paused);
    if(player.paused){
        player.play();
        document.getElementById("PlayButton").src="Pause.svg";
    }else{
        player.pause();
        document.getElementById("PlayButton").src="Play.svg";
    }


};