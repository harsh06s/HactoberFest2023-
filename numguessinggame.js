<!DOCTYPE html>
<html>
<head>
    <title>Number Guessing Game</title>
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p>Guess a number between 1 and 100.</p>
    <input type="text" id="guess" placeholder="Enter your guess">
    <button onclick="checkGuess()">Submit Guess</button>
    <p id="message"></p>

    <script>
        // Generate a random number between 1 and 100
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const guess = parseInt(document.getElementById("guess").value);
            attempts++;

            if (guess === secretNumber) {
                document.getElementById("message").textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
                document.getElementById("message").style.color = "green";
                document.getElementById("guess").disabled = true;
            } else if (guess < secretNumber) {
                document.getElementById("message").textContent = "Try a higher number.";
                document.getElementById("message").style.color = "red";
            } else {
                document.getElementById("message").textContent = "Try a lower number.";
                document.getElementById("message").style.color = "red";
            }
        }
    </script>
</body>
</html>
