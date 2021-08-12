

// This is cheating 😅
const reverseString = (str = ``) => {
	return [...str].reverse().join();
}

// Iterative solution 🏋🏼‍♂️
const reverseStringIterative = (str = ``) => {
	let reversedStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverseString += str[i];
	}
	return reversedStr;
}

const reversedIterative = reverseStringIterative(`hola`);
const reversedOneLiner = reverseString(`hola`);