$(document).ready(startApp);



function startApp(){
    $('.frog').text("Trophy Points: " + player1.trophy.points)
    $('.frog').text("Trophy Points: " + player1.trophy.points)
   
  
}
class Players{
    constructor(playerName, image, currentPlayer){
        this.playerName = playerName;
        this.image = image;
        this.currentPlayer = currentPlayer;
        this.currentPlayer = this.currentPlayer.bind(this);
        this.changeTurns = this.changeTurns.bind(this);
        this.domElement = null;
        
    }    
    currentPlayer(){
       
        if (playerTurn){
            player1.changePoints(trophy);
            player1.jumpedFrog(frogs);
            console.log('current player is :' + player1);
        }else{
            player2.changePoints(trophy);
            player2.jumpedFrog(frogs);
            console.log('current player is :' + player2);
        }
        changeTurns();
        updatePoints();
    }
    changeTurns(){
        playerTurn = !playerTurn
    }
    updatePoints(){
        $('.frog').text("Trophy Points: " + player1.trophy.points)
        $('.frog').text("Trophy Points: " + player1.trophy.points)
    }
    changeTrophyPoints(){
        this.trophy.points += amount;
        if(this.trophy.points >= 13){
            if(this.trophy.points == 13){
            $('#modal').toggleClass('hide');
            }
        console.log(this.playerName, "You won!")
        }
        return this.trophy.points;
    }
    winCondition(player1, player2){
        if(player1.trophy.points >= 13){
            $('#modal').toggleClass('hide');
        }else if( player2.trophy.points >= 13){
            $('#modal').toggleClass('hide');
        }
    }
    render(){
        this.domElement = $('<div>')
        .addClass('front')
        .text('Current Player')
        return this.domElement;
        
    }
}
player1 = new Players('Green Rider');
player2 = new Players('Purple Rider');
playerTurn = true;

$(function() {
    $("img").click(function(){
        $("img").toggle()
    })
});
// var player = [new Players("Green Rider"), new Players("Purple Rider")];
// this.currentPlayer = player[0];
// this.opposingPlayer = player[1];

// }else if(this.name !== 'Purple Rider')
// return player[0];


