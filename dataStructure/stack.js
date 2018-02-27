function Stack() {
	let items = [];
	this.getData = function () {
		return items;
	}
	this.push = function (e) {			//栈顶推入元素
		items.push(e);
	}
	this.pop = function (e) {			//移除栈顶元素并返回
		return items.pop();
	}
	this.peek = function(){				//返回栈顶元素
		return items[items.length - 1];
	}
	this.isEmpty = function (){			//判断栈是否为空
		return items.length == 0;
	}
	this.size = function () {			//返回栈容量
		return items.length;
	}
	this.clear = function () {
		items = [];
	}
	this.print = function () {
		console.log(items.toString());
	}

}

function divideBy2(decNumber) {
	let binStack = new Stack();
	let binNum = '';
	while(decNumber>0){
		let binNum = Math.floor(decNumber % 2 );
		binStack.push(binNum);
		decNumber = Math.floor(decNumber/2);
	}
	while(!binStack.isEmpty()){
		binNum += binStack.pop().toString();
	}
	console.log(binNum);
}

divideBy2(6);