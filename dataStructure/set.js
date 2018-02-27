function Set() {
	let items = {};
	this.has = function (value) {
		return items.hasOwnProperty(value);
	};

	this.add = function (value) {
		if (!this.has(value)) {
			items[value] = value;
			return true;
		}
		return false;
	};

	this.remove = function (value) {
		if (this.has(value)) {
			delete items[value];
			return true;
		}
		return false;
	};

	this.print = function () {
		console.log(items);
	}

	this.clear = function() {
		items = {};
	};

	this.size = function () {
		return Object.keys(items).length;
	};

	this.value = function () {
		let values = [];
		for (let value in items) {
			values.push(value);
		}
		return values;
	};

	this.union = function (otherSet) {					//并集
		let unionSet = new Set();

		let values = this.value();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}

		values = otherSet.value();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}
		return unionSet;
	};

	this.intersection = function (otherSet) {			//交集
		let intersectionSet = new Set();

		let values = this.value();
		for (var i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i]);
			}
		}

		return intersectionSet;
	};

	this.difference = function (otherSet) {				//差集
		let differenceSet = new Set();

		let values = this.value();
		for (var i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				differenceSet.add(values[i]);
			}
		}
		return differenceSet;
	};

	this.subset = function(otherSet) {					//子集
		if (this.size() > otherSet.size()) {
			return false;
		} else {
			let values = this.value();
			for (let i = 0; i < values.length; i++) { 
				if (!otherSet.has(values[i])) { 
					return false;
				}
			}
			return true; 
		}
	};
}

let setA = new Set();
setA.add('Cyclone');

let setB = new Set();
setB.add('Cyclone');
setB.add('Luna');
setB.add('Metal');
console.log(setA.subset(setB));