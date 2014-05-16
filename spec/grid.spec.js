define(['grid'], function(Grid) {
	describe('Grid constructor function', function() {
		it('should be a function', function() {
			expect(typeof Grid).toBe('function');
		});
	});
	describe('Grid has a predefined size', function() {
		it('number of rows is 10', function() {
			var grid = new Grid();
			expect(grid.rowCount).toBe(10);
		});
		it('number of columns is 10', function() {
			var grid = new Grid();
			expect(grid.columnCount).toBe(10);
		});
		it('grid dimensions cannot be modified', function() {
			var grid = new Grid();
			grid.columnCount = 1;
			expect(grid.columnCount).toBe(10);
			grid.rowCount = 1;
			expect(grid.rowCount).toBe(10);
		});
	});
});