// BEGIN
function groupByProperty(objects, property) {
    return objects.reduce((grouped, obj) => {
      const propValue = obj[property];
      if (!grouped[propValue]) {
        grouped[propValue] = [];
      }
      grouped[propValue].push(obj);
      return grouped;
    }, {});
  }
export default groupByProperty;
// END