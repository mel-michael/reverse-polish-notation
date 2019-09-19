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
}

module.exports = Stack;