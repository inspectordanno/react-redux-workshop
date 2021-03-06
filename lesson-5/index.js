const expect = require('expect');

const counter = (state = 0, action) => {
	// TODO
		// Run 'npm test' in the terminal, test should fail
		// Implement this function
		// Run 'npm test' in the terminal - test should pass if function is implemented correctly
}

expect(
	counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
	counter(1, { type: 'INCREMENT' })
).toEqual(2);

expect(
	counter(2, { type: 'DECREMENT' })
).toEqual(1);

expect(
	counter(1, { type: 'DECREMENT' })
).toEqual(0);

expect(
	counter(1, { type: 'SOMETHING_ELSE' })
).toEqual(1);

expect(
	counter(undefined, {})
).toEqual(0);

console.log('Test passed!');