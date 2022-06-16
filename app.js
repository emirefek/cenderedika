//Deploying event listeners
var notes = ["red", "fad", "sold", "lad", "si"];
var audioFiles = ['reD.mp3', 'faD.mp3', 'solD.mp3', 'laD.mp3', 'si.mp3'];

var buttonQueryArray = document.querySelector(".buttons").querySelectorAll("button");
//

function audioButton(note, file) {
    this.note = note;
    this.file = file;
}


for (var i = 0; i <= 4; i++) {
    buttonQueryArray[i].addEventListener("click", buttonClicked);
};

function buttonClicked() {
    var notePressed = notes.indexOf(this.id);
    notePlayer(notePressed + 1)
};

//Probably there are better ways then using switchcase in here but I just wanted to practice
document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case '1':
            notePlayer(1);
            break;
        case '2':
            notePlayer(2);
            break;
        case '3':
            notePlayer(3);
            break;
        case '4':
            notePlayer(4);
            break;
        case '5':
            notePlayer(5);
            break;
        default:
            console.log('Not defined keyboard press')
    }
}
);

function notePlayer(nIndex) {
    var audio = new Audio('sounds/' + audioFiles[nIndex - 1]);
    audio.play();

    buttonAnimation(nIndex);
}

function buttonAnimation(nIndex) {
    buttonQueryArray[nIndex - 1].classList.add('pressed')
    setTimeout(function () {
        buttonQueryArray[nIndex - 1].classList.remove('pressed')
    }, 150);
}


document.querySelector(".autoplaybtn").addEventListener("click", autoPlay);
async function autoPlay() {
    console.log("autoPlay started")
    var sleepers = 600

    notePlayer(1);
    await sleep(sleepers);
    notePlayer(4);
    await sleep(sleepers);
    notePlayer(3);
    await sleep(sleepers);
    notePlayer(5);
    await sleep(sleepers);
    notePlayer(2);
    await sleep(sleepers);
    notePlayer(4);
    await sleep(sleepers);
    notePlayer(1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}