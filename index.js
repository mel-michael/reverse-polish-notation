#!/usr/bin/env node

const chalk = require('chalk');
const inquirer = require('inquirer');

console.log(chalk.green('\n ✓ Running Reverse Polish Notation Calculator \n\n')); 

function calculateRPN(expression) {
	const stack = [];
	const operators = [ "*", "/", "-", "+"]; // restrict to these 4

	for(let index = 0; index < expression.length; index++) {
		const token = expression[index];
		if(Number(token)) {
			stack.push(token);
			continue;
		}
		if(operators.indexOf(token) > -1) {
			const operator = operators[operators.indexOf(token)];
			const exp2 = stack.pop();
			const exp1 = stack.pop();
			const result = exp1 ? eval(`${exp1}${operator}${exp2}`) : exp2;
			stack.push(result)
		}
	}
	return stack.pop();
}


inquirer
  .prompt([
		{
			type: 'input',
			name: 'expression',
			message: "Please enter a mathematical expression: "
		}
  ])
  .then(response => {
		const calcRPN = calculateRPN(response.expression);
		console.log(chalk.blue(`\n The result of the expression is:`), chalk.green(`${calcRPN} \n`))
	});
