const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size++;
	}

	push(data, priority) {
		let newNode = Node(data, priority);
		insertNode(newNode);
		shiftNodeUp(newNode);
	}

	pop() {

	}

	detachRoot() {
		this.root = null;
		
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {

	}

	insertNode(node) {
		if (MaxHeap.isEmpty){
			this.root = node;
		}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;