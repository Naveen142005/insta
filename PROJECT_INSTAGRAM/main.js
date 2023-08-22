const video = document.getElementById('Deepak_video');
let click_video = 1;
video.addEventListener('click',()=>{
  if(click_video){
  video.play();
  cse.pause();
  song.pause();
  click_video = 0;
  }
  else{
  video.pause();
  click_video = 1;
  }
});
const sound_btn = document.getElementById('volume_btn');
  let sound = 1;
  sound_btn.addEventListener('click',  ()=>{
  if(sound){
      video.muted = false;
      sound_btn.src="images/volume-on.jpg"
      sound = 0;
}
else{
  video.muted = true;
  sound_btn.src="images/volume-off.jpg"
  sound = 1;
  }
});
const cse = document.getElementById("CSE_A_video");
cse.pause();
const volume_cse = document.getElementById("volume_off");
cse_click = 1;
cse.addEventListener('click',function (){
  if(cse_click){
    cse.play();
    video.pause();
    song.pause();
    cse.muted = false;
    volume_cse.src = "images/volume-on.jpg";
    cse_click = 0;
  }
  else{
    cse.pause();
    volume_cse.src = "images/volume-off.jpg";
    cse_click = 1;
  }

})

const song = document.getElementById("song_video");
song.pause();

const song_btn = document.getElementById("song_volume");
song_click = 1;
song.addEventListener('click',function (){
  if(song_click){
    song.play();
    cse.pause();
    video.pause();
    song.muted = false;
    song_btn.src = "images/volume-on.jpg";
    song_click = 0;
  }
  else{
    song.pause();
    song_btn.src = "images/volume-off.jpg";
    song_click = 1;
  }
})

console.log(innerWidth);
