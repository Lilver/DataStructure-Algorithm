function ArrayList() {
	var array = [];

	this.insert = function (item) {
		array.push(item);
	}

	this.toString = function () {
		return array.join();
	}

	var swap = function (array, index1, index2) {								//交换函数
		[array[index1], array[index2]] = [array[index2], array[index1]];		//ES6解构
	}

	this.bubbleSort = function () {				//传统冒泡排序
		var length = array.length;
		for (var i = 0; i < length; i++) {
			for (var j = i; j <length; j++) {
				if (array[i] > array[j]) {
					swap(array, i, j);
				}
			}
		}
	}
	this.betterBubbleSort = function () {		//改进后的冒泡排序
		var length = array.length;
		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length-1-i; j++) {
				if (array[j] > array[j+1]) {
					swap(array, j, j+1);
				}
			}
		}
	}

	this.selectionSort = function () {			//选择排序
		var length = array.length, minIndex;
		for (var i = 0; i < length-1; i++) {
			var minIndex = i;
			for (var j = i+1; j < length; j++) {
				if (array[minIndex] > array[j]) {
					minIndex = j;
				}
			}
			swap(array, i, minIndex);//i用于锁定最小值的排序位
		}
	};

	this.insertionSort = function () {			//插入排序(对小数组而言，插入排序比以上算法具有更好的性能)
		var length = array.length, j, temp;
		for (var i = 1; i < length; i++) {
			j = i;
			temp = array[j];
			while(j > 0 && array[j-1] > temp){
				array[j] = array[j-1];
				j--;
			}
			array[j] = temp;
		}
	};







	this.mergeSort = function () {				//归并排序
		array = mergeSortRec(array);
	};

	var mergeSortRec = function (array) {
		var length = array.length;
		if (length ===1) {
			return array;
		}
		var mid = Math.floor(length/2),
			left = array.slice(0, mid);
			right = array.slice(mid, length);

		return mergeSortRec(mergeSortRec(left),mergeSortRec(right));

	};

	var merge = function (left, right) {
		var result = [];
		il = 0;
		ir = 0;
		while (il < left.length && ir < right.length) {
			if (left[il] < right[ir]) {
				result.push(left[il++]);
			} else {
				result.push(right[ir++]);
			}

			while (il < left.length){
				result.push(left[il++]);
			}

			while (ir < right.length){
				result.push(right[ir++]);
			}

			return result;
		}
	};




	this.quickSort = function () {								//快速排序
		quick(array, 0, array.length - 1);
	}

	var quick = function (array, left, right) {

		var index;

		if (array.length > 1) {
			index = partition(array, left, right);

			if (left < index - 1) {
				quick(array, left -1);
			}

			if (index < right) {
				quick(array, index, right);
			}
		}
	}

	var partition = function(array, left, right) {
		var pivot = array[Math.floor((right + left) / 2)], 
			i = left,
			j = right;
		while (i <= j) {
			while (array[i] < pivot) { 
				i++;
			}
			while (array[j] > pivot) { 
				j--;
			}
			if (i <= j) { 
				swap(array, i, j); 
				i++;
				j--;
			}
		}
		return i;
	};

}

let array = new ArrayList();
// for (var i = 0; i < 20; i++) {
// 	array.insert(parseInt(Math.random()*100));
// }
array.insert(12);
array.insert(1);
array.insert(23);
array.insert(85);
array.insert(2);
array.insert(842);
array.insert(73);
array.insert(66);
array.insert(32);
array.insert(59);
array.insert(93);
array.insertionSort();
console.log(array.toString());