function flip() //its called flip because when a card is clicked it will flip showing its other side
{
    //wip
}

function addImg()
{
    console.log("testing");

    const deck = document.getElementsByClassName("deck");

//note: i think the images need to go in a folder called index since they go on a page called index
    const imgList = [
        "url('resources/harvest_images/corn.png')",
        "url('resources/harvest_images/bluechicken.png')",
        "url('resources/harvest_images/cartharvest.png')",
        "url('resources/harvest_images/goldenpumpkin.png')",
        "url('resources/harvest_images/harvestbasket.png')",
        "url('resources/harvest_images/harvestchicken.png')",
        "url('resources/harvest_images/harvestpie.png')",
        "url('resources/harvest_images/hotcider.png')",
        "url('resources/harvest_images/netherhoe.png')",
        "url('resources/harvest_images/pumpkin.png')"
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