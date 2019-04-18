$(document).ready(startApp)

var board = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
]
var frogTile;
var jumpUpTile;
var jumpOptions = {
    up:null,
    down: null,
    left: null,
    right: null,
}
var targetTile;
var previousRow;
var previousColumn;
var firstFrogClicked;
var jumpedFrog;
var firstTileClicked;
var secondTileClicked;
var jumpCanBeMade;
function startApp ()
{
    $('.tile').on('click', clickTile)
    $('.board').on('click', '.frog', clickFrog)
}
function clickFrog () {
    firstFrogClicked = this;
    console.log('this frog is: ', this)
}
function clickTile () {
    frogTile = $('<div>').addClass('frog')
    console.log('this is frogtile: ', frogTile)
    var data = $(this).data();
    var row = data.row;
    var column = data.column
    var arrayNum = board[row][column]
    var frogUp = board[row -1] ? board[row-1][column] : null;
    var jumpUp = board[row-2] ? board[row-2][column]: null;
    var frogDown = board[row+1] ? board[row+1][column]: null;
    var jumpDown = board[row+2] ? board[row+2][column]: null;
    var frogLeft = board[row][column-1] === 1 ? board[row][column-1]: null;
    var jumpLeft = board[row][column-2] === 0 ? board[row][column-2]: null;
    var frogRight = board[row][column+1] === 1 ? board[row][column+1]: null;
    var jumpRight = board[row][column+2] === 0 ? board[row][column+2]: null;
    var targetTileRow = $(targetTile).data('row');
    var targetTileColumn = $(targetTile).data('column');
    var frogClicked = false;
    console.log ('row and column: ', row, column)
    console.log ('array value: ', arrayNum)
    console.log ('move left: ', row, column-1)
    console.log('this is: ', this)
    // if (previousRow === row && previousColumn === column) {
    if (jumpCanBeMade === true){
        board[$(firstFrogClicked).data('row')][$(firstFrogClicked).data('column')] = 0;
        board[$(jumpedFrog).data('row')][$(jumpedFrog).data('column')] = 0;
        board[$(targetTile).data('row')][$(targetTile).data('column')] = 1;
        $(firstFrogClicked).remove();
        $(jumpedFrog).remove();
        $(this).append(frogTile.attr('data-row', targetTileRow).attr('data-column', targetTileColumn))
        console.log('frogTile details:', frogTile)
        console.log(board);
        jumpCanBeMade = false;
    }
    if (frogUp === 1 && frogUp !==undefined){
        console.log('frog above')
        if (jumpUp === 0 && jumpUp !== undefined){
            jumpUpTile = ('.tile[data-row = "' + (row-2) + '"][data-column ="' + column + '"]')
            targetTile=jumpUpTile;
            $(jumpUpTile).css('border', '5px solid black')
            previousRow = row-2;
            previousColumn = column
            jumpCanBeMade = true;
            jumpedFrog = ('.frog[data-row = "' + (row-1) + '"][data-column ="' + column + '"]')
            console.log('can jump up', jumpUpTile)
            console.log('this is this', $(this))
        }
    }
    if (frogDown === 1 && frogDown !==undefined){
        console.log('frog below')
        if (jumpDown === 0 && jumpDown !== undefined){
            var jumpDownTile = $('.tile[data-row = "' + (row+2) + '"][data-column ="' + column + '"]')
            targetTile=jumpDownTile;
            console.log(jumpDownTile)
            previousRow = row+2;
            previousColumn = column
            jumpCanBeMade = true;
            jumpDownTile.css('border', '5px solid black')
            jumpedFrog = ('.frog[data-row = "' + (row+1) + '"][data-column ="' + column + '"]')
            console.log('can jump down')
        }
    }
    if (frogLeft === 1 && frogLeft !==undefined){
        console.log('frog on left')
        if (jumpLeft === 0 && jumpLeft !== undefined){
            var jumpLeftTile = $('.tile[data-row = "' + row + '"][data-column ="' + (column-2) + '"]')
            targetTile=jumpLeftTile;
            console.log(jumpLeftTile)
            previousRow = row;
            previousColumn = column-2
            jumpCanBeMade = true;
            jumpLeftTile.css('border', '5px solid black')
            jumpedFrog = ('.frog[data-row = "' + (row) + '"][data-column ="' + (column-1) + '"]')
            console.log('can jump left')
        }
    }
    if (frogRight === 1 && frogRight !==undefined){
        console.log('frog on right')
        if (jumpRight === 0 && jumpRight !== undefined){
            var jumpRightTile = $('.tile[data-row = "' + row + '"][data-column ="' + (column+2) + '"]')
            targetTile=jumpRightTile;
            console.log(jumpRightTile)
            previousRow = row;
            previousColumn = column+2
            jumpCanBeMade = true;
            jumpRightTile.css('border', '5px solid black')
            jumpedFrog = ('.frog[data-row = "' + row + '"][data-column ="' + (column+1) + '"]')
            console.log('can jump right')
        }
    }
}
