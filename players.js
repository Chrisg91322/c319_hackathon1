class Players{
    constructor(playerName, image){
        this.name = playerName;
        this.image = image;
        this.points = {
            frogsJumped: 0,
            trophies: 0
        }
        this.domElement = null;
        

    }    
 
    changeTurns(){
        if(this.name == 'Green Rider'){
            return player++;
            }if(this.name !== 'Green Rider'){
                return player--; 
            }
        }
}
var player = [new Players("Green Rider"), new Players("Purple Rider")];
this.currentPlayer = player[0];
this.opposingPlayer = player[1];

// }else if(this.name !== 'Purple Rider')
// return player[0];
