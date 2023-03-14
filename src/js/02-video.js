import Player from "@vimeo/player";
import throttle from "lodash.throttle";

// отут "videoplayer-current-time" можна винести в константу
// як казав репета, наприклад CURRENT_TIME

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function(ev) {
    // console.log(ev);
    localStorage.setItem("videoplayer-current-time", ev.seconds)
    
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

