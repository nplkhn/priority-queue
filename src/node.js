class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
		} else if (this.left != null && this.right == null) {
			this.right = node;
		}
	}

	removeChild(node) {
		if (node == this.left){
			this.left = null;
		} else if (node == this.right){
			this.right = null;
		} else {
			throw 'error';
		}
	}

	remove() {
		if (this.parent != null){
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;