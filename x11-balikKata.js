function balikKata(kata) {
    var room = '';
    for (var i = 0; i < kata.length; i++) {
      var indexDariBelakang = kata.length-1 - i;
      room += kata[indexDariBelakang];
    }
    return room;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS