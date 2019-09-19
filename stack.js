class Stack {
	constructor() {
		this.elements = [];
	}

	isEmpty() {
		return this.elements.length == 0;
	}

	push(item) {
		this.elements.push(item);
	}

	pop() {
		if (this.elements.length > 0) {
			return this.elements.pop();
		}
		return undefined;
	}

	size() {
		return this.elements.length;
	}

	listElements() {
		let str = "";
		for (let i = 0; i < this.elements.length; i++) {
			str += this.elements[i] + " ";
		}
		return str;
	}
}

module.exports = Stack;