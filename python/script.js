console.log("Welcome to spotify");

//Initialize the variables
let songIindex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementsById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"_Soulmate_320(PagalWorld.com.sb)", filepath:"python/1.mp3", coverPath:"python/1.jpg"},
    {songName:"_Tu Hai Kahan_320(PagalWorld.com.sb)", filepath:"python/2.mp3", coverPath:"python/2.jpg"},
    {songName:"Bumpa_320(PagalWorld.com.sb)", filepath:"python/3.mp3", coverPath:"python/3.jpg"},
    {songName:"Husn_320(PagalWorld.com.sb)", filepath:"python/4.mp3", coverPath:"python/4.jpg"},
    {songName:"jale2", filepath:"python/5.mp3", coverPath:"python/5.jpg"},
    {songName:"Kahani Suno_320(PagalWorld.com.sb)", filepath:"python/6.mp3", coverPath:"python/6.jpg"},
    {songName:"Sab Kuch Mita Denge_320(PagalWorld.com.sb)", filepath:"python/7.mp3", coverPath:"python/7.jpg"},
    {songName:"Badal Barsa Bijuli_320(PagalWorld.com.sb)", filepath:"python/8.mp3", coverPath:"python/8.jpg"},
    {songName:"Kali Hoodie_320(PagalWorld.com.sb)", filepath:"python/9.mp3", coverPath:"python/9.jpg"},
]

songItems.forEach((Element, i)=>{
    Element.getElementByTagName("img")[0].src = song[1].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//audioElement.play();

//handle play/pause cliack
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
        Element.target.classList.add('fa-play-circle');
        Element.target.classList.add('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa--play-circle');
        masterPlay.classList.add('fa--pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa--play-circle');
        masterPlay.classList.add('fa--pause-circle');
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa--play-circle');
        masterPlay.classList.add('fa--pause-circle');
})