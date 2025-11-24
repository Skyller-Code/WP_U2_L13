
if(sessionStorage.getItem("pOneWins") == null) //this is so the keys don't get reset
{
    sessionStorage.setItem("pOneWins", 0); //the keys might be too long
    sessionStorage.setItem("pTwoWins", 0);
}

function updSco() //stands for update scores
{
    const body = document.getElementsByTagName("body")[0];
    const pOWinDis = document.getElementById("one-wins")
    pOWinDis.textContent = `Player 1 Game Wins: ${sessionStorage.getItem("pOneWins")}`
    const pTWinDis = document.getElementById("two-wins")
    pTWinDis.textContent = `Player 2 Game Wins: ${sessionStorage.getItem("pTwoWins")}`
}

const rePlay = document.createElement("div");
rePlay.id = "re-play";
rePlay.onclick = function(){reset()};

let fliImg = []; //this will store which 2 images have been flipped //maybe it should be const instead of let
let fliCard = []; //this will store which 2 cards have been flipped
let deckLeft = 20; //this will be used to know when game is over. not done with this!
let matInRow = 0; //stands for matched in row. is used for letting a player go twice when they've matched 2 cards

function flip(card, img) //its called flip because when a card is clicked it will flip showing its other side
{ //might have too much code (has over 50 lines)
    const turn = document.getElementById("turn"); //this will be how we know whose turn it is
    const pl = document.getElementsByClassName("players");

    console.log(deckLeft);

    if(!fliCard.includes(card))
    {
        console.log("clicked");

        card.style.backgroundImage = img; //reveals the image
        fliImg.push(img); //adds the flipped img to the array
        fliCard.push(card); //adds the flipped card to the array

        console.log(fliCard);

        if(fliImg.length == 2) //is true when 2 cards have been flipped
        {
            console.log("2");

            if(fliImg[0] == fliImg[1])
            {
                console.log("the same");

                fliCard[0].onclick = ""; //removes the onclick
                fliCard[1].onclick = ""; //removes the onclick

                deckLeft -= 2;

                matInRow++;

                pl[turn.textContent[7] - 1].textContent = `Player ${turn.textContent[7]} score: ${Number(pl[turn.textContent[7] - 1].textContent[16]) + 1}`;
                //this line right above adds 1 to the player's score that matched 2 cards

                if(deckLeft == 18) //need to add a win message
                {
                    const body = document.getElementsByTagName("body")[0];

                    if(Number(pl[0].textContent[16]) > Number(pl[1].textContent[16])) //if player 1 has a higher score
                    {
                        console.log(sessionStorage.getItem("pOneWins"));
                        sessionStorage.setItem("pOneWins", Number(sessionStorage.getItem("pOneWins")) + 1);
                        console.log(sessionStorage.getItem("pOneWins"));
                        updSco(); //this is so it update as soon as a game ends instead of when the button is pressed/the page reloads
                        
                        rePlay.textContent = "Player 1 Wins! Play again";
                        body.appendChild(rePlay);
                    }

                    else if(Number(pl[0].textContent[16]) < Number(pl[1].textContent[16])) //if player 2 has a higher score
                    {
                        console.log(sessionStorage.getItem("pTwoWins"));
                        sessionStorage.setItem("pTwoWins", Number(sessionStorage.getItem("pTwoWins")) + 1);
                        console.log(sessionStorage.getItem("pTwoWins"));
                        updSco(); //this is so it update as soon as a game ends instead of when the button is pressed/the page reloads
                        //last left off testing the new scoring thing
                        rePlay.textContent = "Player 2 Wins! Play again";
                        body.appendChild(rePlay);
                    }

                    else
                    {
                        rePlay.textContent = "Nobody wins. Play again";
                        body.appendChild(rePlay);
                    }
                    
                }

                if(matInRow == 2)
                {
                    turn.textContent = `Player ${(turn.textContent[7] % 2) + 1}'s turn`; //changes whose turn it is

                    matInRow = 0; //resets the value
                }
            }

            else
            {
                console.log("not the same");

                setTimeout(function (cardOne, cardTwo) //waits a second to cover the images
                {
                    cardOne.style.backgroundImage = "url('')";
                    cardTwo.style.backgroundImage = "url('')";
                }, 1000, fliCard[0], fliCard[1]);

                turn.textContent = `Player ${(turn.textContent[7] % 2) + 1}'s turn`; //changes whose turn it is

                matInRow = 0; //resets the value even when it might still be 0
            }

            fliImg = []; //resets the array //might not need this due to .reload
            fliCard = []; //resets the array
        }
    }
}

//ask what the .. was about

function addImg()
{
    console.log("testing");

    const deck = document.getElementsByClassName("deck");
    
    const imgList = [
        "url('resources/index/corn.png')",
        "url('resources/index/bluechicken.png')",
        "url('resources/index/cartharvest.png')",
        "url('resources/index/goldenpumpkin.png')",
        "url('resources/index/harvestbasket.png')",
        "url('resources/index/harvestchicken.png')",
        "url('resources/index/harvestpie.png')",
        "url('resources/index/hotcider.png')",
        "url('resources/index/netherhoe.png')",
        "url('resources/index/pumpkin.png')",

        "url('resources/index/corn.png')",
        "url('resources/index/bluechicken.png')",
        "url('resources/index/cartharvest.png')",
        "url('resources/index/goldenpumpkin.png')",
        "url('resources/index/harvestbasket.png')",
        "url('resources/index/harvestchicken.png')",
        "url('resources/index/harvestpie.png')",
        "url('resources/index/hotcider.png')",
        "url('resources/index/netherhoe.png')",
        "url('resources/index/pumpkin.png')"
    ]

    imgList.sort(function(){return 0.5 - Math.random()});
    for(let card = 0; card < imgList.length; card++)
    {
        console.log(deck[card]);
        console.log(imgList[card]);
        deck[card].style.backgroundImage = "url('')";
        deck[card].onclick = function(){flip(deck[card], imgList[card])};
        deck[card].style.backgroundSize = "contain";
        deck[card].style.backgroundRepeat = "no-repeat";
    }
}

function reset()
{
    window.location.reload();
}