var nama = 'Michael'
var peran = 'Penyihir'

if (nama ==='Ksatria') {
  console.log('Nama harus diisi!');
}

if (peran ==='') {
  console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!');
  console.log('Ada 3 peran yang dapat kamu pilih, Ksatria, Tabib atau Penyihir.');
} else if (peran === 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (peran === 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', kami akan membantu temanmu yang terluka.');
} else if (peran === 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu.');
} else {
  console.log('Halo ' + nama + ', tolong pilih ulang peran mu!');
  console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!');
}