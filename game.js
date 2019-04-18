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
        this.firstFrogClicked = null;    

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
        this.jumpUpTileDataRow;
        this.jumpUpTileDataColumn;
        this.jumpDownTile;
        this.jumpDownTileDataRow;
        this.jumpDownTileDataColumn;
        this.jumpLeftTile;
        this.jumpLeftTileDataRow;
        this.jumpLeftTileDataColumn;
        this.jumpRightTile;
        this.jumpRightTileDataRow;
        this.jumpRightTileDataColumn;
        this.jumpOptions = {
            up:null,
            down: null,
            left: null,
            right: null,
        }
        this.targetTile;
        this.targetUpTile;
        this.targetDownTile;
        this.targetLeftTile;
        this.targetRightTile;
        this.jumpedFrog;
        this.jumpedFrogUp;
        this.jumpedFrogDown;
        this.jumpedFrogRight;
        this.jumpedFrogLeft;
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
        this.targetTileRow = null;
        this.targetTileColumn = null;
        this.frogClicked = false;

        console.log ('row and column: ', this.row, this.column);
        console.log ('move left: ', this.row, this.column-1);
        console.log('this is: ', this)

   
        if ((this.jumpCanBeMade === true && this.jumpUpTileDataRow === this.row && this.jumpUpTileDataColumn === this.column)||(this.jumpCanBeMade === true && this.jumpDownTileDataRow === this.row && this.jumpDownTileDataColumn === this.column)||(this.jumpCanBeMade === true && this.jumpLeftTileDataRow === this.row && this.jumpLeftTileDataColumn === this.column)||(this.jumpCanBeMade === true && this.jumpRightTileDataRow === this.row && this.jumpRightTileDataColumn === this.column)){
            if (this.firstFrogClicked!==null && $(event.target).children().length === 0) {
            this.board[$(this.firstFrogClicked).data('row')][$(this.firstFrogClicked).data('column')] = 0;
            $(this.firstFrogClicked).remove();
            if (this.row === this.jumpUpTileDataRow && this.column === this.jumpUpTileDataColumn){
            this.board[$(this.jumpedFrogUp).data('row')][$(this.jumpedFrogUp).data('column')] = 0;
            this.board[$(this.targetUpTile).data('row')][$(this.targetUpTile).data('column')] = 1;
            this.targetTile = this.targetUpTile;
            this.targetTileRow = $(this.targetTile).data('row');
            this.targetTileColumn = $(this.targetTile).data('column');
            $(this.jumpedFrogUp).remove();
            // console.log('this.frogTile details:', this.frogTile)
            // console.log(this.board);
            // this.jumpCanBeMade = false;
        }
        else if (this.row === this.jumpDownTileDataRow && this.column === this.jumpDownTileDataColumn){
            this.board[$(this.jumpedFrogDown).data('row')][$(this.jumpedFrogDown).data('column')] = 0;
            this.board[$(this.targetDownTile).data('row')][$(this.targetDownTile).data('column')] = 1;
            this.targetTile = this.targetDownTile
            this.targetTileRow = $(this.targetTile).data('row')
            this.targetTileColumn = $(this.targetTile).data('column')
            $(this.jumpedFrogDown).remove()
        }
        else if (this.row === this.jumpLeftTileDataRow && this.column === this.jumpLeftTileDataColumn){
            this.board[$(this.jumpedFrogLeft).data('row')][$(this.jumpedFrogLeft).data('column')] = 0;
            this.board[$(this.targetLeftTile).data('row')][$(this.targetLeftTile).data('column')] = 1;
            this.targetTile = this.targetLeftTile;
            this.targetTileRow = $(this.targetTile).data('row')
            this.targetTileColumn = $(this.targetTile).data('column')
            $(this.jumpedFrogLeft).remove()
        }
        else if (this.row === this.jumpRightTileDataRow && this.column === this.jumpRightTileDataColumn){
            this.board[$(this.jumpedFrogRight).data('row')][$(this.jumpedFrogRight).data('column')] = 0;
            this.board[$(this.targetRightTile).data('row')][$(this.targetRightTile).data('column')] = 1;
            this.targetTile = this.targetRightTile
            this.targetTileRow = $(this.targetTile).data('row')
            this.targetTileColumn = $(this.targetTile).data('column')
            $(this.jumpedFrogRight).remove()
        }
        $(event.target).append(this.frogTile.attr('data-row', this.targetTileRow).attr('data-column', this.targetTileColumn));
        console.log('frogTile details:', this.frogTile)
        console.log(board);
        this.jumpCanBeMade = false;
        this.firstFrogClicked = null;
        this.jumpUpTile = null;
        this.jumpUpTileDataRow = null;
        this.jumpUpTileDataColumn = null;
        this.jumpDownTile = null;
        this.jumpDownTileDataRow = null;
        this.jumpDownTileDataColumn = null;
        this.jumpLeftTile = null;
        this.jumpLeftTileDataRow = null;
        this.jumpLeftTileDataColumn = null;
        this.jumpRightTile = null;
        this.jumpRightTileDataRow = null;
        this.jumpRightTileDataColumn = null;
        this.jumpedFrogUp = null;
        this.jumpedFrogDown = null;
        this.jumpedFrogLeft = null;
        this.jumpedFrogRight = null;
        this.targetTile = null;
        this.targetTileRow = null;
        this.targetTileColumn = null;
        this.targetUpTile = null;
        this.targetDownTile = null;
        this.targetLeftTile = null;
        this.targetRightTile = null;
        }
    }
        if (this.frogUp === 1 && this.frogUp !==undefined){
            console.log('frog above')
            if (this.jumpUp === 0 && this.jumpUp !== undefined){
                this.jumpUpTile = ('.tile[data-row = "' + (this.row-2) + '"][data-column ="' + this.column + '"]')
                this.targetUpTile = this.jumpUpTile;
                this.jumpUpTileDataRow = $(this.jumpUpTile).data('row');
                this.jumpUpTileDataColumn = $(this.jumpUpTile).data('column');
                this.firstTileClicked=this;
                $(this.jumpUpTile).css('border', '5px solid black');
                this.jumpCanBeMade = true;
                this.firstFrogClicked = null; 
                this.jumpedFrogUp = ('.frog[data-row = "' + (this.row-1) + '"][data-column ="' + this.column + '"]')
                console.log('can jump up', this.jumpUpTile)
                console.log('this is this', $(this))
            }
        }
        if (this.frogDown === 1 && this.frogDown !==undefined){
            console.log('frog below')
            if (this.jumpDown === 0 && this.jumpDown !== undefined){
                this.jumpDownTile = $('.tile[data-row = "' + (this.row+2) + '"][data-column ="' + this.column + '"]')
                this.targetDownTile = this.jumpDownTile;
                this.jumpDownTileDataRow = $(this.jumpDownTile).data('row');
                this.jumpDownTileDataColumn = $(this.jumpDownTile).data('column');
                this.firstTileClicked=this;
                console.log(this.jumpDownTile)

                this.jumpCanBeMade = true;
                this.firstFrogClicked = null; 
                this.jumpDownTile.css('border', '5px solid black')
                this.jumpedFrogDown = ('.frog[data-row = "' + (this.row+1) + '"][data-column ="' + this.column + '"]')
                console.log('can jump down')
            }
        }
        if (this.frogLeft === 1 && this.frogLeft !==undefined){
            console.log('frog on left')
            if (this.jumpLeft === 0 && this.jumpLeft !== undefined){
                this.jumpLeftTile = $('.tile[data-row = "' + this.row + '"][data-column ="' + (this.column-2) + '"]')
                this.targetLeftTile = this.jumpLeftTile;
                this.jumpLeftTileDataRow = $(this.jumpLeftTile).data('row');
                this.jumpLeftTileDataColumn = $(this.jumpLeftTile).data('column');
                this.firstTileClicked=this;
                console.log(this.jumpLeftTile)

                this.jumpCanBeMade = true;
                this.firstFrogClicked = null; 
                this.jumpLeftTile.css('border', '5px solid black')
                this.jumpedFrogLeft = ('.frog[data-row = "' + (this.row) + '"][data-column ="' + (this.column-1) + '"]')
                console.log('can jump left')
            }
        }
        if (this.frogRight === 1 && this.frogRight !==undefined){
            console.log('frog on right')
            if (this.jumpRight === 0 && this.jumpRight !== undefined){
                this.jumpRightTile = $('.tile[data-row = "' + this.row + '"][data-column ="' + (this.column+2) + '"]')
                this.targetRightTile = this.jumpRightTile;
                this.jumpRightTileDataRow = $(this.jumpRightTile).data('row');
                this.jumpRightTileDataColumn = $(this.jumpRightTile).data('column');
                this.firstTileClicked=this;
                console.log(this.jumpRightTile)
                
                this.jumpCanBeMade = true;
                this.firstFrogClicked = null; 
                this.jumpRightTile.css('border', '5px solid black')
                this.jumpedFrogRight = ('.frog[data-row = "' + this.row + '"][data-column ="' + (this.column+1) + '"]')
                console.log('can jump right')
            }
        }
    }
    clickFrog () {
        if (this.jumpUpTile !==undefined || this.jumpDownTile !==undefined || this.jumpLeftTile !==undefined || this.jumpRightTile !==undefined){
            if ($(event.target).hasClass('frog') && this.firstFrogClicked !==null){
                this.firstFrogClicked = this;
                this.jumpUpTile = null;
                this.jumpUpTileDataRow = null;
                this.jumpUpTileDataColumn = null;
                this.jumpDownTile = null;
                this.jumpDownTileDataRow = null;
                this.jumpDownTileDataColumn = null;
                this.jumpLeftTile = null;
                this.jumpLeftTileDataRow = null;
                this.jumpLeftTileDataColumn = null;
                this.jumpRightTile = null;
                this.jumpRightTileDataRow = null;
                this.jumpRightTileDataColumn = null;
            }
        this.firstFrogClicked = $(event.target);
        $(this.firstFrogClicked).css('border', '5px black solid')
        console.log(this.firstFrogClicked);
        // console.log('this frog is: ', this.firstFrogClicked)
    }
}

    frogUp () {

    }

    frogDown () {

    }

    frogLeft () {

    }

    frogRight () {

    }
}

    