let prompt = require('prompt-sync')();
let speed = parseInt(prompt("input the speed: "));
function checkSpeed() {
    if (speed < 70) {
        console.log("okay");
    } else {
        let excess = speed - 70;
        let points = (excess - excess % 5) / 5;
        if (points < 12) {
            console.log(points)
        } else {
            console.log("licence suspended")
        }
    }
}
checkSpeed();
