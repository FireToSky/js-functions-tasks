// BEGIN
function number (num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    if (count != 2) {
        return false;
    } else {
        return true;
    }
}

function solution (a) {
    if (number(a) === false) {
        console.log('no');
    } else {
        console.log('yes');
    }
}


export default solution;
// END