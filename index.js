function ageToDays() {
            var date = document.forms["myForm"]["yearInput"].value;
            var realDate = date.replace("-", "/");
            var date1 = new Date(realDate);
            var date2 = new Date();
            timeDifference = date2.getTime() - date1.getTime();
            //dayDifference = timeDifference / (1000 * 3600 * 24);
            var timeDifference = 10000 * (1000 * 3600 * 24);
            var tenkdate = new Date(timeDifference);
            console.log(tenkdate.toString());
            //var roundedUPDayDifference = Math.floor(dayDifference)
            //document.getElementById("demo").innerHTML = "You are " + roundedUPDayDifference + " days old." + "<br>";
        
}

function reset() {
    document.getElementById("demo").innerHTML = " ";
}

var image;
var div;
function create() {
    image = document.createElement('img');
    div = document.getElementById('flex-container');
    image.src = "hd.jpg";
    div.appendChild(image);
}


function remove() {
   let allImages = document.querySelector('#flex-container').querySelectorAll('img');
   allImages[allImages.length - 1].remove();
}



function rpsGame(yourChoice) {
    
    document.getElementById('new-flex-container').style.display = 'flex';
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    var message = finalMessage(results);
    frontEnd(yourChoice.id, botChoice, message);
    showPoint(message['loser']);
}   
    
function randomToRpsInt() {
        return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
        return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0,},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0,},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0,},
    };

    var yourScore = rpsDataBase[yourChoice][computerChoice];
    var computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
    
    if(yourScore === 0) {
        return {'message': "YOU LOST!", 'color': 'red', 'loser': 'you',};
    }
    else if(yourScore === 1) { 
        return {'message': 'YOU WON!', 'color': 'green', 'loser': 'bot',};
    }
    else {
        return {'message': 'TIE!', 'color': 'blue', 'loser': null};
    }
}

function showPoint(loser) {
    let userPoint = 0;
    let botPoint = 0;
        if(loser === "you") {
            botPoint++;
            document.querySelector('#botscore').textContent = botPoint;

    }
    else if(loser === "bot") {
        userPoint++;
        document.querySelector('#userscore').textContent = userPoint;
    }
}

function frontEnd(humanImageChoice, botImageChoice, finalMessage) {
    
    let finalImages = document.querySelector('#new-flex-container').querySelectorAll('img');
    for(let i = 0; i < finalImages.length; i++) {
        finalImages[i].remove();
    }
    let finalDiv = document.querySelector('#new-flex-container').querySelectorAll('div');
    for(let i = 0; i < finalDiv.length; i++) {
        finalDiv[i].remove();
    }
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    document.getElementById('flex-container').style.display = 'none'; //


    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div'); 

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=300 width=300 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=300 width=300 style='box-shadow: 0px 10px 50px rgba(243, 38, 233, 1);'>"
    document.getElementById('new-flex-container').appendChild(humanDiv);
    document.getElementById('new-flex-container').appendChild(messageDiv);
    document.getElementById('new-flex-container').appendChild(botDiv);

}

function again() {
    document.getElementById('new-flex-container').style.display = 'none';
    document.getElementById('flex-container').style.display = 'flex';
}

let blackJackGame = {
    'you': {'scorespan': '#your-blackjack-result', 'div': '#yourbox', 'score': 0,},
    'dealer': {'scorespan': '#dealer-blackjack-result', 'div': '#dealerbox', 'score': 0,},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsmap': {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const hitSound = new Audio('sounds/Recording.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');
document.querySelector('#hit').addEventListener('click', blackJackHit);
document.querySelector('#stand').addEventListener('click', dealerLogic);
document.querySelector('#deal').addEventListener('click', blackJackDeal);
function blackJackHit() {
    if(blackJackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        console.log(YOU['score']);
    }
}

function showCard(card, activePlayer) {
    if(activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        cardImage.style.width = '90px';
        cardImage.style.height = '125px';
        cardImage.style.padding = '7px';
        cardImage.style.paddingTop = '-1px';
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackJackDeal() {
    if(blackJackGame['turnsOver'] === true) {
        blackJackGame['isStand'] = false;
        let yourImages = document.querySelector('#yourbox').querySelectorAll('img');
        for(let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        
        let dealerImages = document.querySelector('#dealerbox').querySelectorAll('img');
        for(let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#letplay').textContent = 'let\'s play';
        document.querySelector('#letplay').style.color = 'white';
        blackJackGame['turnsOver'] = true;
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
    activePlayer['score'] += blackJackGame['cardsmap'][card];
}

function showScore(activePlayer) {
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scorespan']).textContent = 'FAIL!!'
        document.querySelector(activePlayer['scorespan']).style.color = 'red';
    } else{
    document.querySelector(activePlayer['scorespan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackJackGame['isStand'] = true;
    
    while(DEALER['score'] < 16 && blackJackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1200);
    }

    blackJackGame['turnsOver'] = true;
    showResult(computeWinner());
}

function computeWinner () {
    let winner;
    if(YOU['score'] <= 21) {
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackJackGame['wins']++;
            winner = YOU;

        } else if(YOU['score'] < DEALER['score']) {
            blackJackGame['losses']++;
            winner = DEALER;

        } else if(YOU['score'] === DEALER['score']) {
            blackJackGame['draws']++;
        }

    } else if(YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackJackGame['losses']++;
        winner = DEALER;

    } else if(YOU['score'] > 21 && DEALER['score'] > 21) {
        blackJackGame['draws']++;
    }

    return winner;
}

function showResult(winner) {
    let letPlayMessage, messageColor;

    if(blackJackGame['turnsOver'] === true) {
        if(winner === YOU) {
            document.querySelector('#wins').textContent = blackJackGame['wins'];
            letPlayMessage = "YOU WON!";
            messageColor = 'yellow';
            winSound.play();
    
        } else if(winner === DEALER) {
            document.querySelector('#losses').textContent = blackJackGame['losses'];
            letPlayMessage = "YOU LOST!";
            messageColor = 'red';
            lossSound.play();
    
        } else {
            document.querySelector('#draws').textContent = blackJackGame['draws'];
            letPlayMessage = "TIE";
            messageColor = 'black';
        }
        document.querySelector('#letplay').textContent = letPlayMessage;
        document.querySelector('#letplay').style.color = messageColor;
    }
}


