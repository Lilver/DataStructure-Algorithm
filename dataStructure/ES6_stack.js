let stack = (function(){
	const items = new WeekMap();
	class Stack {
		constructor(){
			items.set(this, []);
		}

		push(e){
			this.push = function (e) {			//栈顶推入元素
				items.push(e);
			}
		}

		//方法同stack.js
		
	}
	return Stack; //当Stack函数里的构造函数被调用时，会返回Stack类的一个实例
})()