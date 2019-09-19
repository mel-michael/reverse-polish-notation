const Stack = require('./stack');

describe('Stack', () => {
	let plate;

	beforeEach(() => {
		plate = new Stack();
	});

	test('should check the instance of the Class', () => {
		expect.assertions(1);
		expect(plate).toBeInstanceOf(Stack);
	});

	test('should check if stack is empty', () => {
		expect.assertions(3);

		expect(plate.isEmpty()).toBeTruthy();
		expect(plate.pop()).toBeUndefined();

		plate.push(12);

		expect(plate.isEmpty()).toBeFalsy();
	});

	test('should add items in the stack', () => {
		expect.assertions(3);

		plate.push(10);
		plate.push(90);

		expect(plate.size()).toBe(2);
		expect(plate.listElements()).toContain(10);
		expect(plate.listElements()).toContain(90);
	});


	test('should remove items from the stack', () => {
		expect.assertions(2);
		plate.pop();
		expect(plate.pop()).toBeUndefined();

		plate.push(90);

		plate.pop();
		expect(plate.size()).toBe(0);
	});

	test('should return the length of the stack', () => {
		expect.assertions(2)

		expect(plate.size()).toBe(0);

		plate.push(10);
		expect(plate.size()).toBe(1);
	});

	test('should list the elements in the stack', () => {
		expect.assertions(1)
		plate.push(10);
		plate.push(90);

		expect(plate.listElements()).toEqual("10 90 ");
	});



})