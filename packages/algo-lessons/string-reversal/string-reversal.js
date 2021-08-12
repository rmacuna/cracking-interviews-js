

// This is cheating 😅
const reverseString = (str = ``) => {
	return str.split('').reverse().join();
}

// Iterative solution 
const reverseStringIterative = (str = ``) => {
	let reversedStr = "";
	for (let i = str.length; i > 0; i++) {
		reverseString += str[i];
	}
	return reversedStr;
}

const reversedIterative = reverseStringIterative(`hola`);
const reversedOneLiner = reverseString(`hola`);