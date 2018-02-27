function BinarySearchTree() {
	var Node = function (key) {
		this.key = key;				
		this.left = null;
		this.right = null;
	};

	var rootNode = null;

	var insertNode = function (rootNode, newNode) {
		if (newNode.key < rootNode.key) {
			if (rootNode.left === null) {
				rootNode.left = newNode;
			} else {
				insertNode(rootNode.left, newNode);
			}
		} else {
			if (rootNode.right === null) {
				rootNode.right = newNode;
			} else {
				insertNode(rootNode.right, newNode);
			}
		}
	};

	this.insert = function (key) {
		var newNode = new Node(key);

		if (rootNode === null) {
			rootNode = newNode;
		} else {
			insertNode(rootNode, newNode);
		}
	};




	var inOrderTraverseNode = function (node, callback) {		//中序遍历
		if (node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	};
	this.inOrderTraverse = function (callback) {		
		inOrderTraverseNode(rootNode, callback);
	};








	var preOrderTraverseNode = function (node, callback) {		//先序遍历
		if (node !== null) {
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	};
	this.preOrderTraverse = function (callback) {		
		preOrderTraverseNode(rootNode, callback);
	};







	var postOrderTraverseNode = function (node, callback) {		//后序遍历
		if (node !== null) {
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	};
	this.postOrderTraverse = function (callback) {		
		postOrderTraverseNode(rootNode, callback);
	};



	var minNode = function (node) {						//获取节点最小值
		if (node) {
			while( node && node.left !== null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	};

	this.min = function () {
		return minNode(rootNode);
	};




	var maxNode = function (node) {						//获取节点最大值
		if (node) {
			while (node && node.right !== null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	};

	this.max = function () {
		return maxNode(rootNode);
	};



	this.search = function (key) {							//搜索节点
		return searchNode(rootNode, key);
	};
	var searchNode = function (node, key) {
		if ( node == null) {
			return false;
		}
		if ( key < node.key) {
			searchNode(node.left, key);
		}else if(key > node.key){
			searchNode(node.right, key);
		}else{
			return true;
		}
	};





	this.remove = function (key) {									//移除节点
		rootNode = removeNode(rootNode, key);
	};

	var removeNode = function (node, key) {
		if (node === null) {
			return false;
		}
		if (key < node.key) {
			node.left = removeNode(node.left, key);
			return node;
		} else if (key > node.key) {
			node.right = removeNode(node.right, key);
			return node;
		} else {
			if (node.left === null && node.right === null) {		//叶子节点
				node = null;
				return node;
			}


			if (node.left === null) {								//只有一个子节点的节点
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}



			var aux = findMinNode(node.right);						//有两个子节点的节点，aux为删除节点的右侧子树的左侧最小值
			node.key = aux.key;
			node.right = removeNode(node.right, aux.key);
			return node;
		}
	};

	var findMinNode = function (node) {
		while (node && node.left !== null) {
			node = node.left;
		}
		return node;
	};


}


var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
// function printNode(value){ 
// 	console.log(value);
// }
// tree.inOrderTraverse(printNode); 
console.log(tree.search(22));

