var gamePlay = {
    // object of all words that can be chosen, along with a photo
    availableWords: {
        gentileschi: {
        picture: "artemisia.jpg",
        name: "Artemisia Gentileschi",
        bio: "Famed painter Artemisia Gentileschi was born on July 8, 1593, in Rome, Italy. She painted her earliest signed and dated work, 'Susanna and the Elders,' around 1610, and later created such works as 'Madonna and Child,' 'Judith Slaying Holofernes, and 'Cleopatra.' Gentileschi lived in Florence for several years, and later spent time in Genoa and Venice. In 1630, she moved to Naples. Around 1638, she and her father, Orazio Gentileschi, worked together on a series for Queen Henrietta Maria. She died circa 1652 in Naples, Italy.",
        source: "Source: biography.com"
      },
      kahlo: {
        picture: "frida.jpg",
        name: "Frida Kahlo",
        bio: "Artist Frida Kahlo was considered one of Mexico's greatest artists who began painting mostly self-portraits after she was severely injured in a bus accident. Kahlo later became politically active and married fellow communist artist Diego Rivera in 1929. She exhibited her paintings in Paris and Mexico before her death in 1954.",
        source: "Source: biography.com"
      },
      sherman: {
        picture: "cindy.jpg",
        name: "Cindy Sherman",
        bio: "Cindy Sherman was born January 19, 1954, in Glen Ridge, New Jersey. In 1977, she began work on 'Complete Untitled Film Stills,' a series of 69 photographs and one of her best-known works; her black-and-white photographs challenged cultural stereotypes supported by the media. In the 1980s, Sherman used color film and large prints, and focused more on lighting and facial expression. She returned to ironic commentary in the 1990s, directing the dark comedy Office Killer in 1997. Three years later, in 2000, she released a series of photographs of women with exaagerated attributes—a representation of social role-playing and sexual stereotypes.",
        source: "Source: biography.com"
      },
      morisot: {
        picture: "berthe.jpg",
        name: "Berthe Morisot",
        bio: "Berthe Morisot was born January 14, 1841, in Bourges, France. She first exhibited her work in the prestigious state-run art show, the Salon, in 1864. She would earn a regular spot at show for the next decade. In 1868, she met Édouard Manet. In 1874, she married Manet's brother. The marriage provided her with social and financial stability while she continued to pursue her painting career.",
        source: "Source: biography.com"
      },
      cassatt: {
        picture: "mary.jpg",
        name: "Mary Cassatt",
        bio: "Born on May 22, 1844, in Allegheny City, Pennsylvania, Mary Cassatt was one of the leading artists in the Impressionist movement of the later part of the 1800s. Moving to Paris, her home for the rest of her life, she was befriended by Edgar Degas. After 1910, her increasingly poor eyesight virtually put an end to her serious painting, and she died in 1926.",
        source: "Source: biography.com"
      },
      whiteread: {
        picture: "rachel.jpg",
        name: "Rachel Whiteread",
        bio: "Rachel Whiteread, CBE (born 20 April 1963) is an English artist who primarily produces sculptures, which typically take the form of casts. She was the first woman to win the annual Turner Prize in 1993. Whiteread was one of the Young British Artists who exhibited at the Royal Academy's Sensation exhibition in 1997. Among her most renowned works are House, a large concrete cast of the inside of an entire Victorian house; the Judenplatz Holocaust Memorial in Vienna, resembling the shelves of a library with the pages turned outwards; and Untitled Monument, her resin sculpture for the empty fourth plinth in London's Trafalgar Square.",
        source: "Source: tate.org"
      },
      carrington: {
        picture: "leonora.jpeg",
        name: "Leonora Carrington",
        bio: "Leonora Carrington was a British-Mexican painter known for her Surrealist works. Full of enigmatic symbolism, Carrington’s Self-Portrait (c. 1937–1938) depicts the artist in a domestic interior, extending an open hand to a female hyena. 'You may not believe in magic but something very strange is happening at this very moment,' she once said. 'Your head has dissolved into thin air and I can see the rhododendrons through your stomach.' Born on April 6, 1917 in Clayton Green, United Kingdom, she went on to study painting in Florence, and later attended the Chelsea School of Art in London. While back in London, she met a number of the Surrealists visiting England for an exhibition. Quickly drawn into their milieu, she had a short-lived romance with older German painter Max Ernst. Abandoned by Ernst when he fled persecution to the United States, Carrington was hospitalized with a mental breakdown. After recuperating, she emigrated to Mexico, resumed painting, and became a part of the women’s liberation movement. Before her death at the age of 94, the artist had established herself as integral figure in the short-lived Surrealist movement. She died on May 25, 2011 in Mexico City, Mexico. Today, Carrington’s works are included in the collections of The Museum of Modern Art in New York, the Peggy Guggenheim Collection in Venice, and the Tate Gallery in London, among others.",
        source: "Source: artnet.com"
      },
      walker: {
        picture: "kara.jpg",
        name: "Kara Walker",
        bio: "Kara Walker was born in 1969 in Stockton, California. At the Rhode Island School of Design, Walker began working in the silhouette form. In 1994, her work appeared in a new-talent show at the Drawing Center in New York and she became an instant hit. In 1997, she received a John D. and Catherine T. MacArthur Foundation 'genius grant.' Since then, Walker's work has been exhibited in galleries and museums worldwide.",
        source: "Source: biography.com"
      },
      kruger: {
        picture: "barbara.jpg",
        name: "Barbara Kruger",
        bio: "Barbara Kruger is an American Conceptual artist known for her combination of type and image that conveys a direct feminist cultural critique. Her works examine stereotypes and the behaviors of consumerism with text layered over mass-media images. Rendered with black-and-white, red accented, Futura Bold Oblique font, inspired by the Constructivist Alexander Rodechenko, her works offer up short phrases such as 'Thinking of You,' 'You are a captive audience,' and 'I shop therefore I am.' Like multimedia artist Jenny Holzer, Kruger uses language to broadcast her ideas in a myriad of ways, including prints, T-shirts, posters, photographs, electronic signs, and billboards. 'I'm fascinated with the difference between supposedly private and supposedly public and I try to engage the issue of what it means to live in a society that's seemingly shock-proof, yet still is compelled to exercise secrecy,' she explained of her work. Born on January 26, 1945 in Newark, NJ, Kruger worked as a graphic designer and art director after studying at both Syracuse University and Parsons School of Design in the 1960s. Her early career path directly influenced the style her art would eventually take. She currently lives and works between New York, NY and Los Angeles, CA. Today, the artist’s works are held in the collections of The Museum of Modern Art in New York, the National Gallery of Art in Washington, D.C., the Art Institute of Chicago, and the Walker Art Center in Minneapolis, among others.",
        source: "Source: artnet.com"
      },
      antoni: {
        picture: "janine.jpg",
        name: "Janine Antoni",
        bio: "Janine Antoni was born on January 19, 1964, in Freeport in the Bahamas. She received a B.A. from Sarah Lawrence College in 1986 and an M.F.A. in sculpture from the Rhode Island School of Design in 1989. Wean (1990), a work created soon after she completed graduate school, consists of plaster impressions of real and artificial nipples set into the gallery wall. This presaged the psychosocial concerns of her production throughout the 1990s, in which everyday bodily rituals such as eating, sleeping, and bathing were converted into sculptural processes. In Gnaw (1992), for example, Antoni chewed on blocks of lard and chocolate and reconstituted the masticated material into lipsticks and a candy box. In her performative installation Slumber (1993), the artist used polysomnograph recordings of her dreams to guide the weaving of a blanket that was produced in situ. For Loving Care (1994), Antoni mopped a floor with her hair after soaking it in Loving Care hair dye. A 1997 residence at a Shaker community in Sabbathday Lake, Maine, influenced and (1996–99), in which she rubbed one rock against another for days on end. This concern with pacing and endurance has become more pronounced in her recent projects. For her solo exhibition To Draw a Line at Luhring Augustine Gallery in New York (2003), Antoni walked across a tightrope strung between two massive reels of hemp rope that she had woven by hand.",
        source: "Source: guggenheim.org"
      },
      schneemann: {
        picture: "carolee.jpg",
        name: "Carolee Schneemann",
        bio: "Throughout her career Carolee Schneemann has used her body to examine the role of female sensuality in connection to the possibilities of political and personal liberation from predominantly oppressive social and aesthetic conventions. Drawing on the expressive possibilities of film, performance, photography, and installation, among other media, she has explored themes of generation and goddess imagery, sexuality, and everyday erotics, as well as personal biography and loss. Although renowned for her work in performance and other media, Schneemann began her career as a painter, stating, 'I'm a painter. I'm still a painter and I will die a painter. Everything that I have developed has to do with extending visual principles off the canvas.' She continues to perform, film, and record through the present day, and has been acknowledged by many as progenitor of Feminist art, as well as performance and multimedia art.",
        source: "Source: theartstory.org"
      },
      lebrun: {
          picture: "elisabeth.jpg",
          name: "Elisabeth Vigee Le Brun",
          bio: "French artist Elisabeth Louise Vigée Le Brun was born in Paris on April 16, 1755. She achieved early success as an artist; her ability to depict her subjects in a flattering, elegant style made her one of the most popular portraitists in France. Her clientele included aristocracy and royalty, including Marie Antoinette, whose portrait she painted 30 times. After the French Revolution, Vigée Le Brun worked abroad for 12 years. She returned to Paris for her later life and continued to enjoy a degree of fame and success that was very rare for a female artist. She died on March 30, 1842.",
          source: "Source: biography.com"
      },
      okeeffe: {
          picture: "georgia.jpg",
          name: "Georgia O'Keefe",
          bio: "Georgia O'Keeffe was born on November 15, 1887, in Sun Prairie, Wisconsin and studied at the Art Institute of Chicago and the Art Students League in New York. Photographer and art dealer Alfred Stieglitz gave O'Keeffe her first gallery show in 1916 and the couple married in 1924. Considered the 'mother of American modernism,' O'Keeffe moved to New Mexico after her husband's death and was inspired by the landscape to create numerous well-known paintings. Georgia O'Keeffe died on March 6, 1986 at the age of 98.",
          source: "Source: biography.com"
      },
      frankenthaler: {
          picture: "helen.jpg",
          name: "Helen Frankenthaler",
          bio: "Helen Frankenthaler was among the most influential artists of the mid-20th century. Introduced early in her career to major artists such as Jackson Pollock and Franz Kline (and Robert Motherwell, whom she later married), Frankenthaler was influenced by Abstract Expressionist painting practices, but developed her own distinct approach to the style. She invented the 'soak-stain' technique, in which she poured turpentine-thinned paint onto canvas, producing luminous color washes that appeared to merge with the canvas and deny any hint of three-dimensional illusionism. Her breakthrough gave rise to the movement promoted by the influential art critic Clement Greenberg as the 'next big thing' in American art: Color Field Painting, marked by airy compositions that celebrated the joys of pure color and gave an entirely new look and feel to the surface of the canvas. Later in her career, Frankenthaler turned her attention to other artistic media, most notably woodcuts, in which she achieved the quality of painting, in some cases replicating the effects of her soak-stain process.",
          source: "Source: theartstory.org"
      },
      chicago: {
          picture: "judy.jpg",
          name: "Judy Chicago",
          bio: "Judy Chicago was born on July 20, 1939, in Chicago, Illinois. She started working on a massive multimedia project entitled 'The Dinner Party' in 1974. Collectively, the work tells the history of women in Western Civilization. It has been shown around the world, and is considered by many to be Chicago's greatest work. During her long career, Chicago has often stirred up controversy with some of her imagery.",
          source: "Source: biography.com"
      },
      martin: {
          picture: "agnes.jpg",
          name: "Agnes Martin",
          bio: "Agnes Martin's sparse, luminous canvases are not easily categorized as they are at the crossroads of several disparate 20th-century styles. An intensely private person, Martin was diagnosed with schizophrenia in her 40s; she led an austere and solitary existence in a remote area of New Mexico for most of her working life. Like many artists in the 1950s and 1960s, she was influenced by Zen Buddhism and Taoism that contributed to her interest in nature. Despite the abstraction of her paintings, it was the innocence and simplicity of everyday life - especially the natural world - that she attempted to capture in her work.",
          source: "Source: theartstory.org"
      },
      sturtevant: {
          picture: "sturtevant.jpg",
          name: "Sturtevant",
          bio: "Sturtevant (American, b. 1924) began “repeating” the works of her contemporaries in 1964, using some of the most iconic artworks of her generation as a source and catalyst for the exploration of originality, authorship, and the interior structures of art and image culture. Beginning with her versions of works by Jasper Johns and Andy Warhol, Sturtevant initially turned the visual logic of Pop art back on itself, probing uncomfortably at the workings of art history in real time. Yet her chameleon-like embrace of other artists’ art has also resulted in her being largely overlooked in the history of postwar American art. As a woman making versions of the work of better-known male artists, she has passed almost unnoticed through the hierarchies of mid-century modernism and postmodernism, at once absent from these histories while nevertheless articulating their structures.",
          source: "Source: moma.org" 
      },
      kusama: {
          picture: "yayaoi.jpg",
          name: "Kusama Yayoi",
          bio: "Yayoi Kusama's life is a poignant testament to the healing power of art as well as a study in human resilience. Plagued by mental illness as a child, and thoroughly abused by a callous mother, the young artist persevered by using her hallucinations and personal obsessions as fodder for prolific artistic output in various disciplines. This has informed a lifelong commitment to creativity at all costs despite the artist's birth into a traditional, female-effacing Japanese culture and her career's coming of age in the male dominated New York art scene. Today, Kusama reigns as one of the most unique and famous contemporary female artists, operating from her self-imposed home in a mental hospital.",
          source: "Source: theartstory.org"
      },
      piper: {
          picture: "adrian.jpg",
          name: "Adrian Piper",
          bio: "Adrian Margaret Smith Piper is an American conceptual artist and philosopher. These two disciplines frequently intertwine with each other, as the artist tends to draw a parallel between creative expression and the conceptual meaning behind it. All of her work has been carefully premeditated. Her art is political and social. The performances act as lectures on topics of race, identity and culture. She started out with psychedelic art, minimalism and performance art. The artist believes that a carefully structured conceptual framework is the best starter point for all creativity. Piper strongly fights the social injustice, xenophobia and hatred.",
          source: "Source: widewalls.ch"  
      },
      abramovic: {
          picture: "marina.jpg",
          name: "Marina Abramovic",
          bio: "Towards the late 1950s, as abstract art began to lose impetus, many artists across the world began to embrace performance art. Performance had been a feature of avant-garde art since around 1910, but Marina Abramović's work is typical of the aims of the new generation in her eagerness to avoid traditional, object-based art materials (such as paint and canvas), and to cut down the distance between the artist and the audience by making her own body the medium. Born under Yugoslavia's repressive Communist dictatorship, and raised by parents closely tied to the regime, Abramović's dramatic and dangerous performances often seem like cathartic responses to these early experiences of power. She has produced a quantity of sculpture, but she remains best known for performance, and she remains one of only a handful of performance artists of her generation who have continued to perform late in their career.",
          source: "Source: theartstory.org"
      },
      powers: {
          picture: "harriet.jpg",
          name: "Harriet Powers",
          bio: "Harriet Powers is one of the best-known southern African American quilt makers, even though only two of her quilts, both of which she made after the Civil War (1861-65), survive today. One is part of the National Museum of American History collection at the Smithsonian Institution in Washington, D.C. The second quilt is in the Museum of Fine Arts in Boston, Massachusetts. The cotton quilts consist of numerous pictorial squares depicting biblical scenes and celestial phenomena. They were constructed through applique and piecework and were hand and machine stitched.",
          source: "Source: georgiaencyclopedia.org"
      },
      vanhemessen: {
          picture: "caterina.jpg",
          name: "Caterina van Hemessen",
          bio: "Caterina (Catharina) van Hemessen, a Flemish painter trained by her father, married the organist of Antwerp Cathedral in 1554. Two years later, the couple entered the service of an admirer of van Hemessen’s work, Mary of Hungary, former regent of the Netherlands who had retired to her court in Spain. Mary died in 1558; her will stipulated that van Hemessen and her husband receive pensions for life. Only ten works by the artist survive today; primarily small portraits, they date between 1548 and 1552.",
          source: "Source: brooklynmuseum.org"
      },
      North: {
          picture: "marianne.jpg",
          name: "Marianne North",
          bio: "Marianne North was an unmarried Victorian woman of comfortable means. Following the death of her father (in 1871) she set off on a series of trips to make a pictorial record of the tropical and exotic plants of the world. She travelled to areas that the 'establishment' thought she shouldn't visit and it was this independence of spirit that made her journeys one of the most reported subjects in the British newspapers of the period. North had no formal training in illustration but possessed a natural talent and was very prolific. Painting with a palette of bold colours, she sketched rapidly in pen and ink on heavy paper then used oils straight from the tube. Unlike the tradition in Victorian flower painting, she liked to paint plants in their natural settings.",
          source: "Source: kew.org"
      }
    },
  
    // game variables
    currentWord: null,
    wordLetters: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,
  
    // set up the game
    setupGame: function() {
        // pick a random word
        var objKeys = Object.keys(this.availableWords);
        this.currentWord = objKeys[Math.floor(Math.random() * objKeys.length)];
        
        // create blanks for the chosen word
        this.wordLetters = this.currentWord.split("");
        this.rebuildWord();
        this.updateTotalGuesses();
    },
  
    // if a user guesses a letter
    updatePage: function(letter) {
        // restart the game after guesses run out
        if (this.guessesLeft === 0) {
            this.restartGame();
        } else {
            this.updateGuesses(letter);
            this.updateMatchedLetters(letter);
            this.rebuildWord();
            
            // restarts game if user wins and updates wins
            if (this.updateWins() === true) {
                this.restartGame();
            }
        };
    },
  
    // handle guesses
    updateGuesses: function(letter) {
        // incorrect guess
        if ((this.guessedLetters.indexOf(letter) === -1) && (this.wordLetters.indexOf(letter) === -1)) {
  
            // add letter to guessedLetters array.
            this.guessedLetters.push(letter);
  
            // decreases guesses
            this.guessesLeft--;
  
            // update guesses
            document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
            document.querySelector("#letters-guessed").innerHTML = this.guessedLetters.join(", ");
        };
    },
  
    // set nunber of guesses
    updateTotalGuesses: function() {
        // The user will get more guesses the longer the word is.
        this.totalGuesses = this.wordLetters.length + 5;
        this.guessesLeft = this.totalGuesses;
        
        // guesses remaining
        document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    },
  
    // successful guesses
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
  
    // build word display
    rebuildWord: function() {
        var wordView = "";
        
        // for loop to create blanks
        for (var i = 0; i < this.wordLetters.length; i++) {
            // display letter
            if (this.matchedLetters.indexOf(this.wordLetters[i]) !== -1) {
                wordView += this.wordLetters[i];
            } else {
                wordView += "&nbsp;_&nbsp;";
            };
        };
        
        // display word
        document.querySelector("#current-word").innerHTML = wordView;
    },
  
    // restart game
    restartGame: function() {
        document.querySelector("#letters-guessed").innerHTML = "";
        this.wordInPlay = null;
        this.lettersOfTheWord = [];
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.setupGame();
        this.rebuildWord();
    },
  
    // has the user won?
    updateWins: function() {
        var win;
        
        // check letters
        if (this.matchedLetters.length === 0) {
            win = false;
        } else {
            win = true;
        };
        
        // haven't guessed all the letters in the word no win
        for (var i = 0; i < this.wordLetters.length; i++) {
            if (this.matchedLetters.indexOf(this.wordLetters[i]) === -1) {
                win = false;
            };
        };
        
        // update win if true
        if (win) {
            this.wins = this.wins + 1;
            
            // update wins on page
            document.querySelector("#wins").innerHTML = this.wins;
            
            // update info on page for word
            // update image 
            document.querySelector("#image-div").innerHTML = "<img class='art-image' src='assets/images/" + 
            this.availableWords[this.currentWord].picture + "' alt='" + this.availableWords[this.currentWord].image + "'>";
            
            // update artist name
            document.querySelector("#word-info").innerHTML = this.availableWords[this.currentWord].name;

            // update artist bio
            document.querySelector("#artist-bio").innerHTML = this.availableWords[this.currentWord].bio; 
            document.querySelector("#bio-source").innerHTML = this.availableWords[this.currentWord].source;

            // return true, to restart game
            return true;
        };
        
        // no win, keep going
        return false;
    }
};

// start game
gamePlay.setupGame();

document.onkeyup = function(event) {
    
    // takes pressed key, makes it lowercase
    gamePlay.letterGuessed = String.fromCharCode(event.which).toLowerCase();
    
    // pass guessed letter to game
    gamePlay.updatePage(gamePlay.letterGuessed);
};