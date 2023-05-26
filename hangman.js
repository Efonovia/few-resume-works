let canvas = document.querySelector("#canvas");
ctx = canvas.getContext('2d');
ctx.fillStyle = "rgb(155, 88, 0)";
ctx.fillRect(240, 600, 250, 20);  // BASE
ctx.fillRect(360, 80, 15, 520); // POLE
ctx.fillRect(260, 80, 100, 10); // TOP

ctx.beginPath();                                            //CHAIN 1
ctx.ellipse(270, 92, 3, 6, 2 * Math.PI, 0, 2 * Math.PI);    //CHAIN 1
ctx.stroke();                                               //CHAIN 1

ctx.beginPath();                                            //CHAIN 2
ctx.ellipse(270, 100, 3, 6, 2 * Math.PI, 0, 2 * Math.PI);   //CHAIN 2
ctx.stroke();                                               //CHAIN 2

ctx.beginPath();                                            //CHAIN 3
ctx.ellipse(270, 108, 3, 6, 2 * Math.PI, 0, 2 * Math.PI);   //CHAIN 3
ctx.stroke();                                               //CHAIN 3

ctx.beginPath();                                            //CHAIN 4
ctx.ellipse(270, 116, 3, 6, 2 * Math.PI, 0, 2 * Math.PI);   //CHAIN 4
ctx.stroke();                                               //CHAIN 4

ctx.beginPath();                                            //CHAIN 5                               
ctx.ellipse(270, 124, 3, 6, 2 * Math.PI, 0, 2 * Math.PI);   //CHAIN 5
ctx.stroke();                                               //CHAIN 5

ctx.beginPath();                                            //CHAIN 6
ctx.ellipse(270, 132, 3, 6, 2 * Math.PI, 0, 2 * Math.PI);   //CHAIN 6
ctx.stroke();                                               //CHAIN 6

ctx.beginPath();                                            //CHAIN 7
ctx.ellipse(270, 140, 3, 6, 2 * Math.PI, 0, 2 * Math.PI);   //CHAIN 7
ctx.stroke();                                               //CHAIN 7

ctx.fillStyle = "Green";
ctx.fillRect(0, 620, 500, 40);


let sports = [
    "basketball",
    "tennis",
    "baseball",
    "golf",
    "running",
    "volleyball",
    "badminton",
    "swimming",
    "boxing",
    "table-tennis",
    "skiing",
    "ice-skating",
    "cricket",
    "rugby",
    "pool",
    "darts",
    "football",
    "bowling",
    "ice-hockey",
    "surfing",
    "karate",
    "horse-racing",
    "snowboarding",
    "cycling",
    "archery",
    "fishing",
    "gymnastics",
    "taekwondo",
    "fencing",
    "water-skiing",
    "jet-skiing",
    "scuba-diving",
    "judo",
    "wind-surfing",
    "kickboxing",
    "sky-diving",
    "hang-gliding"
]

let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Botswana",
    "Brazil",
    "Bulgaria",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Ecuador",
    "Egypt",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Nicaragua",
    "Niue",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Paraguay",
    "Peru",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Rwanda",
    "Samoa",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "Spain",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Tajikistan",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]

let clubs = [
    "AC-Milan",
    "Inter-Milan",
    "Napoli",
    "Juventus",
    "Atalanta",
    "Lazio",
    "Fiorentina",
    "Roma",
    "Verona",
    "Sassuolo",
    "Torino",
    "Bologna",
    "Empoli",
    "Sampdoria",
    "Udinese",
    "Spezia",
    "Cagliari",
    "Venezia",
    "Genoa",
    "Salernitana",
    "Liverpool",
    "Arsenal",
    "West-Ham",
    "Chelsea",
    "Southampton",
    "Tottenham",
    "Leicester",
    "Wolverhampton",
    "Everton",
    "Aston-Villa",
    "Newcastle",
    "Brighton",
    "Leeds",
    "Burnley",
    "Norwich",
    "Watford",
    "Real-Madrid",
    "Sevilla",
    "real-Betis",
    "Villarreal",
    "Barcelona",
    "Valencia",
    "Celta-vigo",
    "Osasuna",
    "Espanyol",
    "Elche",
    "Getafe",
    "Mallorca",
    "Granada",
    "Alaves",
    "Cádiz",
    "Levante",
    "Dortmund",
    "Marseille",
    "Benfica",
]

let names = [
    "James",
    "mary",
    "robert",
    "patricia",
    "john",
    "jennifer",
    "michael",
    "linda",
    "william",
    "elizabeth",
    "david",
    "barbara",
    "richard",
    "susan",
    "joseph",
    "jessica",
    "thomas",
    "sarah",
    "charles",
    "karen",
    "christopher",
    "nancy",
    "daniel",
    "lisa",
    "matthew",
    "betty",
    "anthony",
    "margaret",
    "mark",
    "sandra",
    "donald",
    "ashley",
    "steven",
    "kimberly",
    "paul",
    "emily",
    "andrew",
    "donna",
    "joshua",
    "michelle",
    "kenneth",
    "dorothy",
    "kevin",
    "carol",
    "brian",
    "amanda",
    "george",
    "melissa",
    "edward",
    "deborah",
    "ronald",
    "stephanie",
    "timothy",
    "rebecca",
    "jason",
    "sharon",
    "jeffrey",
    "laura",
    "ryan",
    "cynthia",
    "jacob",
    "kathleen",
    "gary",
    "amy",
    "nicholas",
    "shirley",
    "eric",
    "angela",
    "jonathan",
    "helen",
    "stephen",
    "anna",
    "larry",
    "brenda",
    "justin",
    "pamela",
    "scott",
    "nicole",
    "brandon",
    "emma",
    "benjamin",
    "samantha",
    "samuel",
    "katherine",
    "gregory",
    "christine",
    "frank",
    "debra",
    "alexander",
    "rachel",
    "raymond",
    "catherine",
    "patrick",
    "carolyn",
    "jack",
    "janet",
    "dennis",
    "ruth",
    "jerry",
    "maria",
    "tyler",
    "heather",
    "aaron",
    "diane",
    "jose",
    "virginia",
    "adam",
    "julie",
    "henry",
    "joyce",
    "nathan",
    "victoria",
    "douglas",
    "olivia",
    "zachary",
    "kelly",
    "peter",
    "christina",
    "kyle",
    "lauren",
    "walter",
    "joan",
    "ethan",
    "evelyn",
    "jeremy",
    "judith",
    "harold",
    "megan",
    "keith",
    "cheryl",
    "christian",
    "andrea",
    "roger",
    "hannah",
    "noah",
    "martha",
    "gerald",
    "jacqueline",
    "carl",
    "frances",
    "terry",
    "gloria",
    "sean",
    "ann",
    "austin",
    "teresa",
    "arthur",
    "kathryn",
    "lawrence",
    "sara",
    "jesse",
    "janice",
    "dylan",
    "jean",
    "bryan",
    "alice",
    "joe",
    "madison",
    "jordan",
    "doris",
    "billy",
    "abigail",
    "bruce",
    "julia",
    "albert",
    "judy",
    "grace",
    "gabriel",
    "denise",
    "logan",
    "amber",
    "alan",
    "marilyn",
    "juan",
    "beverly",
    "wayne",
    "danielle",
    "roy",
    "theresa",
    "ralph",
    "sophia",
    "randy",
    "marie",
    "eugene",
    "diana",
    "vincent",
    "brittany",
    "russell",
    "natalie",
    "elijah",
    "isabella",
    "louis",
    "charlotte",
    "bobby",
    "rose",
    "philip",
    "alexis",
    "johnny",
    "kayla",
]

let superheroes = [
    "iron-man",
    "spiderman",
    "vision",
    "Dr-strange",
    "hulk",
    "hawkeye",
    "falcon",
    "antman",
    "batman",
    "superman",
    "robin",
    "aquaman",
    "flash",
    "starlord",
    "drax",
    "rocket",
    "groot",
    "thor",
]

let hangmanWords = [
    sports,
    countries,
    clubs,
    names,
    superheroes,
]

let letter;
let keyActions = {
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
}

let category = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
console.log(category);
let word = category[Math.floor(Math.random() * category.length)].toUpperCase();
console.log(word);

if (category === countries) {
    document.querySelector(".categories").textContent = "COUNTRIES OF THE WORLD";
} else if (category === sports) {
    document.querySelector(".categories").textContent = "SPORTS";
} else if (category === names) {
    document.querySelector(".categories").textContent = "FIRST NAMES";
} else if (category === clubs) {
    document.querySelector(".categories").textContent = "FOOTBALL CLUBS";
} else if (category === superheroes) {
    document.querySelector(".categories").textContent = "DC/MARVEL HEROES";
}

let streak = 0;
let longestStreak;

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    if(word[i] !== "-") {
        answerArray[i] = "_";   
    }
    else {
        answerArray[i] = "-";
    }
}

function showLetterBoxes() {
    document.querySelector('#letterboxdiv').textContent = answerArray.join(" ");
}
showLetterBoxes();

document.querySelector('.close-lose').addEventListener('click', function() {
    document.querySelector('.lose-holder').style.display = "none";
    location.reload();
});

document.querySelector('.close-win').addEventListener('click', function() {
    document.querySelector('.win-holder').style.display = "none";
    location.reload();
});

const buttons = document.querySelector('#letterbuttondiv').querySelectorAll('button')
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});


let remainingLetters = word.length;
let lives = 6;
function handleClick(e) {
    letter = e.target.textContent;
    console.log(letter);
    console.log(answerArray);    
        if (!word.includes(letter)) {
            lives--;

            e.target.classList.remove('botton-hover-normal', 'button-hover-wrong');
            e.target.classList.add('button-hover-wrong');
            switch(lives) {
                case 5:
                    console.log(lives);
                    let rad = 0.005
                    function animate() {
                        requestAnimationFrame(animate)
                        rad += 0.025
                        ctx.beginPath()
                        ctx.lineWidth = 4;                                           //HEAD
                        ctx.ellipse(270, 187, 31, 40, Math.PI * 2, 0, Math.PI * rad)
                        ctx.stroke()
                    }

                    animate()                                                //HEAD
                    break;   
                case 4:
                    console.log(lives); 
                    let y = 225
                    function animateTorso() {
                        requestAnimationFrame(animateTorso)
                        y += 2
                        if(y <= 400) {
                            ctx.beginPath()
                            ctx.moveTo(270, 225)
                            ctx.lineTo(270, y)
                            ctx.stroke()
                            console.log(270, y);
                        }
                        
                    }
                    
                    animateTorso()  
                    break;
                case 3:
                    console.log(lives);
                    // ctx.beginPath()
                    // ctx.moveTo(270, 245)
                    // ctx.lineTo(240, 330)
                    // ctx.stroke()

                    let lArmX = 270
                    let lArmY = 245
                    function animatelArm() {
                        requestAnimationFrame(animatelArm)
                        lArmX -= 1
                        lArmY += 2.8
                        if(lArmX >= 240 && lArmY <= 330) {
                            ctx.beginPath()
                            ctx.moveTo(270, 245)
                            ctx.lineTo(lArmX, lArmY)
                            ctx.stroke()
                            console.log(lArmX, lArmY);
                        }
                        
                    }
                    
                    animatelArm() 
                    break;    
                case 2:
                    console.log(lives);
                    // ctx.beginPath();
                    // ctx.moveTo(270, 245); //RIGHT ARM
                    // ctx.lineTo(300, 330); //RIGHT ARM
                    // ctx.stroke();  

                    let RarmX = 270
                    let RarmY = 245
                    function animateRarm() {
                        requestAnimationFrame(animateRarm)
                        RarmX += 1
                        RarmY += 2.8
                        if(RarmX <= 300 && RarmY <= 330) {
                            ctx.beginPath()
                            ctx.moveTo(270, 245)
                            ctx.lineTo(RarmX, RarmY)
                            ctx.stroke()
                            console.log(RarmX, RarmY);
                        }
                        
                    }
                    
                    animateRarm() 
                    break;                           
                case 1:
                    console.log(lives);
                    // ctx.beginPath();
                    // ctx.moveTo(270, 400); //LEFT LEG
                    // ctx.lineTo(240, 520); //LEFT LEG
                    // ctx.stroke();  

                    let LlegX = 270 
                    let LlegY = 400
                    function animateLleg() {
                        requestAnimationFrame(animateLleg)
                        LlegX -= 1
                        LlegY += 4
                        if(LlegX >= 240 && LlegY <= 520) {
                            ctx.beginPath()
                            ctx.moveTo(270, 400)
                            ctx.lineTo(LlegX, LlegY)
                            ctx.stroke()
                            console.log(LlegX, LlegY);
                        }
                        
                    }
                    
                    animateLleg()
                    break;   
                case 0:
                    console.log(lives);
                    // ctx.beginPath();
                    // ctx.moveTo(270, 400); //RIGHT LEG
                    // ctx.lineTo(300, 520); //RIGHT LEG
                    // ctx.stroke();  

                    let RlegX = 270 
                    let RlegY = 400
                    function animateRleg() {
                        requestAnimationFrame(animateRleg)
                        RlegX += 1
                        RlegY += 4
                        if(RlegX <= 300 && RlegY <= 520) {
                            ctx.beginPath()
                            ctx.moveTo(270, 400)
                            ctx.lineTo(RlegX, RlegY)
                            ctx.stroke()
                            console.log(RlegX, RlegY);
                        }
                        
                    }
                    
                    animateRleg()

                    ctx.beginPath();
                    ctx.moveTo(275, 175);
                    ctx.lineTo(290, 190);
                    ctx.moveTo(285, 175);
                    ctx.lineTo(275, 190);

                    ctx.moveTo(250, 175);
                    ctx.lineTo(265, 190);
                    ctx.moveTo(260, 175);
                    ctx.lineTo(250, 190);
                    ctx.stroke();  

                    document.querySelector('.lose-holder').style.display = "block";
                    document.querySelector('.word-show-fail').textContent = word;
                    break;                                 
            }
        }

        else {
            e.target.classList.remove('botton-hover-normal', 'button-hover-wrong');
            e.target.classList.add('button-hover-wrong');

        }

        for (let k = 0; k < word.length; k++) {  
            if (word[k] === letter && answerArray[k] === "_") {
                answerArray[k] = letter;
            }
        }
        let currentWord = document.querySelector('#letterboxdiv');
        let spacelessCurrentWord = "";

        currentWord.textContent = answerArray.join(" ");
        for ( let i=0; i < currentWord.textContent.length; i++) {
            if(currentWord.textContent[i] !== " ") {
                spacelessCurrentWord += currentWord.textContent[i];
            }
        }
    

        if (spacelessCurrentWord === word) {
            console.log("winnin");
            document.querySelector('.win-holder').style.display = "block";
            document.querySelector('.word-show-win').textContent = word;
            
        }
    }











// let remainingLetters = word.length;
// while (remainingLetters > 0) {
//     console.log(answerArray.join(" "));
//     let guess = prompt("Guess a letter");
//     if (guess === null) {
//         break;
//     } else if(guess.length != 1) {
//         alert("Enter a single letter");
//     }else {
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
    
// }
// console.log(answerArray.join(" "));
// console.log("Good job! The answer was " + word);



// // // Create an array of words
// // var words = [
// //     "javascript",
// //     "monkey",
// //     "amazing",
// //     "pancake"
// //     ];
// //     // Pick a random word
// //     var word = words[Math.floor(Math.random() * words.length)];
// //     // Set up the answer array
// //     var answerArray = [];
// //     for (var i = 0; i < word.length; i++) {
// //     answerArray[i] = "_";
// //     }
// //     var remainingLetters = word.length;
// //     // The game loop
// //     while (remainingLetters > 0) {
// //     // Show the player their progress
// //     alert(answerArray.join(" "));
// //     // Get a guess from the player
// //     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
// //     if (guess === null) {
// //     // Exit the game loop
// //     break;
// //     } else if (guess.length !== 1) {
// //     alert("Please enter a single letter.");
// //     } else {
// //     // Update the game state with the guess
// //     for (var j = 0; j < word.length; j++) {
// //     if (word[j] === guess) {
// //     answerArray[j] = guess;
// //     remainingLetters--;
// //     }
// //     }
// //     }
// //     // The end of the game loop
// //     }
// //     // Show the answer and congratulate the player
// //     alert(answerArray.join(" "));
// //     alert("Good job! The answer was " + word);





// let spacelessSports = [];

// function organize(item) {
//     if(item.length < 11) {
//         spacelessSports.push(item.replace(" ", "-"));
//     }
// }

// superheroes.forEach(organize);
// console.log(spacelessSports);

