function list() {
	/*******************
	Private Data Members
	*******************/

	var node = function(_data, _next, _previous) {
		this.data = _data;			// node data member
		this.next = _next;			// next item in list
		this.previous = _previous;	// previous item in list
	};

	var head = null;	// first item in list
	var tail = null;	// last item in list
	var size = 0;		// total number of items in list
	var that = this;	// workaround

	/******************
	Public Data Members
	******************/

	// returns true if list is empty, false otherwise
	this.empty = function() {
		if(tail === null || head === null) {
			return true;
		}
		return false;
	};

	// returns first item in list
	// throws error if list is empty
	this.front = function() {
		if(that.empty()) {
			throw("Error: empty list");
		}
		return head.data;
	};

	// returns last item in list
	// throws error if list is empty
	this.back = function() {
		if(that.empty()) {
			throw("Error: empty list");
		}
		return tail.data;
	};

	// returns size of list
	this.size = function() {
		return size;
	};

	// appends item to back of list
	this.push_back = function(_data) {
		tail = new node(_data, null, tail);
		if(tail.previous !== null) {
			tail.previous.next = tail;
		}
		if(that.empty()) {
			head = tail;
		}
		size++;
	};

	// appends item to front of list
	this.push_front = function(_data) {
		head = new node(_data, head, null);
		if(head.next !== null) {
			head.next.previous = head;
		}
		if(that.empty()) {
			tail = head;
		}
		size++;
	};

	// removes last item in list
	// throws error if list is empty
	this.pop_back = function() {
		if(that.empty()) {
			throw("Error: empty list");
		}

		tail = tail.previous;
		if(tail !== null) {
			tail.next = null;
		}
		else {
			head = null;
		}
		size--;
	};

	// removes first item in list
	// throws error if list is empty
	this.pop_front = function() {
		if(that.empty()) {
			throw("Error: empty list");
		}

		head = head.next;
		if(head !== null) {
			head.previous = null;
		}
		else {
			tail = null;
		}
		size--;
	};
};

var testList = new list();
var testArray = [];

JSLitmus.test("List push_front", function(count) {
	while (count--) {
		testList.push_front(1);
	}
});

JSLitmus.test("Array unshift", function(count) {
	while (count--) {
		testArray.unshift(1);
	}
});


// console.time("timer");

// for(var i = 0; i < 10000000; ++i) {
// 	mylist.push_front(i);
// }

// console.timeEnd("timer");


// for(var i = 0; i < 1000; ++i) {
// 	mylist.pop_front(i);
// }

// for(var i = 0; i < 1000; ++i) {
// 	thearray.push(i);
// }

