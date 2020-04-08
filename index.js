const robot = require('robotjs');

function main() {
    console.log('Initializing...');
    sleep(4000);

    var numLoops = 0;

    while (numLoops < 5) {
        robot.moveMouseSmooth(857, 599);
        robot.mouseClick();
        numLoops++;
        sleep(8000);
    }
    
    console.log('Finished');
    
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();