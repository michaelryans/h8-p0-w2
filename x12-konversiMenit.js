function konversiMenit(menit) {
    var showHour = 0;
    var showMinute = 0;
    
    showHour = Math.floor(menit/60);
    showMinute = menit - (showHour*60);
  
    if (showMinute < 10) {
      showMinute.toString()
      showMinute = ('0'+ (showMinute).toString())
    }
  
    return (showHour + ':' + showMinute);
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00