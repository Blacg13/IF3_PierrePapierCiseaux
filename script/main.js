let hPierre = document.getElementById('hPierre');
let hPapier = document.getElementById('hPapier');
let hCiseaux = document.getElementById('hCiseaux');
let oHand = document.getElementById('oHand');
let resultat = document.getElementById('result');
let p_end = document.querySelector('#nomansland>p:last-of-type');

let hpoints = document.getElementById('hpoints');
let humanPoints = 0;
let opoints = document.getElementById('opoints');
let ordiPoints = 0;
hpoints.innerText = humanPoints;
opoints.innerText = ordiPoints;
let oReponse = [
  './img/rock.png',
  './img/washing-hands.png',
  './img/scissors.png',
];
let currentIndex = 0;

let isRockClicked = false;
let isPaperClicked = false;
let isScissorsClicked = false;

const STAT_H = document.getElementById('statH');
let humanStat = 0;
STAT_H.innerText = humanStat;
const STAT_O = document.getElementById('statO');
let ordiStat = 0;
STAT_O.innerText = ordiStat;

//! the game begins
hPierre.addEventListener('click', () => {
  isRockClicked = true;
  p_end.innerText = "";
  desactivateImg();
  let mathGame = Math.floor(Math.random() * 3);
  let drum = setInterval(() => {
    oHand.src = oReponse[currentIndex++];
    if (currentIndex === oReponse.length) {
      currentIndex = 0;
    }
  }, 70);
  setTimeout(() => {
    clearInterval(drum);
    oHand.src = oReponse[mathGame];
    result(mathGame);
  }, 3000);
});
hPapier.addEventListener('click', () => {
  isPaperClicked = true;
  p_end.innerText = "";
  desactivateImg();
  let mathGame = Math.floor(Math.random() * 3);
  let drum = setInterval(() => {
    oHand.src = oReponse[currentIndex++];
    if (currentIndex === oReponse.length) {
      currentIndex = 0;
    }
  }, 70);
  setTimeout(() => {
    clearInterval(drum);
    oHand.src = oReponse[mathGame];
    result(mathGame);
  }, 3000);
});
hCiseaux.addEventListener('click', () => {
  isScissorsClicked = true;
  p_end.innerText = "";
  desactivateImg();
  let mathGame = Math.floor(Math.random() * 3);
  let drum = setInterval(() => {
    oHand.src = oReponse[currentIndex++];
    if (currentIndex === oReponse.length) {
      currentIndex = 0;
    }
  }, 70);
  setTimeout(() => {
    clearInterval(drum);
    oHand.src = oReponse[mathGame];
    isScissorsClicked = true;
    result(mathGame);
  }, 3000);
});
// desactivate img
function desactivateImg() {
  hPierre.disabled = true;
  hPapier.disabled = true;
  hCiseaux.disabled = true;
}
// result
function result(mathGame) {
  switch (mathGame) {
    case 0: // résultat : pierre
      if (isScissorsClicked == true) {
        resultat.innerText = 'Ciseaux perd contre pierre.';
        opoints.innerText = ++ordiPoints;
        isScissorsClicked = false;
      } else {
        if (isPaperClicked == true) {
          resultat.innerText = 'Papier gagne contre pierre.';
          hpoints.innerText = ++humanPoints;
          isPaperClicked = false;
        } else {
          resultat.innerText = 'Les deux pierres sont ex aequo.';
          isRockClicked = false;
        }
      }
      break;
    case 1: //résultat : papier
      if (isRockClicked == true) {
        resultat.innerText = 'Pierre perd contre papier.';
        opoints.innerText = ++ordiPoints;
        isRockClicked = false;
      } else {
        if (isScissorsClicked == true) {
          resultat.innerText = 'Ciseaux gagne contre papier.';
          hpoints.innerText = ++humanPoints;
          isScissorsClicked = false;
        } else {
          resultat.innerText = 'Les deux papiers sont ex aequo.';
          isPaperClicked = false;
        }
      }
      break;
    case 2: // résultat : ciseaux
      if (isPaperClicked == true) {
        resultat.innerText = 'Papier perd contre ciseaux.';
        opoints.innerText = ++ordiPoints;
        isPaperClicked = false;
      } else {
        if (isRockClicked == true) {
          resultat.innerText = 'Pierre gagne contre ciseaux.';
          hpoints.innerText = ++humanPoints;
          isRockClicked = false;
        } else {
          resultat.innerText = 'Les deux ciseaux sont ex aequo.';
          isScissorsClicked = false;
        }
      }
      break;
  }
  //! resolution de la partie
  if (humanPoints >= 3 || ordiPoints >= 3) {
    if (humanPoints >= 3) {
      p_end.innerText = "Vous avez gagné la manche !";
      STAT_H.innerText = ++humanStat; 
    } else {
      p_end.innerText = "L'ordinateur a gagné la manche !";
      STAT_O.innerText = ++ordiStat;
    }
    refreshpoints();     
  }
}

//! refresh
const refresh = document.getElementById('rejouer');
refresh.addEventListener('click', () => {
 refreshpoints();
});
//! erase
const erase = document.getElementById('effacer');
erase.addEventListener('click', () => {
  refreshpoints();
  refreshStat();
});
// functions : 
let refreshpoints = () => {
  humanPoints = 0;
  hpoints.innerText = humanPoints;
  ordiPoints = 0;
  opoints.innerText = ordiPoints;
}
let refreshStat = () => {
  humanStat = 0;
  STAT_H.innerText = humanStat;
  ordiStat = 0;
  STAT_O.innerText = ordiStat;
}