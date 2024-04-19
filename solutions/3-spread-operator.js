// BEGIN
/* Первая версия кода, почему-то работала неправмльно (месяца правильно считались, а не с нуля)
function date (...arr) {
    let array = [];
    for (const a of arr) {
        let x = new Date(a);
        array.push(x.toDateString());
    }
    return array;
}
*/ 
function date (...arr) {
  let array = [];
for (const a of arr) {
  let [year, month, day] = a;
  let dateObj = new Date(year, month, day); 
  array.push(dateObj.toDateString());
}
  return array;
}


export default date;
// END