import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe')
const player = new Player(iframe)

player.on('timeupdate', throttle(onPlay, 1000))

function onPlay(data){
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}

let time = 0
if (localStorage) {
    try {
        time = JSON.parse(localStorage.getItem("videoplayer-current-time"))
    } catch (error) {}   
}else{
    time = 0
}
player.setCurrentTime(time)