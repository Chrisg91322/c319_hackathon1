$(document).ready(startApp);

function startApp () {
    main = new Maingame();
    var clickFrog = main.clickFrog;
    $('.board').on('click', '.frog', clickFrog);
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
        this.clickFrog = this.clickFrog.bind(this);


    }
    
    clickTile (event) {
        this.frogTile = $('<div>').addClass('frog');
        console.log('this is frogtile: ', this.frogTile)
        var data = $(event.target).data();
        console.log(data);
        this.row = data.row;
        this.column = data.column;
        this.frogTile;
        this.jumpUpTile;
        this.jumpOptions = {
            up:null,
            down: null,
            left: null,
            right: null,
        }
        this.targetTile;
        this.previousRow;
        this.previousColumn;
        this.jumpedFrog;
        this.firstTileClicked;
        this.secondTileClicked;
        this.jumpCanBeMade;


        this.frogUp = this.board[this.row -1] ? this.board[this.row-1][this.column] : null;
        this.jumpUp = this.board[this.row-2] ? this.board[this.row-2][this.column]: null;
        this.frogDown = this.board[this.row+1] ? this.board[this.row+1][this.column]: null;
        this.jumpDown = this.board[this.row+2] ? this.board[this.row+2][this.column]: null;
        this.frogLeft = this.board[this.row][this.column-1] ? this.board[this.row][this.column-1]: null;
        this.jumpLeft = this.board[this.row][this.column-2] === 0 ? this.board[this.row][this.column-2]: null;
        this.frogRight = this.board[this.row][this.column+1] ? this.board[this.row][this.column+1]: null;
        this.jumpRight = this.board[this.row][this.column+2] === 0 ? this.board[this.row][this.column+2]: null;
        this.targetTileRow = $(this.targetTile).data('row');
        this.targetTileColumn = $(this.targetTile).data('column');
        this.frogClicked = false;

        console.log ('row and column: ', this.row, this.column);
        console.log ('move left: ', this.row, this.column-1);
        console.log('this is: ', this)

   
        if (this.jumpCanBeMade === true){
            this.board[$(this.firstFrogClicked).data('row')][$(this.firstFrogClicked).data('column')] = 0;
            this.board[$(this.jumpedFrog).data('row')][$(this.jumpedFrog).data('column')] = 0;
            this.board[$(this.targetTile).data('row')][$(this.targetTile).data('column')] = 1;
            $(this.firstFrogClicked).remove();
            $(this.jumpedFrog).remove();
            $(event.target).append(this.frogTile.attr('data-row', this.targetTileRow).attr('data-column', this.targetTileColumn));
            console.log('this.frogTile details:', this.frogTile)
            console.log(this.board);
            this.jumpCanBeMade = false;
        }
        if (this.frogUp === 1 && this.frogUp !==undefined){
            console.log('frog above')
            if (this.jumpUp === 0 && this.jumpUp !== undefined){
                this.jumpUpTile = ('.tile[data-row = "' + (this.row-2) + '"][data-column ="' + this.column + '"]')
                this.targetTile = this.jumpUpTile;
                $(this.jumpUpTile).css('border', '5px solid black')
                this.previousRow = this.row-2;
                this.previousColumn = this.column;
                this.jumpCanBeMade = true;
                this.jumpedFrog = ('.frog[data-row = "' + (this.row-1) + '"][data-column ="' + this.column + '"]')
                console.log('can jump up', this.jumpUpTile)
                console.log('this is this', $(this))
            }
        }
        if (this.frogDown === 1 && this.frogDown !==undefined){
            console.log('frog below')
            if (this.jumpDown === 0 && this.jumpDown !== undefined){
                this.jumpDownTile = $('.tile[data-row = "' + (this.row+2) + '"][data-column ="' + this.column + '"]')
                this.targetTile = this.jumpDownTile;
                console.log(this.jumpDownTile)
                this.previousRow = this.row+2;
                this.previousColumn = this.column;
                this.jumpCanBeMade = true;
                this.jumpDownTile.css('border', '5px solid black')
                this.jumpedFrog = ('.frog[data-row = "' + (this.row+1) + '"][data-column ="' + this.column + '"]')
                console.log('can jump down')
            }
        }
        if (this.frogLeft === 1 && this.frogLeft !==undefined){
            console.log('frog on left')
            if (this.jumpLeft === 0 && this.jumpLeft !== undefined){
                this.jumpLeftTile = $('.tile[data-row = "' + this.row + '"][data-column ="' + (this.column-2) + '"]')
                this.targetTile = this.jumpLeftTile;

                console.log(this.jumpLeftTile)
                this.previousRow = this.row;
                this.previousColumn = this.column-2;
                this.jumpCanBeMade = true;
                this.jumpLeftTile.css('border', '5px solid black')
                this.jumpedFrog = ('.frog[data-row = "' + (this.row) + '"][data-column ="' + (this.column-1) + '"]')
                console.log('can jump left')
            }
        }
        if (this.frogRight === 1 && this.frogRight !==undefined){
            console.log('frog on right')
            if (this.jumpRight === 0 && this.jumpRight !== undefined){
                this.jumpRightTile = $('.tile[data-row = "' + this.row + '"][data-column ="' + (this.column+2) + '"]')
                this.targetTile = this.jumpRightTile;

                console.log(this.jumpRightTile)
                this.previousRow = this.row;
                this.previousColumn = this.column+2
                this.jumpCanBeMade = true;
                this.jumpRightTile.css('border', '5px solid black')
                this.jumpedFrog = ('.frog[data-row = "' + this.row + '"][data-column ="' + (this.column+1) + '"]')
                console.log('can jump right')
            }
        }
    }
    clickFrog () {
        this.firstFrogClicked = $(event.target);
        console.log(this.firstFrogClicked);
        console.log('this frog is: ', this.firstFrogClicked)
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

    