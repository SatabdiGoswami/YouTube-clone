
// //Initialize the variables
// let songIndex=0;
// let audioElement=new Audio('2.mp3');
// let masterPlay=document.getElementById('masterPlay');
// let myProgressBar=document.getElementById('myProgressBar');
// let gif=document.getElementById('gif');
// let songItems=Array.from(document.getElementsByClassName('songItem'));

// let songs=[
//     {songName:"Chaleya",filePath:"songs/1.mp3", coverPath:"/shreya-2.webp"},
//     {songName:"Tere Hawale",filePath:"songs/2.mp3", coverPath:"/Arijit Singh.webp"},
//     {songName:"O Saki Saki",filePath:"songs/3.mp3", coverPath:"/download.jpg"},
//     {songName:"Gali Gali",filePath:"songs/4.mp3", coverPath:"/cello.png"},
//     {songName:"Nach de ne saari",filePath:"songs/1.mp3", coverPath:"/shreya-2.webp"},
//     {songName:"Nach de ne saari",filePath:"songs/2.mp3", coverPath:"/Arijit Singh.webp"},
//     {songName:"Nach de ne saari",filePath:"songs/3.mp3", coverPath:"/download.jpg"},
// ]

// songItems.forEach((element,i)=>{
//     element.getElementsByTagName('img')[0].src=songs[i].coverPath;
//     element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
// })
// //audioElement.play();
// //Handle play/pause click
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//             audioElement.play();
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//             gif.style.opacity=1;
//     }else{
//         audioElement.pause();
//             masterPlay.classList.remove('fa-pause-circle');
//             masterPlay.classList.add('fa-play-circle');
//             gif.style.opacity=0;
//     }
// })
// //Listen to Events
// audioElement.addEventListener('timeupdate',()=>{
// console.log('timeupdate');
// //update Seekbar
// progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
// //console.log(progress);
// myProgressBar.value=progress;
// });

// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
// })
// const makeAllPlays=()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         songIndex=parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src=`songs/${songIndex+1}.mp3`;
//         audioElement.currentTime=0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex>=9){
//         songIndex=0;
//     }else{
//     songIndex+=1;
//     }
//     audioElement.src=`songs/${songIndex+1}.mp3`;
//         audioElement.currentTime=0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
// })

// document.getElementById('previous').addEventListener('click',()=>{
//     if(songIndex<=0){
//         songIndex=0;
//     }else{
//     songIndex-=1;
//     }
//     audioElement.src=`songs/${songIndex+1}.mp3`;
//         audioElement.currentTime=0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');

// })


// By souvik //



let Songs = document.querySelectorAll('.Audios');
Array.from(Songs).forEach((button)=>{
    button.addEventListener('focus',(e)=>{
        document.getElementById('Player').src = e.target.value;
        document.getElementById('Music_name').innerHTML = e.target.name;
        document.getElementById('AudioDisplayer').style.display = 'flex';
    })
})