$(document).ready(startApp);

var playerTurn;

function startApp(){
    playerTurn = true;
  
}
class Players{
    constructor(playerName, image, currentPlayer){
        this.playerName = playerName;
        this.image = image;
        this.trophy = {
            points: 0
        }
        this.currentPlayer = this;
        this.setCurrentPlayer = this.setCurrentPlayer.bind(this);
        this.changeTurns = this.changeTurns.bind(this);
        this.domElement = null;

        
    }    
    setCurrentPlayer(){
        
        if (this.currentPlayer === player1){
            return true;
            console.log('current player is :' + player1);
        }if(this.currentPlayer !== player1){
            return false;
            console.log('current player is :' + player2);
        }
        changeTurns();
        updatePoints();
    }
    changeTurns(){
        // this.currentPlayer = null;
        if(this.currentPlayer === player1){
            this.playerTurn = false;
            this.currentPlayer = player2;
        }else if(this.currentPlayer === player2){
            this.playerTurn = false;
            this.currentPlayer = player1;
        }

    }
    updatePoints(){
        $('.points .value').text(points)
        if(this.jumpedFrogUp || this.jumpedFrogDown || this.jumpedFrogLeft || this.jumpedFrogRight === true){
            points++;
        }
        
    }
    changeTrophyPoints(){
        this.trophy.points += 1;
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

var points = 0;
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


