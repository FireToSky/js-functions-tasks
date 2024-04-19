import _ from 'lodash';

// BEGIN
function takeOldest(array, n = 1) {
    let arr = _.sortBy(array, [function(o) { return Date.parse(o.birthday); }]);
    return arr.slice(0, n);
}

export default takeOldest;
// END