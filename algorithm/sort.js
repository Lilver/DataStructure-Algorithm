function ArrayList() {
	var array = [];

	this.insert = function (item) {
		array.push(item);
	}

	this.toString = function () {
		return array.join();
	}
}

let array = new ArrayList();
for (var i = 0; i < 20; i++) {
	array.insert(parseInt(Math.random()*100));
}
console.log(array.toString());