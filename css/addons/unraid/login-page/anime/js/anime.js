(function () {
    var VIDEO_URL = 'https://olivier-vromans.github.io/theme.park/css/addons/unraid/login-page/anime/video/login-video.mp4';

    var wrap = document.createElement('div');
    wrap.className = 'background-wrap';

    var video = document.createElement('video');
    video.id = 'video-bg-elem';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('preload', 'auto');

    var source = document.createElement('source');
    source.src = VIDEO_URL;
    source.type = 'video/mp4';

    video.appendChild(source);
    wrap.appendChild(video);
    document.body.insertBefore(wrap, document.body.firstChild);
})();
