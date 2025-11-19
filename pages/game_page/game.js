function flip() //its called flip because when a card is clicked it will flip showing its other side
{
    //wip
}

function addImg()
{
    console.log("testing");

    const deck = document.getElementsByClassName("deck");


    const imgList = [
        "url('resources/harvest_images/corn.png')",
        "url('resources/harvest_images')",
    ]

    console.log(imgList);


    //console.log(deck);

    //console.log(typeof deck);


    for(let card = 0; card < 2; card++)
    {
        console.log(deck[card]);

        deck[card].style.backgroundImage = imgList[card];
        deck[card].style.backgroundSize = "cover";
    }


    //deck[0].style.backgroundImage = "url('resources/harvest_images/corn.png')";
    /*
    deck[0].style.backgroundImage = imgList[0];
    deck[0].style.backgroundSize = "cover";
    */


    //deck.sort(function(){return 0.5 - Math.random});

    //console.log(deck);
}