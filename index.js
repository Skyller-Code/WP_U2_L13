function flip() //its called flip because when a card is clicked it will flip showing its other side
{
    //wip
}

function addImg()
{
    console.log("testing");

    //const deck = document.getElementsByClassName("blocksinside");
    const deck = Array(document.getElementsByTagName("img"));

    console.log(deck);

    console.log(typeof deck);

    for(let img = 0; img < deck.length; img++)
    {
        console.log(deck[img]);
    }

    deck.sort(function(){return 0.5 - Math.random});

    console.log(deck);
}