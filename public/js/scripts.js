const changeBackgroundColour = () => {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = colour;
}

$(document).ready(function () {
    $('#clickMeButton').click(() => {
        changeBackgroundColour();
    })
});