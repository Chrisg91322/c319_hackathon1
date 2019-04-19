$(document).ready(startApp);

function startApp() {
    main = new Maingame();
    var clickTile = main.clickTile;
    $('.tile').on('click', clickTile);
    player = new Players()
    var clickFrog = main.clickFrog;
    $('.board').on('click', '.frog', clickFrog);  
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
        this.jumpCanBeMade;
        this.legalJumpUp=0;
        this.legalJumpDown=0;
        this.legalJumpLeft=0;
        this.legalJumpRight=0;
        this.legalJumpUpRemaining=null;
        this.legalJumpDownRemaining=null;
        this.legalJumpLeftRemaining=null;
        this.legalJumpRightRemaining=null;

    }

    checkEndGame () {
        for (var index=0; index<this.board.length; index++){
            for (var innerIndex=0; innerIndex<this.board[0].length; innerIndex++){
                var legalJumpCheck = this.board[index][innerIndex];
                if (this.board[index][innerIndex] === 1){
                    if (innerIndex < this.board[0].length-2){
                        if (this.board[index][innerIndex+1] === 1){ //neighbor right
                            if (this.board[index][innerIndex+2] === 0){ //empty space right of neighbor
                                console.log('legaljumpright true')
                                this.legalJumpRight++;
                            }
                    }
                }
                    if (innerIndex >1){
                        if (this.board[index][innerIndex-1] === 1){
                            if (this.board[index][innerIndex-2] === 0){
                                this.legalJumpLeft++;
                                console.log('legaljumpleft true')
                            }
                        }
                }
                    

                    if (index<this.board[0].length-2){
                        if (this.board[index+1][innerIndex] === 1){
                            if (this.board[index+2][innerIndex] === 0){
                                this.legalJumpDown++;
                                console.log('legaljumpdown true')
                        }
                    }
                    }

                    if(index>1){
                        if (this.board[index-1][innerIndex] === 1){
                            if (this.board[index-2][innerIndex] === 0){
                                console.log('legaljumpup true')
                                this.legalJumpUp++;
                            }
                        }
                    }
            }
            }
        }
        if (this.legalJumpUp > 0){
            this.legalJumpUpRemaining=true;
        }
        else{this.legalJumpUpRemaining=false}
        if (this.legalJumpDown > 0){
            this.legalJumpDownRemaining=true;
        }
        else{this.legalJumpDownRemaining=false}
        if (this.legalJumpLeft > 0){
            this.legalJumpLeftRemaining=true;
        }
        else{this.legalJumpLeftRemaining=false}
        if (this.legalJumpRight > 0){
            this.legalJumpRightRemaining=true;
        }
        else{this.legalJumpRightRemaining=false}

        if (this.legalJumpUpRemaining === false && this.legalJumpDownRemaining === false && this.legalJumpLeftRemaining === false && this.legalJumpRightRemaining === false){
            console.log('GAME END GAME END GAME END')
        }
        this.legalJumpUp=0;
        this.legalJumpDown=0;
        this.legalJumpLeft=0;
        this.legalJumpRight=0;
    }
    
    clickTile (event) {
        console.log(event);

        if (!$(event.currentTarget).children().hasClass('frog') && this.jumpCanBeMade === false){
            return;
        }
        this.frogTile = $('<div>').addClass('frog');
        console.log('this is frogtile: ', this.frogTile)
        var data = $(event.currentTarget).data();
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
            up: null,
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


        this.frogUp = this.board[this.row - 1] ? this.board[this.row - 1][this.column] : null;
        this.jumpUp = this.board[this.row - 2] ? this.board[this.row - 2][this.column] : null;
        this.frogDown = this.board[this.row + 1] ? this.board[this.row + 1][this.column] : null;
        this.jumpDown = this.board[this.row + 2] ? this.board[this.row + 2][this.column] : null;
        this.frogLeft = this.board[this.row][this.column - 1] ? this.board[this.row][this.column - 1] : null;
        this.jumpLeft = this.board[this.row][this.column - 2] === 0 ? this.board[this.row][this.column - 2] : null;
        this.frogRight = this.board[this.row][this.column + 1] ? this.board[this.row][this.column + 1] : null;
        this.jumpRight = this.board[this.row][this.column + 2] === 0 ? this.board[this.row][this.column + 2] : null;
        this.targetTileRow = null;
        this.targetTileColumn = null;
        this.frogClicked = false;

        console.log('row and column: ', this.row, this.column);
        console.log('move left: ', this.row, this.column - 1);
        console.log('this is: ', this)

        if ((this.jumpCanBeMade === true && this.jumpUpTileDataRow === this.row && this.jumpUpTileDataColumn === this.column)||(this.jumpCanBeMade === true && this.jumpDownTileDataRow === this.row && this.jumpDownTileDataColumn === this.column)||(this.jumpCanBeMade === true && this.jumpLeftTileDataRow === this.row && this.jumpLeftTileDataColumn === this.column)||(this.jumpCanBeMade === true && this.jumpRightTileDataRow === this.row && this.jumpRightTileDataColumn === this.column)){
            if (this.firstFrogClicked!==null && $(event.currentTarget).children().length === 0) {
                this.board[$(this.firstFrogClicked).data('row')][$(this.firstFrogClicked).data('column')] = 0;
                $(this.firstFrogClicked).remove();
                if (this.row === this.jumpUpTileDataRow && this.column === this.jumpUpTileDataColumn){
                    this.board[$(this.jumpedFrogUp).data('row')][$(this.jumpedFrogUp).data('column')] = 0;
                    this.board[$(this.targetUpTile).data('row')][$(this.targetUpTile).data('column')] = 1;
                    this.targetTile = this.targetUpTile;
                    this.targetTileRow = $(this.targetTile).data('row');
                    this.targetTileColumn = $(this.targetTile).data('column');
                    $(this.jumpedFrogUp).remove();
                    player1.changeTrophyPoints();
                    player1.changeTurns();
                    player2.changeTrophyPoints();
                    player2.changeTurns();
                    // console.log('this.frogTile details:', this.frogTile)
                    console.log("frog jumped up");
                    // this.jumpCanBeMade = false;
                }
                else if (this.row === this.jumpDownTileDataRow && this.column === this.jumpDownTileDataColumn) {
                    this.board[$(this.jumpedFrogDown).data('row')][$(this.jumpedFrogDown).data('column')] = 0;
                    this.board[$(this.targetDownTile).data('row')][$(this.targetDownTile).data('column')] = 1;
                    this.targetTile = this.targetDownTile
                    this.targetTileRow = $(this.targetTile).data('row')
                    this.targetTileColumn = $(this.targetTile).data('column')
                    $(this.jumpedFrogDown).remove()
                    player1.changeTrophyPoints();
                    player1.changeTurns();
                    player2.changeTurns();
                    console.log("frog jumped down");
                }
                else if (this.row === this.jumpLeftTileDataRow && this.column === this.jumpLeftTileDataColumn) {
                    this.board[$(this.jumpedFrogLeft).data('row')][$(this.jumpedFrogLeft).data('column')] = 0;
                    this.board[$(this.targetLeftTile).data('row')][$(this.targetLeftTile).data('column')] = 1;
                    this.targetTile = this.targetLeftTile;
                    this.targetTileRow = $(this.targetTile).data('row')
                    this.targetTileColumn = $(this.targetTile).data('column')
                    $(this.jumpedFrogLeft).remove()
                    player1.changeTrophyPoints();
                    player1.changeTurns();
                    console.log("frog jumped left");
                }
                else if (this.row === this.jumpRightTileDataRow && this.column === this.jumpRightTileDataColumn) {
                    this.board[$(this.jumpedFrogRight).data('row')][$(this.jumpedFrogRight).data('column')] = 0;
                    this.board[$(this.targetRightTile).data('row')][$(this.targetRightTile).data('column')] = 1;
                    this.targetTile = this.targetRightTile
                    this.targetTileRow = $(this.targetTile).data('row')
                    this.targetTileColumn = $(this.targetTile).data('column')
                    $(this.jumpedFrogRight).remove()
                    player1.changeTrophyPoints();
                    player1.changeTurns();
                    console.log("frog jumped right");
                }
            }
        $(event.currentTarget).append(this.frogTile.attr('data-row', this.targetTileRow).attr('data-column', this.targetTileColumn));
        console.log('frogTile details:', this.frogTile)
        console.log(this.board);
        this.jumpCanBeMade = false;
        this.firstFrogClicked = null;
        $(this.jumpUpTile).css('box-shadow', 'none');
        this.jumpUpTile = null;
        this.jumpUpTileDataRow = null;
        this.jumpUpTileDataColumn = null;
        $(this.jumpDownTile).css('box-shadow', 'none');
        this.jumpDownTile = null;
        this.jumpDownTileDataRow = null;
        this.jumpDownTileDataColumn = null;
        $(this.jumpLeftTile).css('box-shadow', 'none');
        this.jumpLeftTile = null;
        this.jumpLeftTileDataRow = null;
        this.jumpLeftTileDataColumn = null;
        $(this.jumpRightTile).css('box-shadow', 'none');
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
        if (this.frogUp === 1 && this.frogUp !== undefined) {
            console.log('frog above')
            if (this.jumpUp === 0 && this.jumpUp !== undefined){
                $(this.jumpUpTile).css('box-shadow', 'none')
                this.jumpUpTile = ('.tile[data-row = "' + (this.row-2) + '"][data-column ="' + this.column + '"]')
                this.targetUpTile = this.jumpUpTile;
                this.jumpUpTileDataRow = $(this.jumpUpTile).data('row');
                this.jumpUpTileDataColumn = $(this.jumpUpTile).data('column');
                
                $(this.jumpUpTile).css('box-shadow', '0 0 20px blue');
                this.jumpCanBeMade = true;
                $(this.firstFrogClicked).css('box-shadow', 'none')
                this.firstFrogClicked = null; 
                this.jumpedFrogUp = ('.frog[data-row = "' + (this.row-1) + '"][data-column ="' + this.column + '"]')
                console.log('can jump up', this.jumpUpTile)
                console.log('this is this', $(this))
            }
        }
        if (this.frogDown === 1 && this.frogDown !== undefined) {
            console.log('frog below')
            if (this.jumpDown === 0 && this.jumpDown !== undefined){
                $(this.jumpDownTile).css('box-shadow', 'none')
                this.jumpDownTile = $('.tile[data-row = "' + (this.row+2) + '"][data-column ="' + this.column + '"]')
                this.targetDownTile = this.jumpDownTile;
                this.jumpDownTileDataRow = $(this.jumpDownTile).data('row');
                this.jumpDownTileDataColumn = $(this.jumpDownTile).data('column');
                
                console.log(this.jumpDownTile)

                this.jumpCanBeMade = true;
                $(this.firstFrogClicked).css('box-shadow', 'none')
                this.firstFrogClicked = null; 
                this.jumpDownTile.css('box-shadow', '0 0 20px blue')
                this.jumpedFrogDown = ('.frog[data-row = "' + (this.row+1) + '"][data-column ="' + this.column + '"]')
                console.log('can jump down')
            }
        }
        if (this.frogLeft === 1 && this.frogLeft !== undefined) {
            console.log('frog on left')
            if (this.jumpLeft === 0 && this.jumpLeft !== undefined){
                $(this.jumpLeftTile).css('box-shadow', 'none')
                this.jumpLeftTile = $('.tile[data-row = "' + this.row + '"][data-column ="' + (this.column-2) + '"]')
                this.targetLeftTile = this.jumpLeftTile;
                this.jumpLeftTileDataRow = $(this.jumpLeftTile).data('row');
                this.jumpLeftTileDataColumn = $(this.jumpLeftTile).data('column');
                
                console.log(this.jumpLeftTile)

                this.jumpCanBeMade = true;
                $(this.firstFrogClicked).css('box-shadow', 'none')
                this.firstFrogClicked = null; 
                this.jumpLeftTile.css('box-shadow', '0 0 20px blue')
                this.jumpedFrogLeft = ('.frog[data-row = "' + (this.row) + '"][data-column ="' + (this.column-1) + '"]')
                console.log('can jump left')
            }
        }
        if (this.frogRight === 1 && this.frogRight !== undefined) {
            console.log('frog on right')
            if (this.jumpRight === 0 && this.jumpRight !== undefined){
                $(this.jumpRightTile).css('box-shadow', 'none')
                this.jumpRightTile = $('.tile[data-row = "' + this.row + '"][data-column ="' + (this.column+2) + '"]')
                this.targetRightTile = this.jumpRightTile;
                this.jumpRightTileDataRow = $(this.jumpRightTile).data('row');
                this.jumpRightTileDataColumn = $(this.jumpRightTile).data('column');
                
                console.log(this.jumpRightTile)

                this.jumpCanBeMade = true;
                $(this.firstFrogClicked).css('box-shadow', 'none')
                this.firstFrogClicked = null; 
                this.jumpRightTile.css('box-shadow', '0 0 20px blue')
                this.jumpedFrogRight = ('.frog[data-row = "' + this.row + '"][data-column ="' + (this.column+1) + '"]')
                console.log('can jump right')
            }
        }
        this.checkEndGame();
    }
    clickFrog (event) {        
        console.log(event);
        $(this.firstFrogClicked).css('box-shadow', 'none')

        if (this.jumpUpTile !==undefined || this.jumpDownTile !==undefined || this.jumpLeftTile !==undefined || this.jumpRightTile !==undefined){
            if ($(event.target).hasClass('frog') && this.firstFrogClicked !==null){
                this.firstFrogClicked = $(event.target);
                $(this.jumpUpTile).css('box-shadow', 'none')
                $(this.jumpDownTile).css('box-shadow', 'none')
                $(this.jumpLeftTile).css('box-shadow', 'none')
                $(this.jumpRightTile).css('box-shadow', 'none')
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
    
        $(this.firstFrogClicked).css('box-shadow', '0 0 20px yellow')
        console.log(this.firstFrogClicked);
        // console.log('this frog is: ', this.firstFrogClicked)
    }
    }
    frogUp() {
        if (this.jumpedUpFrog === true) {
            if (player1 === true || player2 === true) {
                points++;
            }
        }
        updatePoints();
        console.log('Point added for jump up');
    }

    frogDown() {
        if (this.jumpedDownFrog === true) {
            if (player1 === true || player2 === true) {
                points++;
            }
        }
        updatePoints();
        console.log('Point added for jump down');
    }
    frogLeft() {
        if (this.jumpedLeftFrog === true) {
            if (player1 === true || player2 === true) {
                points++;
            }
        }
        updatePoints();
        $('.')
        console.log('Point added for jump left');
    }
    frogRight() {
        if (this.jumpedRightFrog === true) {
            if (player1 === true || player2 === true) {
                points++;
            }
            updatePoints();
            console.log('Point added for jump right');
        }
    }
    }


