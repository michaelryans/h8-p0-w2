var nama = ''
var peran = 'Tabib'

if (nama ==='') {
  console.log('Nama harus diisi!');
} else if (peran ==='') {
  console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!');
  console.log('Ada 3 peran yang dapat kamu pilih, Ksatria, Tabib atau Penyihir.\n Peran harus diisi terlebih dahulu!');
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
}