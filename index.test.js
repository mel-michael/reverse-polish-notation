const Stack = require('./stack');
const calcRPN = require('./utils/helper');

describe('App', () => {

	test('should calculate the reverse polish expression', () => {
		const expression = '7 2 3 * + 9 -';
		expect(calcRPN(expression)).toEqual(4);
	});

	test('should return error for invalid expression', () => {
		const expression = '723*+9-';
		expect(calcRPN(expression)).toContain('Invalid Format');
	});

	test('should return error for expressions that can not be evaluated', () => {
		const expression = '7 2 3 * 9 - * +';
		expect(calcRPN(expression)).toContain(`Can't perform reverse polish evaluation`);
	});

	describe('Stack', () => {
		let plate;
		
		// Applies only to Stack tests
		beforeEach(() => {
			plate = new Stack();
		});

		afterAll(() => {
			plate = null;
		});

		test('should check the instance of the Class', () => {
			expect(plate).toBeInstanceOf(Stack);
		});

		test('should check if stack is empty', () => {
			expect.assertions(3);

			expect(plate.isEmpty()).toBeTruthy();
			expect(plate.pop()).toBeUndefined();

			plate.push(12);

			expect(plate.isEmpty()).toBeFalsy();
		});

		test('should add items to the stack', () => {
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
			plate.push(10);
			plate.push(90);

			expect(plate.listElements()).toEqual("10 90 ");
		});

	});

});