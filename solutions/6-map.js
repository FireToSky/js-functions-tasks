// BEGIN
function solution (array) {
    let arr = array;
    let sol = [];
    arr.map((user) => sol.push(user.children));
    return sol.flat();
}

export default solution;
// END