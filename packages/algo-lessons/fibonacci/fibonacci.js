// add the fibonacci question...

/**
 * Fibonacci with iterative solution  🏋🏼‍♂️
 * complexity of O(n) linear
 * @param {*} n Number to get the fibonacci series
 * @returns Last element of the fibonacci series 
 */
const fib = (n) => {
	const results = [0, 1]; // Base cases
	for (let i = 0; i < results.length; i++) {
		const a = results[i - 1];
		const b = results[i - 2];
		results.push(a + b);
	}
	return results[results.length - 1];
}

// 2. Fibonacci with recursive solution 😰
//  O(2^n) but it could be something around 1.6^n. Whatever it is, is exponential time.
const fibRecursive = (n) => {
	if (n < 2) return n;
	return fibRecursive(n - 1) + fibRecursive(n - 2);
}


// 3. Fibonacci with recursive solution + memoization 😎
const memo = (fn = () => {}) => {
	const cache = {};
	return function(...args) {
		if(cache[args]) {
			return cache[args];
		}
		const results = fn.apply(this, args);
		cache[args] = results;
		return results;
	}
}

const slowFib = (n = 6) => {
	if (n < 2) return n;
	// We call fib to reference the fib memoized value
	// If we call slowFib, we're going to still calling the original slow function 
	// So the memoization doesn't work as we expect.
	return fib(n - 1) + fib(n - 2);
}

// memoized version of the slowFib
// 
const fib = memo(slowFib);
