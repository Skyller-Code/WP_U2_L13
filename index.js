function flip() //its called flip because when a card is clicked it will flip showing its other side
{
    //wip
}

function addImg()
{
    console.log("testing");

    const deck = document.getElementsByClassName("deck");

    console.log(deck);

    console.log(typeof deck);

    for(let card = 0; card < deck.length; card++)
    {
        console.log(deck[card]);

        deck[card].style.backgroundImage = "url('resources/harvest_images/corn.png')";
    }

    //deck.sort(function(){return 0.5 - Math.random});

    console.log(deck);
}