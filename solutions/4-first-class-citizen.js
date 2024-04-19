const run = (text) => {
    // BEGIN
    function takeLast (string, n) {
      if (string.length < 4) {
        return null;
      }
      let a = string.slice(-4);
      return a.split('').reverse().join('');
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;