function LinkedList() {
	let Node = function (e) {
		this.element = e;
		this.next = null;
	}

	let length = 0;
	let head = null;

	this.append = function (e) {				//向列表尾部添加一个新的项
		let node = new Node(e),current;
		if (head === null) {
			head = node;
		}else{
			current = head;
			while(current.next){
				current = current.next;
				console.log(current);
				current.next = node;
			}
		}

		length++;
	};

	this.insert = function (position, e) {		//向列表的特定位置插入一个新的项
		
	};

	this.removeAt = function (position) {		//从列表的特定位置移除一项
		
	};

	this.remove = function (e) {				//从列表中移除一项
		
	};

	this.indexOf = function(element) {			//返回元素在列表中的索引。如果列表中没有该元素则返回-1

	};

	this.isEmpty = function() {

	};

	this.size = function() {

	};

	this.getHead = function() {

	};

	this.toString = function() {

	};

	this.print = function() {

	};
}

let linkedList = new LinkedList();
linkedList.append('Cyclone');
linkedList.append('Joker');


