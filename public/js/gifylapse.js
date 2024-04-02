// Grab elements, create settings, etc.
var video = document.getElementById('videoElement');
var output = document.getElementById('image');


var logo_image = new Image();
logo_image.src = 'public/img/gifylapse.png'; 
logo_image.height = 32;
logo_image.width = 32;
logo_image.crossOrigin = 'Anonymous';
logo_image.onload = function () { console.log('loaded'); };

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(err => console.log(err));
}

var timeId;
document.getElementById('start').addEventListener('click', function () {
    console.log('startedddddd')
    var count = 0;
    timeId = setInterval(function () {
        var div = document.getElementById('lapse');
        var canvas = document.createElement('canvas');
        canvas.height = 480;
        canvas.width = 640;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, 640, 480);
        context.drawImage(logo_image, 0, 410);
        context.translate(640, 0);
        context.scale(-1, 1);
        context.drawImage(canvas, 0, 0);
        div.appendChild(canvas);
    }, 2000);
    $('#start').disabled = true;
    $('#stop').disabled = false;
});


document.getElementById('stop').addEventListener('click', function () {
    clearInterval(timeId);
    console.log('ruk')
    var imgs = document.getElementById('lapse').children;
    var gif = new GIF({ workers: 2, quality: 10 });

    for (var i = 0; i < imgs.length; i++) {
        gif.addFrame(imgs[i], {delay: 200})
    }
    // clear all elements
    $('#lapse').empty();

    gif.on('finished', function(blob) {
        var url = URL.createObjectURL(blob)
        var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
        img.attr('id', 'gif');
        img.attr('src', url);
        img.appendTo('#result');
        img.wrap('<a href="' + url+ '" download="gifylapse" />')

    });
    gif.render();
    $('#start').disabled = false;
    $('#stop').disabled = true;
});


