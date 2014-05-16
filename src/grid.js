define('grid', function() {
	return function() {
		Object.defineProperty(this, "rowCount", {
			value: 10
		});
		Object.defineProperty(this, "columnCount", {
			value: 10
		});
	};
});