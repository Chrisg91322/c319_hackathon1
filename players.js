$(document).ready(startApp);

var player1;
var player2;

function startApp(){
 
    player1 = new Players('Green Rider');
    player2 = new Players('Purple Rider');
    player1.currentPlayer = true;
    player2.currentPlayer = false;
    playerTurn = true;
  
}
class Players{
    constructor(playerName, image){
        this.playerName = playerName;
        this.image = image;
        this.trophy = {
            points: 0
        }
        this.currentPlayer = null;
        this.setCurrentPlayer = this.setCurrentPlayer.bind(this);
        this.changeTurns = this.changeTurns.bind(this);
        this.domElement = null;

        
    }    
    setCurrentPlayer(){
        
        if (player1.currentPlayer === true){
            player2.currentPlayer = true;
            player1.currentPlayer = false;
        }else if(player2.currentPlayer === true){
            player1.currentPlayer = true;
            player2.currentPlayer = false;      
        }
        
    }
    changeTurns(){
        if(player1.currentPlayer === true){
            player1.trophy.points++;
            this.updatePoints();
            this.setCurrentPlayer();

        }else if(player2.currentPlayer === true){
            player2.trophy.points++;
            this.updatePoints();
            this.setCurrentPlayer();
        }

    }
    updatePoints(){
        if(player1.currentPlayer === true){
            $('.value1').text('Points: ' + player1.trophy.points);
        }else if(player2.currentPlayer === true){
            $('.value2').text('Points: ' + player2.trophy.points);
        }       
    }
    changeTrophyPoints(){
      
        if(this.trophy.points >= 13){
            if(this.trophy.points == 13){
            $('#modal').toggleClass('hide');
            }
        console.log(this.playerName, "You won!")
        }
        return this.trophy.points;
    }
    
    render(){
        this.domElement = $('<div>')
            .addClass('front')
            .text('Current Player')
        return this.domElement;
        
    }
}




