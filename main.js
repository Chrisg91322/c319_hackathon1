$(document).ready(startApp)

var board = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
]

function startApp ()
{
    // allFrogs = [
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs(),
    //     new Frogs()
    // ]
        // for (var i=0; i < allFrogs.length; i++){
        //     var domElement = allFrogs[i].render();
        //     $('body').append(domElement);
        // }

    $('.tile').on('click', clickTile)
}

function clickTile () {
    var data = $(this).data();
    var row = data.row;
    var column = data.column
    var arrayNum = board[row][column]
    var frogUp = board[row -1] ? board[row-1][column] : null;
    var jumpUp = board[row-2] ? board[row-2][column]: null;
    var frogDown = board[row+1] ? board[row+1][column]: null;
    var jumpDown = board[row+2] ? board[row+2][column]: null;
    var frogLeft = board[row][column-1] ? board[row][column-1]: null;
    var jumpLeft = board[row][column-2] === 0 ? board[row][column-2]: null;
    var frogRight = board[row][column+1] ? board[row][column+1]: null;
    var jumpRight = board[row][column+2] === 0 ? board[row][column+2]: null;
    console.log ('row and column: ', row, column)
    console.log ('array value: ', arrayNum)
    console.log ('move left: ', row, column-1)
    if (frogUp === 1 && frogUp !==undefined){
        console.log('frog above')
        if (jumpUp === 0 && jumpUp !== undefined){
            console.log('can jump up')
        }
    }
    if (frogDown === 1 && frogDown !==undefined){
        console.log('frog below')
        if (jumpDown === 0 && jumpDown !== undefined){
            console.log('can jump down')
        }
    }
    if (frogLeft === 1 && frogLeft !==undefined){
        console.log('frog on left')
        if (jumpLeft === 0 && jumpLeft !== undefined){
            console.log('can jump left')
        }
    }
    if (frogRight === 1 && frogRight !==undefined){
        console.log('frog on right')
        if (jumpRight === 0 && jumpRight !== undefined){
            console.log('can jump right')
        }
    }
}