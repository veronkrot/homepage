var clickCount = 0;

window.onload = function () {
    enableGameEasterEgg();
    enableVideoEasterEgg();
};


function enableVideoEasterEgg() {
    var easterEgg = document.getElementsByClassName('avatar-wrapper')[0];
    easterEgg.onclick = function () {
        setTimeout(function () {
            clickCount++;
            document.getElementsByTagName('audio')[0].play();
        }, 500);
        if (clickCount === 3) {
            window.open('https://www.youtube.com/watch?v=QxKOw_khRM0', '_blank');
            clickCount = 0;
        } else if (clickCount === 2) {
            window.open('http://www.nooooooooooooooo.com/', '_blank');
        }
    };
}

function enableGameEasterEgg() {
    var easterEgg = document.getElementById('easterEgg');
    easterEgg.onclick = function () {
        window.open('https://veronkrot.herokuapp.com/', '_blank');
    };
}
