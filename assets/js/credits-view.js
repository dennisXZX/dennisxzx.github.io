// secret activation keys
const keys = {
    D: false,
    M: false,
    S: false
};

// background music
// const audio = new Audio('https://vocaroo.com/media_command.php?media=s02kWRzNIozb&command=download_mp3');

// monitor the keypress for the credits view
$('body').keydown((key) => {
    if (event.keyCode === 68) {
        keys['D'] = true;
    } else if (event.keyCode === 77) {
        keys['M'] = true;
    } else if (event.keyCode === 83) {
        keys['S'] = true;
    } else {
        return;
    }

    if (keys['D'] && keys['M'] && keys['S']) {
        // show the secret credit view
        $('#credits-wrapper').css('display', 'block');

        // play the bg music
        // audio.play();
    }
});

$('body').keyup((key) => {
    if (event.keyCode === 68) {
        keys['D'] = false;
    } else if (event.keyCode === 77) {
        keys['M'] = false;
    } else if (event.keyCode === 83) {
        keys['S'] = false;
    } else {
        return;
    }
});

// close the credit view on a click event
$('#credits-wrapper').on('click', () => {
    $('#credits-wrapper').css('display', 'none');

    // pause the background music and reset to the beginning
    // audio.pause();
    // audio.currentTime = 0.0;
});
