
let fliImg = []; //this will store which 2 images have been flipped //maybe it should be const instead of let
let fliCard = []; //this will store which 2 cards have been flipped

let deckLeft = document.getElementsByClassName("deck");

//console.log(deckLeft);

function flip(card, img) //its called flip because when a card is clicked it will flip showing its other side
{
    //const pl = document.getElementById(""); //this will be how we know whose turn it is
    //need to show whose turn it is in html first


    card.style.backgroundImage = img; //reveals the image

    fliImg.push(img); //adds the flipped img to the array
    fliCard.push(card);

    if(fliImg.length == 2)
    {
        console.log("2");

        if(fliImg[0] == fliImg[1])
        {
            console.log("the same");

            fliCard[0].onclick = ""; //removes the onclick
            fliCard[1].onclick = ""; //removes the onclick

            //deckLeft //last left off trying to remove the cards from this variable

            //Number(pl.textcontent[]) += 1; //add a point to whose ever turn it is
        }

        else
        {
            console.log("not the same");

            setTimeout(function (cardOne, cardTwo)
            {
                cardOne.style.backgroundImage = "url('')";
                cardTwo.style.backgroundImage = "url('')";
            }, 1000, fliCard[0], fliCard[1]);
        }

        fliImg = []; //resets the array
        fliCard = []; //resets the array
    }
}

//note: need to find a way to run this code from home
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

        //deck[card].style.backgroundImage = imgList[card];
        deck[card].style.backgroundImage = "url('')";

        deck[card].onclick = function(){flip(deck[card], imgList[card])};

        deck[card].style.backgroundSize = "contain";
        deck[card].style.backgroundRepeat = "no-repeat";
    }
}