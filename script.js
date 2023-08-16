function GetPilihanComputer(playerChoice) {
  if (playerChoice === 'gajah') {
    return 'semut';
  } else if (playerChoice === 'orang') {
    return 'gajah';
  } else {
    return 'orang';
  }
}

function getHasil(comp, player) {
  if (player == comp) 
    return 'SERI!';
  if (player == 'gajah') 
    return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') 
    return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
  if (player == 'semut') 
    return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function putar() {
  const imgComputer = document.querySelector('.img-komputer'); // Perbaikan 1
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  const interval = setInterval(function() {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval(interval); // Perbaikan 3
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0; // Perbaikan 2
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function(pil) {
  pil.addEventListener('click', function(){
    const pilihanPlayer = pil.className;
    const PilihanComputer = GetPilihanComputer(pilihanPlayer);
    const hasil = getHasil(PilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function(){
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png');
      const info = document.querySelector('.info');
      info.innerHTML = hasil ;
    }, 1000);
  });
});