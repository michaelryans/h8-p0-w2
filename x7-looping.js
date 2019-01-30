//Looping
console.log('1 . Menyusun Barisan Bintang')

var rows1 = 5; //input the number of rows
var i; //pengulangan baris

for (i=0; i< rows1; i++) {
    console.log('*')
}

console.log("\n 2. Menyusun Barisan Bintang Dengan Nested Looping")
var rows2 = 5; //input the number of columns
var j; //pengulangan kolom
var star2 =''

for (i = 0; i < rows2; i++) {
  for (j = 0; j < rows2; j++) {
      star2 = star2.concat('*');
  } 
  console.log(star2);
  star2 = ''
}
 
console.log("\n 3. Menyusun Barisan Tangga Bintang dengan Nested Looping")
var rows3 = 5
var star3 =''

for (j = 0; j < rows3; j++) {
  star3 = star3.concat('*');
  console.log (star3)
}