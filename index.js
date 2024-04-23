
 // Start game again 
 const reloadButton = document.getElementById('reloadButton');
 reloadButton.addEventListener('click', function() {
     window.location.reload();
 });

// word for game  
const words = [
    'If','a','glass','ball','and','rubber','ball','of','the',
    'same','size','are','dropped','from','the','same','height',
    'which','ball','will','bounce','higher','The','answer','is',
    'the','glass','ball','unless','it','breaks','during','the','fall.'
]; 

//get Id 
const wordContainer   = document.getElementById('word-container'),
      inputField      = document.getElementById('input-field'),
      Congratulations = document.getElementById('congra'),
      resultContainer = document.getElementById('result'),
      score           = document.getElementById('socre'),
      level           = document.getElementById('level');

let currentWordIndex = 0;
let startTime, endTime;

// Function to start the game
function startGame() {
    inputField.value = '';
    inputField.focus();
    currentWordIndex = 0;
    renderWord();
    startTime = Date.now();
}

// Function to render the current word
function renderWord() {
    wordContainer.textContent = words[currentWordIndex];
}

// Event listener for input field
inputField.addEventListener('input', function() {
    const typedWord = inputField.value.trim();
    const currentWord = words[currentWordIndex];

    if (typedWord === currentWord) {
        if (currentWordIndex === words.length - 1) {
            endGame();
        } else {
            currentWordIndex++;
            renderWord();
            inputField.value = '';
        }
    }
});

// Function to end the game
function endGame() {
    endTime = Date.now();
    const elapsedTime    = (endTime - startTime) / 1000; // Time in seconds
          wordsPerMinute = Math.round((words.length / elapsedTime) * 60);
        
    Congratulations.textContent ='Congratulations!';
    resultContainer.textContent = `Time : ${elapsedTime} seconds.`;
    score.textContent =`Your speed: ${wordsPerMinute} words per minute.`;
    if(wordsPerMinute > 35){
        level.textContent = 'Level: Normal';
    }if (wordsPerMinute <=35 ) {
        level.textContent = 'Level: Pro';
    }if(wordsPerMinute <= 20){
        level.textContent = 'Level: Pro Mak';
    }
}

// Start the game when the page loads
window.onload = startGame;