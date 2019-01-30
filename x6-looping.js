//1. Melakukan Looping Menggunakan While
console.log('1. Melakukan Looping Menggunakan While');
console.log('LOOPING PERTAMA');

var while1 = true;
var counter1 = 2;

while (while1) {
    console.log(counter1 + ' - I love coding');
    counter1 = counter1 + 2;
    if (counter1 > 20) {
        while1 = false;
        break;
    }
}

console.log('LOOPING KEDUA')
var while2 = true;
var counter2 = 20;

while (while2) {
    console.log(counter2 + ' - I will become fullstack developer');
    counter2 = counter2 - 2;
    if (counter2 === 0) {
        while2 = false;
        break;
    }
}

//break
console.log(' ');

//2. Melakukan Looping menggunakan For
console.log('2. Melakukan Looping Menggunakan For')

var for1;
console.log('LOOPING PERTAMA')
for (for1 = 1; for1 < 21; for1 ++) {
    console.log(for1 + ' - I love coding');
}

var for2;
console.log('LOOPING KEDUA')
for (for2 = 20; for2 > 0; for2 --) {
  console.log(for2 + ' - I will become fullstack developer')
}

//break
console.log(' ')


//3. Angka Ganjil dan Genap
console.log('3. Angka Ganjil dan Genap')


// ganjil genap; increment 1
console.log('Ganjil dan Genap; increment 1')
var counter3 = 1;
for (counter3 = 1; counter3 < 101; counter3++) {
  if (counter3%2 === 0) {
    console.log(counter3 + ' - GENAP')
  } else {
    console.log(counter3 + ' - GANJIL')
  }
}

//break
console.log(' ')

//increment2; kelipatan 3
console.log('Increment 2; kelipatan 3')
var counter3 = 1;
for (counter3 = 1; counter3 < 101; counter3+= 2) {
  if (counter3%3 === 0) {
    console.log(counter3 + ' kelipatan 3')
  }
}

//break
console.log(' ')

//increment 5; kelipatan 6
console.log('Increment 5; kelipatan 6')
var counter3 = 1;
for (counter3 = 1; counter3 < 101; counter3+= 5) {
  if (counter3%6 === 0) {
    console.log(counter3 + ' kelipatan 6')
  }
}

//break
console.log(' ')

//increment 9; kelipatan 10
console.log('increment 9; kelipatan 10')
var counter3 = 1;
for (counter3 = 1; counter3 < 101; counter3+= 9) {
  if (counter3%10 === 0) {
    console.log(counter3 + ' kelipatan 10')
  }
}