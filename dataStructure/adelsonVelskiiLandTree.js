function AdelsonVelskiiLandiTree() {
	var Node = function (key) {
		this.key = key;				
		this.left = null;
		this.right = null;
	};

	var insertNode = function(node, element) {
		if (node === null) {
			node = new Node(element);
		} else if (element < node.key) {
			node.left = insertNode(node.left, element);

			if (node.left !== null) {
				//确认是否平衡
			} 
		} else if (element > node.key) {
			node.right = insertNode(node.right, element);

			if (node.right !== null) {
				//确认是否平衡
			}
		}
		return node;
	};
}