#!/usr/bin/env node

const chalk = require('chalk');
const inquirer = require('inquirer');
const reversePolishEvaluation = require('./utils/helper');

console.log(chalk.green('\n ✓ Running Reverse Polish Notation Calculator \n'));

/**********************
 *  CLI APPLICATION   *
 **********************
 */

/**
 * This part collects user input and return the result in the terminal
 */
inquirer
	.prompt([
		{
			type: 'input',
			name: 'expression',
			message: "Enter a reverse Polish notation (e.g. '2 3 * 4 -'):"
		}
	])
	.then(response => {
		const solution = reversePolishEvaluation(response.expression);
		console.log(chalk.blue(`\n The result of the expression is:`), chalk.green(`${solution} \n`))
	});


module.exports = reversePolishEvaluation; // export for test purpose