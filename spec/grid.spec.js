define(['grid'], function(Grid) {
	describe('Grid constructor function', function() {
		it('should be a function', function() {
			expect(typeof Grid).toBe('function');
		});
	});
	describe('Grid tests', function() {

		var grid;
		beforeEach(function() {
			grid = new Grid();
		});

		describe('Grid has a predefined size', function() {
			it('number of rows is 10', function() {
				expect(grid.rowCount).toBe(10);
			});
			it('number of columns is 10', function() {
				expect(grid.columnCount).toBe(10);
			});
			it('grid dimensions cannot be modified', function() {
				grid.columnCount = 1;
				expect(grid.columnCount).toBe(10);
				grid.rowCount = 1;
				expect(grid.rowCount).toBe(10);
			});
		});
	});

});