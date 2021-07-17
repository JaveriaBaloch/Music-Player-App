const songs=["Anna ost.mp3","Begangi ost.mp3","Aye dil cha dil aa sista.mp3",
"Bisat e dil ost.mp3","dil banjara ost.mp3","Lapata ost.mp3","Pyar ke sadqay ost.mp3",
"Tana bana ost.mp3","teriyaan.mp3"
];

function SongList(){
    const CreateList=document.createElement("ol");
    CreateList.setAttribute("type","I")
   for(i=0;i<songs.length;i++){
        const item=document.createElement("li");
        item.innerText=songs[i]
        CreateList.appendChild(item)
    }
    return CreateList;
}
document.querySelector("#my-songs").appendChild(SongList())
CreateList=document.querySelector("ol")
CreateList.onclick=function(e){
console.log(e)
const source=document.querySelector("#source");
source.src="audio/"+e.target.innerText;
document.querySelector("#current-song").innerText="Now Playing:  "+e.target.innerText;
const player=document.querySelector("#player-audio")

player.load();
player.play();
}
frames=document.querySelector("#player-audio")
playbtn=document.querySelector("#play")
pausebtn=document.querySelector("#puase")
playbtn.onclick=function Play(){
    if(frames.readyState){
        frames.play()
    }
}
pausebtn.onclick=function Pause(){
    if(frames.readyState){
        frames.pause()
    }
}
const slider=document.querySelector("#volume-slider")
slider.oninput=function(e){
    const volume=e.target.value
    frames.volume=volume;
}
function updateProgress(){
    if(frames.currentTime>0){
        const progressbar=document.querySelector("#Progress")
        progressbar.value=(frames.currentTime/frames.duration)*100
    }
}