var num = Math.floor(Math.random()*10);
if (num <= 2){
  document.querySelector("#video").src = "/videos/captain_america.mp4"
  document.querySelector("#audio").src = "/audios/captain_america.mp3"
}

else if (num <= 5){
  document.querySelector("#video").src = "/videos/ironman.mp4"
  document.querySelector("#audio").src = "/audios/ironman.mp3"
}

else if (num <= 7 ){
  document.querySelector("#video").src = "/videos/hawkeye.mp4"
  document.querySelector("#audio").src = "/audios/hawkeye.mp3"
}

else if (num <= 11){
  document.querySelector("#video").src = "/videos/thor_3.mp4"
  document.querySelector("#audio").src = "/audios/thor.mp3" 
}



setTimeout(function(){
    var vid = document.getElementById('video')
    vid.muted = true;
    vid.play();
    var audio = document.getElementById("audio");
    audio.play();
  }, 250);