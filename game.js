$(document).ready(startApp);
var main;
var player;
function startApp() {
    main = new Maingame();
    main.gameFunction = new GameFunction(main);
    $('.tile').on('click', main.clickTile);
    $('.board').on('click', '.frog', main.clickFrog);
    player = new Players()
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
        this.legalJumpUp = 0;
        this.legalJumpDown = 0;
        this.legalJumpLeft = 0;
        this.legalJumpRight = 0;
        this.legalJumpUpRemaining = null;
        this.legalJumpDownRemaining = null;
        this.legalJumpLeftRemaining = null;
        this.legalJumpRightRemaining = null;

    }
    clickTile(event) {
        if (!$(event.currentTarget).children().hasClass('frog') && this.jumpCanBeMade === false) {
            return;
        }
        this.frogTile = $('<div>').addClass('frog');
        var data = $(event.currentTarget).data();
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
        this.targetTileRow = null;
        this.targetTileColumn = null;
        this.frogClicked = false;
        this.gameFunction.setArray();
        this.gameFunction.removeFrogs();
        this.gameFunction.checkLegalJumps();
        this.gameFunction.checkEndGame();
    }
clickFrog(event) {
    $(this.firstFrogClicked).css('box-shadow', 'none')

    if (this.jumpUpTile !== undefined || this.jumpDownTile !== undefined || this.jumpLeftTile !== undefined || this.jumpRightTile !== undefined) {
        if ($(event.target).hasClass('frog') && this.firstFrogClicked !== null) {
            this.gameFunction.resetFrog();
        }
        this.firstFrogClicked = $(event.target);

        $(this.firstFrogClicked).css('box-shadow', '0 0 20px yellow')
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

