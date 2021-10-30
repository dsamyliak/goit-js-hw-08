var throttle = require('lodash.throttle');
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);
    
const lastSavedTime = localStorage.getItem("videoplayer-current-time");
console.log(lastSavedTime);

player.setCurrentTime(lastSavedTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle(function (timeObj) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeObj.seconds));
    // console.log("timeUpdateFunc:", timeObj.seconds);  
}, 1000));