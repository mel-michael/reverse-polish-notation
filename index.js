#!/usr/bin/env node

const chalk = require('chalk');
const inquirer = require('inquirer');
const Stack = require('./stack');

console.log(chalk.green('\n ✓ Running Reverse Polish Notation Calculator \n'));

function calculateRPN(expr) {
	const stack = new Stack();
	const operators = ["*", "/", "-", "+"]; // restrict to these 4

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
			if (exp1 == undefined || exp2 == undefined)
				return "Error: Can't perform reverse polish evaluation";
			const result = eval(`${exp1}${operator}${exp2}`);
			stack.push(result);
		}
	}
	return stack.pop();
}


inquirer
	.prompt([
		{
			type: 'input',
			name: 'expression',
			message: "Please enter a reverse Polish notation:"
		}
	])
	.then(response => {
		const solution = calculateRPN(response.expression);
		console.log(chalk.blue(`\n The result of the expression is:`), chalk.green(`${solution} \n`))
	});
