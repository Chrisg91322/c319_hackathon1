$(document).ready(startApp);

function startApp () {
    main = new Maingame();
    var clickTile = main.clickTile;
    $('.tile').on('click', clickTile);

}


class Maingame {
    constructor() {
        this.board = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
        ]
        this.clickTile = this.clickTile.bind(this);

    }
    
    clickTile (event) {
        var data = $(event.target).data();
        console.log(data);
        this.row = data.row;
        this.column = data.column;
        // var row = $(event.target).data(row);
        // var column = $(event.target).data(column);
        // var arrayNum = this.board[this.row][this.column];
        // this.arrayNum = arrayNum;
        this.frogUp = this.board[this.row -1] ? this.board[this.row-1][this.column] : null;
        this.jumpUp = this.board[this.row-2] ? this.board[this.row-2][this.column]: null;
        this.frogDown = this.board[this.row+1] ? this.board[this.row+1][this.column]: null;
        this.jumpDown = this.board[this.row+2] ? this.board[this.row+2][this.column]: null;

        this.frogLeft = this.board[this.row][this.column-1] ? this.board[this.row][this.column-1]: null;

        this.jumpLeft = this.board[this.row][this.column-2] === 0 ? this.board[this.row][this.column-2]: null;
        this.frogRight = this.board[this.row][this.column+1] ? this.board[this.row][this.column+1]: null;
        this.jumpRight = this.board[this.row][this.column+2] === 0 ? this.board[this.row][this.column+2]: null;

        console.log ('row and column: ', this.row, this.column);
        console.log ('move left: ', this.row, this.column-1);
        if (this.frogUp === 1 && this.frogUp !==undefined){
            console.log('frog above')
            if (this.jumpUp === 0 && this.jumpUp !== undefined){
                console.log('can jump up')
            }
        }
        if (this.frogDown === 1 && this.frogDown !==undefined){
            console.log('frog below')
            if (this.jumpDown === 0 && this.jumpDown !== undefined){
                console.log('can jump down')
            }
        }
        if (this.frogLeft === 1 && this.frogLeft !==undefined){
            console.log('frog on left')
            if (this.jumpLeft === 0 && this.jumpLeft !== undefined){
                console.log('can jump left')
            }
        }
        if (this.frogRight === 1 && this.frogRight !==undefined){
            console.log('frog on right')
            if (this.jumpRight === 0 && this.jumpRight !== undefined){
                console.log('can jump right')
            }
        }
    }

    jumpUp () {

    }

    jumpDown () {

    }

    jumpLeft () {

    }

    jumpRight () {

    }
}

    