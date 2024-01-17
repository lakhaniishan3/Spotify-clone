// initialization the variable
let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));


// create new Array-Object
let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE [NCS Release]", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight [NCS Release]", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq [New Release]", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
]


// this is html collection so directly not use forEach look also add Array.from() in variable
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


// handle play/pause click button
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
});


// update time by song 
audioElement.addEventListener("timeupdate", () => {                   //audioevent perform time ==> timeupdate use 

    //update seekbar
    //convert time in persentage
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //set value in progressbar
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


// all song play function
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");
    })
}


// all song items play function
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        // console.log(e.target);
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `song/${songIndex}.mp3`;
        // audioElement.src = `song/${index + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    });
});

// previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 9) {
        songIndex = 1
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});

// next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 1
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});
