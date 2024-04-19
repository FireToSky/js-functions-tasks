// BEGIN
function solution (array) {
    let arr = array;
    let fr = [];
    arr.map((user) => fr.push(user.friends));
    fr = fr.flat();

    return fr.filter((a) => a.gender == 'female' );
}

export default solution;
// END