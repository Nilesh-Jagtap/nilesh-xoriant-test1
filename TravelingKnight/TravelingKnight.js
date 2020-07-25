
// x, y, n

function getKnightMoves(coord) {
    var squarePosition = []; // position on board
    if (parseInt(coord[0]) < 9 && parseInt(coord[0]) > 0
        && parseInt(coord[1]) > 0 && parseInt(coord[1]) < 9) {
        var possibleHorizontalCoords = [1,2,3,4,5,6,7,8]; // I can say it as horizontal/X coord value
        var squareX = possibleHorizontalCoords.indexOf(parseInt(coord[0])) + 1; // knight position w.r.t X
        var squareY = parseInt(coord[1]); // knight position w.r.t. Y

        // get all possible X values
        var xPosition = [squareX + 2, squareX - 2, squareX + 1, cellX - 1].filter(
            function(cPos) {
                return (cPos > 0 && cPos < 9);
            }
        );

        // get all possible Y values
        var yPosition = [squareY + 2, squareY - 2, squareY + 1, squareY - 1].filter(
            function(cPos) {
                return (cPos > 0 && cPos < 9);
            }
        );

        // two arrays created now, for X and for Y
        // move through combination possible, if valid then push

        for (var i = 0; i < xPosition.length; i++) {
            for (var j = 0; i < yPosition.length; j++) {
                if ((squareX - yPosition[i]) + (squareY - yPosition[j]) === 3) {
                    console.log('Valid position - ' + [xPosition[i], yPosition[j]]);
                    if (!squarePosition.includes([xPosition[i], yPosition[j]])) {
                        squarePosition.push([xPosition[i], yPosition[j]]);
                    }
                }
            }
        }
    }
    return squarePosition;
};

// call the calculator function, provide some coordinate on board
var myResult = getKnightMoves('32');
// in above function call I have given co-ordinates on board
// e.g. - '32' => here '3' is X co ordinate & '2' is vertical co-ordinate

console.log('===============================')
console.log('Possible moves co-ordinates- ');
console.log(myResult);
console.log('===============================')

console.log('Number of moves possible - ');
console.log(myResult.length);
console.log('===============================')



// funciton knightPosition(coords) {

// }