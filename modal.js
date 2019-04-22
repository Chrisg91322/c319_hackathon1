    class Modal{
        constructor(shadow, body, message ){
            this.shadow = $(shadow);
            this.body = $(body);
            this.message = $(message);
            this.onClose;
            this.hide = this.hide.bind(this);
    
        }

        gameWinModal () {
            //run this method in endGame function
            if (this.player1Points > this.player2Points || this.player1Points < this.player2Points) {
                if (this.player1) {
                    this.updateContents('Player 1 Wins!');
                    this.show();
                }
                if (this.player2) {
                    this.updateContents('Player 2 Wins!');
                    this.show();  
                 }
                 return;
            }
            
        }
        
        show(){
            this.shadow.show();
            this.body.show();
        }
        
        hide(){
            this.shadow.hide();
            this.body.hide();
        }
        
        updateContents( string ){
            this.message.text(string);
        
            
        }
        
        init(){
            this.hide();
            this.shadow.off('click');
            this.shadow.click(this.onClose);
            this.shadow.click(this.hide);
        }
    
    }
