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
var jumpUpTileDataRow;
var jumpUpTileDataColumn;
var jumpDownTile;
var jumpDownTileDataRow;
var jumpDownTileDataColumn;
var jumpLeftTile;
var jumpLeftTileDataRow;
var jumpLeftTileDataColumn;
var jumpRightTile;
var jumpRightTileDataRow;
var jumpRightTileDataColumn;
var jumpOptions = {
    up:null,
    down: null,
    left: null,
    right: null,
}
var targetTile;
var targetUpTile;
var targetDownTile;
var targetLeftTile;
var targetRightTile;
var previousRow;
var previousColumn;
var firstFrogClicked;
var secondFrogClicked;
var jumpedFrogUp;
var jumpedFrogDown;
var jumpedFrogRight;
var jumpedFrogLeft;
var firstTileClicked;
var secondTileClicked;
var jumpCanBeMade;
function startApp ()
{
    $('.tile').on('click', clickTile)
    $('.board').on('click', '.frog', clickFrog)
    firstFrogClicked = null;
}
function clickFrog () {
    if (jumpUpTile !==undefined || jumpDownTile !==undefined || jumpLeftTile !==undefined || jumpRightTile !==undefined){
        if ($(this).hasClass('frog') && firstFrogClicked !==null){
            firstFrogClicked = this;
            jumpUpTile = null;
            jumpUpTileDataRow = null;
            jumpUpTileDataColumn = null;
            jumpDownTile = null;
            jumpDownTileDataRow = null;
            jumpDownTileDataColumn = null;
            jumpLeftTile = null;
            jumpLeftTileDataRow = null;
            jumpLeftTileDataColumn = null;
            jumpRightTile = null;
            jumpRightTileDataRow = null;
            jumpRightTileDataColumn = null;
        }
    firstFrogClicked = this;
    $(firstFrogClicked).css('border', '5px black solid')
    console.log('this frog is: ', this)
    }
}
function clickTile () {
    if (!$(this).children().hasClass('frog') && jumpCanBeMade === false){
        return;
    }
    frogTile = $('<div>').addClass('frog')
    console.log('this is frogtile: ', frogTile)
    var data = $(this).data();
    var row = $(this).data('row');
    var column = $(this).data('column')
    var arrayNum = board[row][column]
    var frogUp = board[row -1] ? board[row-1][column] : null;
    var jumpUp = board[row-2] ? board[row-2][column]: null;
    var frogDown = board[row+1] ? board[row+1][column]: null;
    var jumpDown = board[row+2] ? board[row+2][column]: null;
    var frogLeft = board[row][column-1] === 1 ? board[row][column-1]: null;
    var jumpLeft = board[row][column-2] === 0 ? board[row][column-2]: null;
    var frogRight = board[row][column+1] === 1 ? board[row][column+1]: null;
    var jumpRight = board[row][column+2] === 0 ? board[row][column+2]: null;
    var targetTileRow = null;
    var targetTileColumn = null;
    var frogClicked = false;
    console.log ('row and column: ', row, column)
    console.log ('array value: ', arrayNum)
    console.log ('move left: ', row, column-1)
    console.log('this is: ', this)
    // if (previousRow === row && previousColumn === column) {
    if ((jumpCanBeMade === true && jumpUpTileDataRow === $(this).data('row') && jumpUpTileDataColumn === $(this).data('column'))||(jumpCanBeMade === true && jumpDownTileDataRow === $(this).data('row') && jumpDownTileDataColumn === $(this).data('column'))||(jumpCanBeMade === true && jumpLeftTileDataRow === $(this).data('row') && jumpLeftTileDataColumn === $(this).data('column'))||(jumpCanBeMade === true && jumpRightTileDataRow === $(this).data('row') && jumpRightTileDataColumn === $(this).data('column')))
        {
            if (firstFrogClicked!==null && $(this).children().length === 0)
            {
            board[$(firstFrogClicked).data('row')][$(firstFrogClicked).data('column')] = 0;
            $(firstFrogClicked).remove();
            // $(jumpedFrog).remove();
            if (row === jumpUpTileDataRow && column === jumpUpTileDataColumn){
                board[$(jumpedFrogUp).data('row')][$(jumpedFrogUp).data('column')] = 0;
                board[$(targetUpTile).data('row')][$(targetUpTile).data('column')] = 1;
                targetTile = targetUpTile
                targetTileRow = $(targetTile).data('row')
                targetTileColumn = $(targetTile).data('column')
                $(jumpedFrogUp).remove()
            }
            else if (row === jumpDownTileDataRow && column === jumpDownTileDataColumn){
                board[$(jumpedFrogDown).data('row')][$(jumpedFrogDown).data('column')] = 0;
                board[$(targetDownTile).data('row')][$(targetDownTile).data('column')] = 1;
                targetTile = targetDownTile
                targetTileRow = $(targetTile).data('row')
                targetTileColumn = $(targetTile).data('column')
                $(jumpedFrogDown).remove()
            }
            else if (row === jumpLeftTileDataRow && column === jumpLeftTileDataColumn){
                board[$(jumpedFrogLeft).data('row')][$(jumpedFrogLeft).data('column')] = 0;
                board[$(targetLeftTile).data('row')][$(targetLeftTile).data('column')] = 1;
                targetTile = targetLeftTile
                targetTileRow = $(targetTile).data('row')
                targetTileColumn = $(targetTile).data('column')
                $(jumpedFrogLeft).remove()
            }
            else if (row === jumpRightTileDataRow && column === jumpRightTileDataColumn){
                board[$(jumpedFrogRight).data('row')][$(jumpedFrogRight).data('column')] = 0;
                board[$(targetRightTile).data('row')][$(targetRightTile).data('column')] = 1;
                targetTile = targetRightTile
                targetTileRow = $(targetTile).data('row')
                targetTileColumn = $(targetTile).data('column')
                $(jumpedFrogRight).remove()
            }
            $(this).append(frogTile.attr('data-row', targetTileRow).attr('data-column', targetTileColumn))
            console.log('frogTile details:', frogTile)
            console.log(board);
            jumpCanBeMade = false;
            firstFrogClicked = null;
            jumpUpTile = null;
            jumpUpTileDataRow = null;
            jumpUpTileDataColumn = null;
            jumpDownTile = null;
            jumpDownTileDataRow = null;
            jumpDownTileDataColumn = null;
            jumpLeftTile = null;
            jumpLeftTileDataRow = null;
            jumpLeftTileDataColumn = null;
            jumpRightTile = null;
            jumpRightTileDataRow = null;
            jumpRightTileDataColumn = null;
            jumpedFrogUp = null;
            jumpedFrogDown = null;
            jumpedFrogLeft = null;
            jumpedFrogRight = null;
            targetTile = null;
            targetTileRow = null;
            targetTileColumn = null;
            targetUpTile = null;
            targetDownTile = null;
            targetLeftTile = null;
            targetRightTile = null;
            }
    }
    if (frogUp === 1 && frogUp !==undefined){
        console.log('frog above')
        if (jumpUp === 0 && jumpUp !== undefined){
            jumpUpTile = $('.tile[data-row = "' + (row-2) + '"][data-column ="' + column + '"]')
            targetUpTile=jumpUpTile;
            jumpUpTileDataRow = jumpUpTile.data('row')
            jumpUpTileDataColumn = jumpUpTile.data('column')
            firstTileClicked=this;
            (jumpUpTile).css('box-shadow', '0px 0px 20px #000099')
            previousRow = row-2;
            previousColumn = column
            jumpCanBeMade = true;
            firstFrogClicked = null;
            jumpedFrogUp = ('.frog[data-row = "' + (row-1) + '"][data-column ="' + column + '"]')
            console.log('can jump up', jumpUpTile)
            console.log('this is this', $(this))
        }
    }
    if (frogDown === 1 && frogDown !==undefined){
        console.log('frog below')
        if (jumpDown === 0 && jumpDown !== undefined){
            jumpDownTile = $('.tile[data-row = "' + (row+2) + '"][data-column ="' + column + '"]')
            jumpDownTileDataRow = jumpDownTile.data('row')
            jumpDownTileDataColumn = jumpDownTile.data('column')
            firstTileClicked=this;
            targetDownTile=jumpDownTile;
            console.log(jumpDownTile)
            previousRow = row+2;
            previousColumn = column
            jumpCanBeMade = true;
            firstFrogClicked = null;
            jumpDownTile.css('box-shadow', '2px 5px 5px #000099')
            jumpedFrogDown = ('.frog[data-row = "' + (row+1) + '"][data-column ="' + column + '"]')
            console.log('can jump down')
        }
    }
    if (frogLeft === 1 && frogLeft !==undefined){
        console.log('frog on left')
        if (jumpLeft === 0 && jumpLeft !== undefined){
            jumpLeftTile = $('.tile[data-row = "' + row + '"][data-column ="' + (column-2) + '"]')
            jumpLeftTileDataRow = jumpLeftTile.data('row')
            jumpLeftTileDataColumn = jumpLeftTile.data('column')
            firstTileClicked=this;
            targetLeftTile=jumpLeftTile;
            console.log(jumpLeftTile)
            previousRow = row;
            previousColumn = column-2
            jumpCanBeMade = true;
            firstFrogClicked = null;
            jumpLeftTile.css('box-shadow', '2px 5px 5px #000099')
            jumpedFrogLeft = ('.frog[data-row = "' + (row) + '"][data-column ="' + (column-1) + '"]')
            console.log('can jump left')
        }
    }
    if (frogRight === 1 && frogRight !==undefined){
        console.log('frog on right')
        if (jumpRight === 0 && jumpRight !== undefined){
            jumpRightTile = $('.tile[data-row = "' + row + '"][data-column ="' + (column+2) + '"]')
            jumpRightTileDataRow = jumpRightTile.data('row')
            jumpRightTileDataColumn = jumpRightTile.data('column')
            targetRightTile=jumpRightTile;
            console.log(jumpRightTile)
            previousRow = row;
            previousColumn = column+2
            jumpCanBeMade = true;
            firstFrogClicked = null;
            jumpRightTile.css('box-shadow', '2px 5px 5px #000099')
            jumpedFrogRight = ('.frog[data-row = "' + row + '"][data-column ="' + (column+1) + '"]')
            console.log('can jump right')
        }
    }

}
