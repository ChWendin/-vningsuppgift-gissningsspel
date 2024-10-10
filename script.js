// Variabler
let correctNumber = Math.round(Math.random() * 100) + 1; // Slumpa tal mellan 1 och 100
let attempts = 0; // Räknar försök

// Hämta element
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
console.log(correctNumber); //Den här finns så att man kan fuska sig till vinster!

// Funktion för att hantera gissning
submitGuess.addEventListener('click', function() {
    const userGuess = +guessInput.value; // Hämta användarens gissning
    attempts++; // Öka antalet försök
    const guessLi = document.querySelector('#gissningslista');
    guessLi.innerHTML += `<li>${userGuess}</li>`;

    // Kontrollera om gissningen är rätt
    if (userGuess === correctNumber) {
        feedback.textContent = `Grattis! Du gissade rätt. Det tog dig ${attempts} försök.`;
        feedback.style.color = 'green';
        guessLi.style.color = 'green';
        guessInput.disabled = true; // Inaktivera input-fältet
        submitGuess.disabled = true; // Inaktivera knappen
    } else if (userGuess > correctNumber) {
        feedback.textContent = 'För högt! Försök igen.';
        feedback.style.color = 'red';
        guessLi.style.color = 'red';
    } else if (userGuess < correctNumber) {
        feedback.textContent = 'För lågt! Försök igen.';
        feedback.style.color = 'red';
        guessLi.style.color = 'red';
    } 
        
    //Validering av input
    if (userGuess == '') {
        feedback.textContent = 'Du måste ange en siffra!'
        guessInput.disabled = true;
        submitGuess.disabled = true;
        attemptsDisplay.textContent = 'Ladda om sidan och försök igen';
        return;
    } else if (userGuess > 100) {
        feedback.textContent = 'Du måste ange en siffra mellan 1-100!';
        guessInput.disabled = true;
        submitGuess.disabled = true;
        attemptsDisplay.textContent = 'Ladda om sidan och försök igen';
        return;
    } else if (userGuess < 1) {
        feedback.textContent = 'Du måste ange en siffra mellan 1-100!';
        guessInput.disabled = true;
        submitGuess.disabled = true;
        attemptsDisplay.textContent = 'Ladda om sidan och försök igen';
        return;
    } else if (attempts > 6 && userGuess !== correctNumber) { //Spelet slutar om man gissat fel 7 ggr
        feedback.textContent = `Du har slut på gissningar! Rätt svar var ${correctNumber}.`;
        feedback.style.color = 'red';
        guessInput.disabled = true;
        submitGuess.disabled = true;
        attemptsDisplay.textContent = 'Ladda om sidan och försök igen';
        return;
    }
        
    // Visa antalet försök
    attemptsDisplay.textContent = `Antal försök: ${attempts}`;
    
});
        
        
    


