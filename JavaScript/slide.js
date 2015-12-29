var toggle = 0;
window.onload = function() {
    toggle = 0;
    document.getElementById("slide").style.position = "absolute";
    document.getElementById("slide").style.right = "-120px";
};

function show() {
    if (parseInt(document.getElementById("slide").style.right) <= -5) {
        document.getElementById("slide").style.right = parseInt(document.getElementById("slide").style.right) + 5 + "px";
        setTimeout(show, 5);
    }
}

function hide() {
    if (parseInt(document.getElementById("slide").style.right) >= -115) {
        document.getElementById("slide").style.right = parseInt(document.getElementById("slide").style.right) - 5 + "px";
        setTimeout(hide, 5);
    }
}

function menuToggle() {
    if (toggle == 0) {
        show();
        toggle = 1;
    } else if (toggle == 1) {
        hide();
        toggle = 0;
    }
}
