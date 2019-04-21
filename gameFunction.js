$(document).ready(startApp)

function startApp (){

}

class GameFunction {
    constructor (gameObj) {
        this.game = gameObj;
    }

    checkEndGame () {
        for (var index = 0; index < this.game.board.length; index++) {
            for (var innerIndex = 0; innerIndex < this.game.board[0].length; innerIndex++) {
                var legalJumpCheck = this.game.board[index][innerIndex];
                if (this.game.board[index][innerIndex] === 1) {
                    if (innerIndex < this.game.board[0].length - 2) {
                        if (this.game.board[index][innerIndex + 1] === 1) { //neighbor right
                            if (this.game.board[index][innerIndex + 2] === 0) { //empty space right of neighbor
                                this.game.legalJumpRight++;
                            }
                        }
                    }
                    if (innerIndex > 1) {
                        if (this.game.board[index][innerIndex - 1] === 1) {
                            if (this.game.board[index][innerIndex - 2] === 0) {
                                this.game.legalJumpLeft++;
                            }
                        }
                    }


                    if (index < this.game.board[0].length - 2) {
                        if (this.game.board[index + 1][innerIndex] === 1) {
                            if (this.game.board[index + 2][innerIndex] === 0) {
                                this.game.legalJumpDown++;
                            }
                        }
                    }

                    if (index > 1) {
                        if (this.game.board[index - 1][innerIndex] === 1) {
                            if (this.game.board[index - 2][innerIndex] === 0) {
                                this.game.legalJumpUp++;
                            }
                        }
                    }
                }
            }
        }
        if (this.game.legalJumpUp > 0) {
            this.game.legalJumpUpRethising = true;
        }
        else { this.game.legalJumpUpRethising = false }
        if (this.game.legalJumpDown > 0) {
            this.game.legalJumpDownRethising = true;
        }
        else { this.game.legalJumpDownRethising = false }
        if (this.game.legalJumpLeft > 0) {
            this.game.legalJumpLeftRethising = true;
        }
        else { this.game.legalJumpLeftRethising = false }
        if (this.game.legalJumpRight > 0) {
            this.game.legalJumpRightRethising = true;
        }
        else { this.game.legalJumpRightRethising = false }

        if (this.game.legalJumpUpRethising === false && this.game.legalJumpDownRethising === false && this.game.legalJumpLeftRethising === false && this.game.legalJumpRightRethising === false) {
            console.log('GAME END GAME END GAME END')
        }
        this.game.legalJumpUp = 0;
        this.game.legalJumpDown = 0;
        this.game.legalJumpLeft = 0;
        this.game.legalJumpRight = 0;
    }

    resetTiles () {
        this.game.jumpCanBeMade = false;
        $(this.game.firstFrogClicked).css('box-shadow', 'none')
        this.game.firstFrogClicked = null;
        $(this.game.jumpUpTile).css('box-shadow', 'none');
        this.game.jumpUpTile = null;
        this.game.jumpUpTileDataRow = null;
        this.game.jumpUpTileDataColumn = null;
        $(this.game.jumpDownTile).css('box-shadow', 'none');
        this.game.jumpDownTile = null;
        this.game.jumpDownTileDataRow = null;
        this.game.jumpDownTileDataColumn = null;
        $(this.game.jumpLeftTile).css('box-shadow', 'none');
        this.game.jumpLeftTile = null;
        this.game.jumpLeftTileDataRow = null;
        this.game.jumpLeftTileDataColumn = null;
        $(this.game.jumpRightTile).css('box-shadow', 'none');
        this.game.jumpRightTile = null;
        this.game.jumpRightTileDataRow = null;
        this.game.jumpRightTileDataColumn = null;
        this.game.jumpedFrogUp = null;
        this.game.jumpedFrogDown = null;
        this.game.jumpedFrogLeft = null;
        this.game.jumpedFrogRight = null;
        this.game.targetTile = null;
        this.game.targetTileRow = null;
        this.game.targetTileColumn = null;
        this.game.targetUpTile = null;
        this.game.targetDownTile = null;
        this.game.targetLeftTile = null;
        this.game.targetRightTile = null;
}
resetFrog () {
    this.game.firstFrogClicked = $(event.target);
    $(this.game.jumpUpTile).css('box-shadow', 'none')
    $(this.game.jumpDownTile).css('box-shadow', 'none')
    $(this.game.jumpLeftTile).css('box-shadow', 'none')
    $(this.game.jumpRightTile).css('box-shadow', 'none')
    this.game.jumpUpTile = null;
    this.game.jumpUpTileDataRow = null;
    this.game.jumpUpTileDataColumn = null;
    this.game.jumpDownTile = null;
    this.game.jumpDownTileDataRow = null;
    this.game.jumpDownTileDataColumn = null;
    this.game.jumpLeftTile = null;
    this.game.jumpLeftTileDataRow = null;
    this.game.jumpLeftTileDataColumn = null;
    this.game.jumpRightTile = null;
    this.game.jumpRightTileDataRow = null;
    this.game.jumpRightTileDataColumn = null;
}
setArray () {
    this.game.frogUp = this.game.board[this.game.row - 1] ? this.game.board[this.game.row - 1][this.game.column] : null;
    this.game.jumpUp = this.game.board[this.game.row - 2] ? this.game.board[this.game.row - 2][this.game.column] : null;
    this.game.frogDown = this.game.board[this.game.row + 1] ? this.game.board[this.game.row + 1][this.game.column] : null;
    this.game.jumpDown = this.game.board[this.game.row + 2] ? this.game.board[this.game.row + 2][this.game.column] : null;
    this.game.frogLeft = this.game.board[this.game.row][this.game.column - 1] ? this.game.board[this.game.row][this.game.column - 1] : null;
    this.game.jumpLeft = this.game.board[this.game.row][this.game.column - 2] === 0 ? this.game.board[this.game.row][this.game.column - 2] : null;
    this.game.frogRight = this.game.board[this.game.row][this.game.column + 1] ? this.game.board[this.game.row][this.game.column + 1] : null;
    this.game.jumpRight = this.game.board[this.game.row][this.game.column + 2] === 0 ? this.game.board[this.game.row][this.game.column + 2] : null;
}
removeFrogs () {
    if ((this.game.jumpCanBeMade === true && this.game.jumpUpTileDataRow === this.game.row && this.game.jumpUpTileDataColumn === this.game.column) || (this.game.jumpCanBeMade === true && this.game.jumpDownTileDataRow === this.game.row && this.game.jumpDownTileDataColumn === this.game.column) || (this.game.jumpCanBeMade === true && this.game.jumpLeftTileDataRow === this.game.row && this.game.jumpLeftTileDataColumn === this.game.column) || (this.game.jumpCanBeMade === true && this.game.jumpRightTileDataRow === this.game.row && this.game.jumpRightTileDataColumn === this.game.column)) {
        if (this.game.firstFrogClicked !== null && $(event.currentTarget).children().length === 0) {
            this.game.board[$(this.game.firstFrogClicked).data('row')][$(this.game.firstFrogClicked).data('column')] = 0;
            $(this.game.firstFrogClicked).remove();
            if (this.game.row === this.game.jumpUpTileDataRow && this.game.column === this.game.jumpUpTileDataColumn) {
                this.game.board[$(this.game.jumpedFrogUp).data('row')][$(this.game.jumpedFrogUp).data('column')] = 0;
                this.game.board[$(this.game.targetUpTile).data('row')][$(this.game.targetUpTile).data('column')] = 1;
                this.game.targetTile = this.game.targetUpTile;
                this.game.targetTileRow = $(this.game.targetTile).data('row');
                this.game.targetTileColumn = $(this.game.targetTile).data('column');
                $(this.game.jumpedFrogUp).remove();
                player1.changeTrophyPoints();
                player1.changeTurns();
                player2.changeTrophyPoints();
                player2.changeTurns();
            }
            else if (this.game.row === this.game.jumpDownTileDataRow && this.game.column === this.game.jumpDownTileDataColumn) {
                this.game.board[$(this.game.jumpedFrogDown).data('row')][$(this.game.jumpedFrogDown).data('column')] = 0;
                this.game.board[$(this.game.targetDownTile).data('row')][$(this.game.targetDownTile).data('column')] = 1;
                this.game.targetTile = this.game.targetDownTile
                this.game.targetTileRow = $(this.game.targetTile).data('row')
                this.game.targetTileColumn = $(this.game.targetTile).data('column')
                $(this.game.jumpedFrogDown).remove()
                player1.changeTrophyPoints();
                player1.changeTurns();
                player2.changeTurns();
            }
            else if (this.game.row === this.game.jumpLeftTileDataRow && this.game.column === this.game.jumpLeftTileDataColumn) {
                this.game.board[$(this.game.jumpedFrogLeft).data('row')][$(this.game.jumpedFrogLeft).data('column')] = 0;
                this.game.board[$(this.game.targetLeftTile).data('row')][$(this.game.targetLeftTile).data('column')] = 1;
                this.game.targetTile = this.game.targetLeftTile;
                this.game.targetTileRow = $(this.game.targetTile).data('row')
                this.game.targetTileColumn = $(this.game.targetTile).data('column')
                $(this.game.jumpedFrogLeft).remove()
                player1.changeTrophyPoints();
                player1.changeTurns();
            }
            else if (this.game.row === this.game.jumpRightTileDataRow && this.game.column === this.game.jumpRightTileDataColumn) {
                this.game.board[$(this.game.jumpedFrogRight).data('row')][$(this.game.jumpedFrogRight).data('column')] = 0;
                this.game.board[$(this.game.targetRightTile).data('row')][$(this.game.targetRightTile).data('column')] = 1;
                this.game.targetTile = this.game.targetRightTile
                this.game.targetTileRow = $(this.game.targetTile).data('row')
                this.game.targetTileColumn = $(this.game.targetTile).data('column')
                $(this.game.jumpedFrogRight).remove()
                player1.changeTrophyPoints();
                player1.changeTurns();
            }
            $(event.currentTarget).append(this.game.frogTile.attr('data-row', this.game.targetTileRow).attr('data-column', this.game.targetTileColumn));
            this.game.gameFunction.resetTiles();
        }
    }
}

checkLegalJumps() {
    if (this.game.frogUp === 1 && this.game.frogUp !== undefined) {
        if (this.game.jumpUp === 0 && this.game.jumpUp !== undefined) {
            this.game.gameFunction.resetTiles();
            $(this.game.jumpUpTile).css('box-shadow', 'none')
            this.game.jumpUpTile = ('.tile[data-row = "' + (this.game.row - 2) + '"][data-column ="' + this.game.column + '"]')
            this.game.targetUpTile = this.game.jumpUpTile;
            this.game.jumpUpTileDataRow = $(this.game.jumpUpTile).data('row');
            this.game.jumpUpTileDataColumn = $(this.game.jumpUpTile).data('column');

            $(this.game.jumpUpTile).css('box-shadow', '0 0 30px red');
            this.game.jumpCanBeMade = true;
            $(this.game.firstFrogClicked).css('box-shadow', 'none')
            this.game.firstFrogClicked = null;
            this.game.jumpedFrogUp = ('.frog[data-row = "' + (this.game.row - 1) + '"][data-column ="' + this.game.column + '"]')
        }
    }
    if (this.game.frogDown === 1 && this.game.frogDown !== undefined) {
        if (this.game.jumpDown === 0 && this.game.jumpDown !== undefined) {
            this.game.gameFunction.resetTiles();
            $(this.game.jumpDownTile).css('box-shadow', 'none')
            this.game.jumpDownTile = $('.tile[data-row = "' + (this.game.row + 2) + '"][data-column ="' + this.game.column + '"]')
            this.game.targetDownTile = this.game.jumpDownTile;
            this.game.jumpDownTileDataRow = $(this.game.jumpDownTile).data('row');
            this.game.jumpDownTileDataColumn = $(this.game.jumpDownTile).data('column');
            this.game.jumpCanBeMade = true;
            $(this.game.firstFrogClicked).css('box-shadow', 'none')
            this.game.firstFrogClicked = null;
            this.game.jumpDownTile.css('box-shadow', '0 0 30px red')
            this.game.jumpedFrogDown = ('.frog[data-row = "' + (this.game.row + 1) + '"][data-column ="' + this.game.column + '"]')
        }
    }
    if (this.game.frogLeft === 1 && this.game.frogLeft !== undefined) {
        if (this.game.jumpLeft === 0 && this.game.jumpLeft !== undefined) {
            this.game.gameFunction.resetTiles();
            $(this.game.jumpLeftTile).css('box-shadow', 'none')
            this.game.jumpLeftTile = $('.tile[data-row = "' + this.game.row + '"][data-column ="' + (this.game.column - 2) + '"]')
            this.game.targetLeftTile = this.game.jumpLeftTile;
            this.game.jumpLeftTileDataRow = $(this.game.jumpLeftTile).data('row');
            this.game.jumpLeftTileDataColumn = $(this.game.jumpLeftTile).data('column');
            this.game.jumpCanBeMade = true;
            $(this.game.firstFrogClicked).css('box-shadow', 'none')
            this.game.firstFrogClicked = null;
            this.game.jumpLeftTile.css('box-shadow', '0 0 30px red')
            this.game.jumpedFrogLeft = ('.frog[data-row = "' + (this.game.row) + '"][data-column ="' + (this.game.column - 1) + '"]')
        }
    }
    if (this.game.frogRight === 1 && this.game.frogRight !== undefined) {
        if (this.game.jumpRight === 0 && this.game.jumpRight !== undefined) {
            this.game.gameFunction.resetTiles();
            $(this.game.jumpRightTile).css('box-shadow', 'none')
            this.game.jumpRightTile = $('.tile[data-row = "' + this.game.row + '"][data-column ="' + (this.game.column + 2) + '"]')
            this.game.targetRightTile = this.game.jumpRightTile;
            this.game.jumpRightTileDataRow = $(this.game.jumpRightTile).data('row');
            this.game.jumpRightTileDataColumn = $(this.game.jumpRightTile).data('column');
            this.game.jumpCanBeMade = true;
            $(this.game.firstFrogClicked).css('box-shadow', 'none')
            this.game.firstFrogClicked = null;
            this.game.jumpRightTile.css('box-shadow', '0 0 30px red')
            this.game.jumpedFrogRight = ('.frog[data-row = "' + this.game.row + '"][data-column ="' + (this.game.column + 1) + '"]')
        }
    }
}

}