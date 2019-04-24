var num = Math.floor(Math.random()*10);
if (num <= 4){
  document.querySelector("#video").src = "/videos/captain_america.mp4"
  document.querySelector("#audio").src = "/audios/captain_america.mp3"
}

else if (num > 4){
  document.querySelector("#video").src = "/videos/ironman.mp4"
  document.querySelector("#audio").src = "/audios/ironman.mp3"
}



setTimeout(function(){
    var vid = document.getElementById('video')
    vid.muted = true;
    vid.play();
    var audio = document.getElementById("audio");
    audio.play();
  }, 250);