# Know Your Artist
[Click here to visit the site](https://amandakaywiggins.github.io/women-artists/index.html)


## How many artists do you know?
"Know Your Artist" is a basic javascript hangman style game created to increase awareness of women's contributions to art. Consider the ubiquitousness of the names Van Gogh, Monet, Picasso, Pollack, and Warhol. Now how many women artists can you identify by name? This game strives to introduce users to the rich and wonderful history of women as artists.

## Goal
Learn to pull information from an array and manipulate it to create a hangman game.

### Key Code
Setting up each word to display blank spaces instead of the word.
````
    setupGame: function() {
        // pick a random word
        var objKeys = Object.keys(this.availableWords);
        this.currentWord = objKeys[Math.floor(Math.random() * objKeys.length)];
        
        // create blanks for the chosen word
        this.wordLetters = this.currentWord.split("");
        this.rebuildWord();
        this.updateTotalGuesses();
    },
````
Checking a guessed letter against the letters of the word.
````
    updateMatchedLetters: function(letter) {
        // for loop to check letters
        for (var i = 0; i < this.wordLetters.length; i++) {
            // guessed letter is in the word and not been guessed before
            if ((letter === this.wordLetters[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                // update letters in word
                this.matchedLetters.push(letter);
            };
        };
    },
````

## Authors
Amanda Kay Wiggins

## Acknowledgements
Created as part of the UT Coding Bootcamp
