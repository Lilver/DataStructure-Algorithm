function Dictionary() {
	var items = {};

	this.set = function (key, value) {
		items[key] = value;
	};

	this.get = function (key) {
		return this.has(key) ? items[key] : undefined; 
	}

	this.delete = function (key){
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};

	this.has = function (key) {
		// if (Object.keys(items).indexOf(key) != -1) {
		// 	return true;
		// }else{
		// 	return false;
		// }
		return key in items;
	};

	this.values = function () {
		let values = [];

		for( let k in items) {
			if (this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	}

	this.clear = function() {
		items = {};
	};

	this.size = function () {
		return Object.keys(items).length;
	};

	this.keys = function() {
		return Object.keys(items);
	};

	this.getItems = function() {
		return items;
	}
}

let dir = new Dictionary();
dir.set('name', 'Cyclone');
dir.set('partner','Joker');
console.log(dir.has('name'));;