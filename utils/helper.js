const Stack = require('../stack');

/**
 * This function calculates the Reverse Polish Notation
 *
 * @param {string} expr: Reverse Polish Notation Expression
 */
const reversePolishEvaluation = function (expression) {
	const stack = new Stack();
	const operators = ["*", "/", "-", "+"]; // restrict to these 4
	const expr = expression.trim().split(' ');

	if (expr.length < 2) {
		return "Invalid Format: Format each expression with space";
	}

	// Alternative Method: Use switch statement
	for (let index = 0; index < expr.length; index++) {
		const token = expr[index];
		if (Number(token)) {
			stack.push(token);
			continue;
		}
		const operatorIndex = operators.indexOf(token);
		if (operatorIndex > -1) {
			const operator = operators[operatorIndex];
			const exp2 = stack.pop();
			const exp1 = stack.pop();
			if (exp1 == undefined || exp2 == undefined) {
				return "Error: Can't perform reverse polish evaluation";
			}
			const result = eval(`${exp1}${operator}${exp2}`);
			stack.push(result);
		}
	}
	return stack.pop();
}

module.exports = reversePolishEvaluation