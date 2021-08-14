'use-strict';
/**
 * @fileoverview
 * Writes a function that accepts an integer N
 * and prints a NxN spiral matrix. 
 *
 * Ex1:
 *  -	 matrix(2)
 * 			 [[1, 2], 
 *  			[4, 3]]
 * Ex2:
 *  -  matrix(3)
 *     [[1, 2, 3],
 *      [8, 9, 4],
 *      [7, 6, 5]]
 * Ex3:  
 *  -	 matrix(4)
	      [[1,   2,  3, 4],
  	    [12, 13, 14, 5],
    	  [11, 16, 15, 6],
 *  	  [10,  9,  8, 7]]
 */


/**
 * Create a matrix NxN given the length 
 * @param {Number} n size of the matrix. 
 */
const createMatrix = (n = 2) => {
	let result = [];
	for (let i = 0; i < n; i++) {
		result = [...result, new Array(n)];
	}
	return result; 
}

const spiralMatrix = (n = 2) => {
	const matrix = createMatrix(n);

	let counter = 1;
	let startCol = 0;
	let startRow = 0;
	let endCol = n - 1;
	let endRow = n - 1;
	
	// The iteration is over when startCol is greater than the endCol or 
	// When startRow is greater than endRow
	while (startCol <= endCol && startRow <= endRow) {
		// We want a loop that iterates from left to right
		for (let i = startCol; i <= endCol; i++) {
			matrix[startRow][i] = counter;
			counter++;
		} 
		startRow++;
		// We want a loop that iterates from top to bottom
		for (let i = startRow; i <= endRow; i++) {
			matrix[i][endCol] = counter;
			counter++;
		} 
		endCol--;
		// We want a loop that iterates from right to left
		for (let i = endCol; i >= startCol; i--) {
			matrix[endRow][i] = counter;
			counter++;
		}
		endRow--;
		// We want a loop that iterates from bottom to top
		for (let i = endRow; i >= startRow; i--) {
			matrix[i][startCol] = counter;
			counter++;
		}
		startCol++;
	}
	return matrix;
}


// Run the program
const matrix = spiralMatrix(4);
console.log("🚀 ~ file: spiral-matrix.js ~ line 72 ~ matrix", matrix)
