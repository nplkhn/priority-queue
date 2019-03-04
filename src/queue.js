const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
		
	}

	push(data, priority) {
		if (this.size = this.maxSize){
			throw 'error';
		} else{
			this.heap.push(data, priority);
		}
	}

	shift() {
		heap.pop()
	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
