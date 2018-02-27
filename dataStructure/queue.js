function Queue() {						//一般队列
	let items = [];
	this.enqueue = function(e){
		items.push(e);
	}
	this.dequeue = function () {
		return items.shift();
	}
	this.front = function () {
		return items[0];
	}
	this.isEmpty = function () {
		return items.length == 0;
	}
	this.size = function () {
		return items.length;
	}
	this.print = function () {
		console.log(items.toString());
	}
}

function PriorityQueue() {				//优先队列
	let items = [];

	function QueueElement(element, priority) { 
		this.element = element;
		this.priority = priority;
	}
	this.enqueue = function(element, priority) {
		let queueElement = new QueueElement(element, priority);
		let added = false;
		for (let i = 0; i < items.length; i++) {
			if (queueElement.priority < items[i].priority) { 
				items.splice(i, 0, queueElement); 
				added = true;
				break; 
			}
		}
		if (!added) {
			items.push(queueElement);
		}
	};
	this.print = function() {
		for (let i = 0; i < items.length; i++) {
			console.log(`${items[i].element} -
      ${items[i].priority}`);
		}
	};
}



let queue = new Queue();

queue.enqueue('Cyclone');
queue.enqueue('Joker');
queue.enqueue('Luna');
queue.enqueue('Metal');
queue.enqueue('Heat');
queue.enqueue('Trigger');
queue.dequeue();
queue.print();