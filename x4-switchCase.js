
var tanggal = 32; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 0; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 0; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)


if (tanggal < 1 || tanggal > 31) {
  tanggal = '(input tanggal belum sesuai)'
}

if (tahun < 1900 || tahun > 2200) {
  tahun = '(input tahun masih belum sesuai)'
}

switch (bulan) {
    case 1: var bulan = 'Januari'
      break;
    case 2: var bulan = 'Februari' 
      break;
    case 3: var bulan = 'Maret' 
      break;
    case 4: var bulan = 'April'
      break;
    case 5: var bulan = 'Mei' 
      break;
    case 6: var bulan = 'Juni' 
      break;
    case 7: var bulan = 'Juli' 
      break;
    case 8: var bulan = 'Agustus' 
      break;
    case 9: var bulan = 'September' 
      break;
    case 10: var bulan = 'Oktober' 
      break;
    case 11: var bulan = 'November' 
      break;
    case 12: var bulan = 'Desember' 
      break;
    default: var bulan = '(Input bulan masih belum sesuai)'
}

//Output
console.log(tanggal + ' ' + bulan + ' ' + tahun);