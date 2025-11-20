
let fliImg = []; //this will store which 2 images have been flipped //maybe it should be const instead of let

function flip(img) //its called flip because when a card is clicked it will flip showing its other side
{
    //const pl = document.getElementById(""); //this will be how we know whose turn it is

    fliImg.push(img); //adds the flipped img to the array

    //still need to find a way to hide and reveal the image
    //idea: change the background color so that it's over the image, then remove it

    if(fliImg.length == 2)
    {
        if(fliImg[0] == fliImg[1])
        {
            //Number(pl.textcontent[]) += 1; //add a point to whose ever turn it is

            //removes the cards from the deck or makes them unclickable

            fliImg = []; //resets the array
        }
    }
}

//note: i think the images need to go in a folder called index since they go on a page called index
//note: need to find a way to run this code from home

function addImg()
{
    console.log("testing");

    const deck = document.getElementsByClassName("deck");
    
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
        "url('resources/harvest_images/pumpkin.png')",

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

    imgList.sort(function(){return 0.5 - Math.random()});

    //console.log(deck);

    //console.log(typeof deck);

    
    for(let card = 0; card < imgList.length; card++)
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

    //console.log(deck);
}