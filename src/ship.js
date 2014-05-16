define('ship', function() {

	return function(size) {
		if (typeof size !== 'number' || size <= 0) {
			throw new Error('Ship must have size!');
		}
		this.size = size;
	};

});