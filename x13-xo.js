function xo(str) {
    // you can only write your code here!
    var oCount = 0;
    var xCount = 0;
    
    // counter untuk x dan o
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'o') {
        oCount = oCount + 1;
      } else if (str[i] === 'x') {
        xCount = xCount + 1;
      }
    }
    
    // untuk menentukan value
    if (xCount === oCount) {
      return true;
    } else {
      return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true