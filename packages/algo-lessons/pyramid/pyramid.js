/**
 * @fileoverview
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape
 * with N levels using the # character.  Make sure the
 * pyramid has spaces on both the left *and* right hand sides
		--- Examples
 *   pyramid(1)
 *       '#'
 *   pyramid(2)
 *       ' # '
 *       '###'
 *   pyramid(3)
 *       '  #  ' (First level) -> n - 1
 *       ' ### ' (Second level) -> n - 2
 *       '#####' (Third level) -> n - n
 */
const pyramid(n) {
	const levelLength = 2 * n - 1;
	const middlePoint = Math.floor(levelLength / 2) + 1;

	for (let i = 1; i <= n; i++) {
		let level = "";
		for (let j = 1; j <= levelLength; j++) {
			if (j <= middlePoint - i || j >= middlePoint + i) {
				level += " "
			} else {
				level += "#"
			}
		}
		console.log(level);
	}
}

// Runtime could be something around O(n^2) since you are iterating the same array with two nested for-loops