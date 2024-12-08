const videoElement = document.querySelector('video');

videoElement.onpause = (event) => {
    const currentTime = videoElement.currentTime;
    console.log(`Video paused at ${currentTime} seconds.`);
};
