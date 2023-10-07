const countdownContainer = document.getElementById('countdown');

function countdownFromTen(callback) {
    let count = 10;

    function next() {
        if (count >= 1) {
            countdownContainer.textContent = count;
            count--;
            setTimeout(next, 1000);
        } else {
            callback();
        }
    }

    next();
}

function displayMessage() {
    countdownContainer.textContent = 'Happy Independence Day';
}

countdownFromTen(displayMessage);
