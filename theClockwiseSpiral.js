// Do you know how to make a spiral? Let's test it!
// Classic definition: A spiral is a curve which emanates from a central point,
// getting progressively farther away as it revolves around the point.

// Your objective is to complete a function createSpiral(N) that receives an integer N and
// returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

// Return an empty array if N < 1 or N is not int / number
// Examples:
// N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
// N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
// N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

spiral = num => {
    let moves = num;
    let xPos = -1;
    let yPos = 0;
    let direction = 'S';
    let result =[];
    let count = 1;

    // create result structure
    for (let i=0; i < moves; i++) {
      let arr = [];
      result.push(arr);
      for (let j=0; j < moves; j++) {
        result[i][j] = 0;
      }
    }

    // insert 1st row
    for (let i=0; i < moves; i++) {
      xPos += 1;
      result[yPos][xPos] = count;
      count += 1
    }

    moves -= 1;
    
    makeSpiral = (dir) => {
      switch (dir) {
        case 'S':
          for (let i=0; i < moves; i++) {
            yPos += 1;
            result[yPos][xPos] = count;
            count += 1;
          }
          direction = 'W';
          break;
        case 'W':
          for (let i=0; i < moves; i++) {
            xPos -= 1;
            result[yPos][xPos] = count;
            count += 1;
          }
          moves -= 1;
          direction = 'N';
          break;
        case 'N':
          for (let i=0; i < moves; i++) {
            yPos -= 1;
            result[yPos][xPos] = count;
            count += 1;
          }
          direction = 'E'
          break;
        case 'E':
          for (let i=0; i < moves; i++) {
            xPos += 1;
            result[yPos][xPos] = count;
            count += 1;
          }
          moves -= 1;
          direction = 'S';
          break;
        default:
          break;
      }
    }

    do {makeSpiral(direction)} while (moves > 0);

    return result;
}

console.log(spiral(5));
