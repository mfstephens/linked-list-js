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

	this.empty = function() {
		if(tail === null || head === null) {
			return true;
		}
		return false;
	};

	this.front = function() {
		if(that.empty()) {
			throw("Error: empty list");
		}
		return head.data;
	};

	this.back = function() {
		if(that.empty()) {
			throw("Error: empty list");
		}
		return tail.data;
	};

	this.size = function() {
		return size;
	};

	// method to append item to back of list
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

	// method to append item to front of list
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

	// method to remove last item in list
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

	// method to remove first item in list
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