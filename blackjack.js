//Deck Array   
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

//Creating Deck Function
function createDeck(){
    deck = new Array();
    for (var i = 0 ; i < values.length ; i++){
        for (var x = 0 ; x < suits.length ; x++){
            var cardval = parseInt(values[i]);
            //Face Cards = 10
            if(values[i] == "J" || values[i] == "Q" || values[i] == "K")
                cardval = 10
            //Base Value of Ace is 11
            if(values[i] == "A")
                cardval == 11;
            var picturepath = "Cards/" + suits[x] + "/" + cardval + ".png";
            var card = { Value: values[i], Suit: suits[x], Cardval: cardval, Picturepath: picturepath};
            deck.push(card);
        }
    }
    return deck;
}

//Make Cards
function card(){
    deck = createDeck();
    console.log(deck[0]);
    var cardimg = document.getElementById("card1");
    var cardh1 = document.getElementById("name");
    var cardh2 = document.getElementById("suit");
    var cardh3 = document.getElementById("cardval");
    var cardobj = {"Name": deck[0].Value, "Suit": deck[0].Suit, "Value": deck[0].Cardval , "Picturepath": deck[0].Picturepath}

    //Display Card Values on Top
    cardimg.src = cardobj.Picturepath;
    cardh1.textContent = cardobj.Name;
    cardh2.textContent = cardobj.Suit;

}
card();

//Shuffling   
function shuffle()
{
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++)
    {
        
        var location1 = Math.floor((Math.random()*deck.length));
        var location2 = Math.floor((Math.random()*deck.length));
        var tmp = deck[location1];
        
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
} 

//Make Players
var players = new Array();
function createPlayers(num)
{
    players = new Array();
    for(var i = 1; i <= num; i++)
    {
        var hand = new Array();
        var player = { Name: 'Player ' + i, Points: 0, Hand: hand };
        h1(player.Name + " Points: " + player.Points);
        players.push(player);
    }
console.log(createPlayers);
        
}
//Dynamically Create h1 tags
function h1(text){
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(text));
    document.body.appendChild(h1);
}

//UI Using HTML

function creatUI(){
    document.getElementById('players').innerHTML = '';
    for(var i = 0; i < players.length; i++){
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_points = document.createElement('div');
    
        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;
    
        div_playerid.innerHTML = players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}


//Dealing 2 Cards to Each Player

function dealHands()
{
//alternate handing cards to each player
// 2 cards each
for(var i = 0; i < 2; i++)
{
    for (var x = 0; x < players.length; x++)
    {
        var card = deck.pop();
        players[x].Hand.push(card);
        //renderCard(card, x);
        updatePoints();
    }
}
updateDeck();
console.log(dealHands)
}

//Start Game
    //Create Deck
    //Shuffle
    //Create 2 Players
    //Create UI
    //Deal Hands
function startGame(){
    document.getElementById('StartButton').value = 'New Game';
    document.getElementById('status').style.display="none";

    currentPlayer = 0;
    createDeck();
    shuffle();
    createPlayers(2);
    dealHands();
    //Create UI
    document.getElementById('player ' + currentPlayer).classList.add('active');
}

//Hit Function

//Stay Function = End Turn

//Ending Function = Check for Aces, then Calculate Score, then show Message



