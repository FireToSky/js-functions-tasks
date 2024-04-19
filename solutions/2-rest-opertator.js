import _ from 'lodash';

// BEGIN
function Average (...nums) {
    let f = _.sum(nums) / nums.length;
    if (nums.length === 0) {
        f = null;
    } 
    return f;
}

export default Average;
// END