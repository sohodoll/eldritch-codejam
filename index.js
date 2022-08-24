import greenCards from './data/mythicCards/green/index.js';
import blueCards from './data/mythicCards/blue/index.js';
import brownCards from './data/mythicCards/brown/index.js';
import ancients from './data/ancients.js'

const cardBox = document.querySelector('.card-filler');
const cardImg = document.createElement('img');
const shuffleButton = document.querySelector('.shuffle');
const deckBox = document.querySelector('.deck');
const ancientImage = document.querySelectorAll('.ancient');
const difficulty = document.querySelectorAll('.complex');
const greenCount1 = document.querySelector('.green1');
const brownCount1 = document.querySelector('.brown1');
const blueCount1 = document.querySelector('.blue1');
const greenCount2 = document.querySelector('.green2');
const brownCount2 = document.querySelector('.brown2');
const blueCount2 = document.querySelector('.blue2');
const greenCount3 = document.querySelector('.green3');
const brownCount3 = document.querySelector('.brown3');
const blueCount3 = document.querySelector('.blue3');


for (let i = 0; i < ancientImage.length; i++) {
    ancientImage[i].addEventListener('click', function () {
      ancientImage[0].classList.remove('active');
      ancientImage[1].classList.remove('active');
      ancientImage[2].classList.remove('active');
      ancientImage[3].classList.remove('active');
      ancientImage[i].classList.add('active')
    })
  }

for (let i = 0; i < difficulty.length; i++) {
  difficulty[i].addEventListener('click', function () {
    difficulty[0].classList.remove('active');
    difficulty[1].classList.remove('active');
    difficulty[2].classList.remove('active');
    difficulty[3].classList.remove('active');
    difficulty[4].classList.remove('active');
    difficulty[i].classList.add('active')
  })
}

shuffleButton.addEventListener('click', function() {
  shuffleButton.innerText = 'Shuffled!';
  shuffleButton.style.color = 'white';
})

cardBox.appendChild(cardImg);

//aza normal green=5, brown=9, blue=2;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const createDecks = () => {

  let greenDeck = [];
  let brownDeck = [];
  let blueDeck = [];
  let stage1Deck = [];
  let stage2Deck = [];
  let stage3Deck = [];
  let fullPlayDeck = [];

  const getCardIndex = (n, total) => {
    const nums = new Set();
    while(nums.size < n) {
      nums.add(Math.floor(Math.random() * total) + 0);
    }
    return Array.from(nums);
  }

  getCardIndex(5, 18).forEach(element => {
    greenDeck.push(greenCards[element]);
  })

  getCardIndex(9, 21).forEach(element => {
    brownDeck.push(brownCards[element]);
  })

  getCardIndex(2, 12).forEach(element => {
    blueDeck.push(blueCards[element]);
  })



  //stage 1

  let greenIndex = getCardIndex(1, greenDeck.length)[0];
  let brownIndex = getCardIndex(1, brownDeck.length)[0];
  let blueIndex = getCardIndex(1, blueDeck.length)[0];
  
  stage1Deck.push(greenDeck[greenIndex]);
  greenDeck.splice(greenIndex, 1);

  stage1Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  brownIndex = getCardIndex(1, brownDeck.length-1);

  stage1Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  stage1Deck.push(blueDeck[blueIndex]);
  blueDeck.splice(blueIndex, 1);

  //stage 2

  greenIndex = getCardIndex(1, greenDeck.length)[0];

  stage2Deck.push(greenDeck[greenIndex]);
  greenDeck.splice(greenIndex, 1);

  greenIndex = getCardIndex(1, greenDeck.length)[0];

  stage2Deck.push(greenDeck[greenIndex]);
  greenDeck.splice(greenIndex, 1);

  brownIndex = getCardIndex(1, brownDeck.length-1);

  stage2Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  brownIndex = getCardIndex(1, brownDeck.length-1);

  stage2Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  brownIndex = getCardIndex(1, brownDeck.length-1);

  stage2Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  blueIndex = getCardIndex(1, blueDeck.length)[0];
  stage2Deck.push(blueDeck[blueIndex]);
  blueDeck.splice(blueIndex, 1);

  //stage 3

  greenIndex = getCardIndex(1, greenDeck.length)[0];

  stage3Deck.push(greenDeck[greenIndex]);
  greenDeck.splice(greenIndex, 1);

  greenIndex = getCardIndex(1, greenDeck.length)[0];

  stage3Deck.push(greenDeck[greenIndex]);
  greenDeck.splice(greenIndex, 1);

  brownIndex = getCardIndex(1, brownDeck.length-1);

  stage3Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  brownIndex = getCardIndex(1, brownDeck.length-1);

  stage3Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  brownIndex = getCardIndex(1, brownDeck.length-1);

  stage3Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  brownIndex = getCardIndex(1, brownDeck.length-1);

  stage3Deck.push(brownDeck[brownIndex]);
  brownDeck.splice(brownIndex, 1);

  const shuffledStage1Deck = shuffle(stage1Deck);
  const shuffledStage2Deck = shuffle(stage2Deck);
  const shuffledStage3Deck = shuffle(stage3Deck);

  fullPlayDeck = shuffledStage1Deck.concat(shuffledStage2Deck, shuffledStage3Deck);

  let stage1GreenCount = 0;
  let stage1BrownCount = 0;
  let stage1BlueCount = 0;
  let stage2GreenCount = 0;
  let stage2BrownCount = 0;
  let stage2BlueCount = 0;
  let stage3GreenCount = 0;
  let stage3BrownCount = 0;
  let stage3BlueCount = 0;

  console.log(stage1Deck, stage2Deck, stage3Deck, fullPlayDeck);

  stage1Deck.forEach(element =>{
    if (element['color'] === 'green') {
      stage1GreenCount = stage1GreenCount + 1;
    } if (element['color'] === 'brown') {
      stage1BrownCount++;
    } if (element['color'] === 'blue') {
      stage1BlueCount++;
    }
  })

  stage2Deck.forEach(element =>{
    if (element['color'] === 'green') {
      stage2GreenCount = stage2GreenCount + 1;
    } if (element['color'] === 'brown') {
      stage2BrownCount++;
    } if (element['color'] === 'blue') {
      stage2BlueCount++;
    }
  })

  stage3Deck.forEach(element =>{
    if (element['color'] === 'green') {
      stage3GreenCount = stage3GreenCount + 1;
    } if (element['color'] === 'brown') {
      stage3BrownCount++;
    } if (element['color'] === 'blue') {
      stage3BlueCount++;
    }
  })

  greenCount1.innerText = `${stage1GreenCount}`;
  brownCount1.innerText = `${stage1BrownCount}`;
  blueCount1.innerText = `${stage1BlueCount}`;
  greenCount2.innerText = `${stage2GreenCount}`;
  brownCount2.innerText = `${stage2BrownCount}`;
  blueCount2.innerText = `${stage2BlueCount}`;
  greenCount3.innerText = `${stage3GreenCount}`;
  brownCount3.innerText = `${stage3BrownCount}`;
  blueCount3.innerText = `${stage3BlueCount}`;

  let i = 0;

  const showCard = () => {
    if (i<fullPlayDeck.length) {
      let source = fullPlayDeck[i]['cardFace'];
      cardImg.src = source;
      if (stage1Deck.length>0) {
        if (fullPlayDeck[i]['color']==='green') {
        stage1GreenCount = stage1GreenCount - 1;
        stage1Deck.pop();
      } else if (fullPlayDeck[i]['color']==='brown') {
        stage1BrownCount = stage1BrownCount - 1;
        stage1Deck.pop();
      } else if (fullPlayDeck[i]['color']==='blue') {
        stage1BlueCount = stage1BlueCount - 1;
        stage1Deck.pop();
      }
      }
      if (stage1Deck.length===0&&stage2Deck.length>0&&i>3) {
        if (fullPlayDeck[i]['color']==='green') {
          stage2GreenCount = stage2GreenCount - 1;
          stage2Deck.pop();
        } else if (fullPlayDeck[i]['color']==='brown') {
          stage2BrownCount = stage2BrownCount - 1;
          stage2Deck.pop();
        } else if (fullPlayDeck[i]['color']==='blue') {
          stage2BlueCount = stage2BlueCount - 1;
          stage2Deck.pop();
        }
      }
      if (stage2Deck.length===0&&stage3Deck.length>0&&i>9) {
        if (fullPlayDeck[i]['color']==='green') {
          stage3GreenCount = stage3GreenCount - 1;
          stage3Deck.pop();
        } else if (fullPlayDeck[i]['color']==='brown') {
          stage3BrownCount = stage3BrownCount - 1;
          stage3Deck.pop();
        } else if (fullPlayDeck[i]['color']==='blue') {
          stage3BlueCount = stage3BlueCount - 1;
          stage3Deck.pop();
        }
      }
      console.log(i);
      i = i + 1;

    } else {
      cardImg.src = 'https://i.pinimg.com/originals/06/82/e2/0682e26f337825b366e8e3e3e0003ad1.jpg'
    }
    greenCount1.innerText = `${stage1GreenCount}`;
    brownCount1.innerText = `${stage1BrownCount}`;
    blueCount1.innerText = `${stage1BlueCount}`;
    greenCount2.innerText = `${stage2GreenCount}`;
    brownCount2.innerText = `${stage2BrownCount}`;
    blueCount2.innerText = `${stage2BlueCount}`;
    greenCount3.innerText = `${stage3GreenCount}`;
    brownCount3.innerText = `${stage3BrownCount}`;
    blueCount3.innerText = `${stage3BlueCount}`;
  }

  deckBox.addEventListener('click', showCard);
}

shuffleButton.addEventListener('click', createDecks);









