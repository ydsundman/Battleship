define(['ship'], function(Ship) {

	describe('Ship constructor function', function() {
		it('should be a function', function() {
			expect(typeof Ship).toBe('function');
		});
		it('taking one parameter', function() {
			expect(Ship.length).toBe(1);
		});
	});
	describe('Ship lifecycle', function() {
		it('should fail when constructed without size', function() {
			expect(function() {new Ship();}).toThrow(new Error('Ship must have size!'));
		});
		it('should fail when constructed with argument thats not a number', function() {
			expect(function() {new Ship('xxx');}).toThrow(new Error('Ship must have size!'));
			expect(function() {new Ship(false);}).toThrow(new Error('Ship must have size!'));
			expect(function() {new Ship(true);}).toThrow(new Error('Ship must have size!'));
			expect(function() {new Ship(undefined);}).toThrow(new Error('Ship must have size!'));
		});
		it('should fail when constructed with negative or 0 size', function() {
			expect(function() {new Ship(-1);}).toThrow(new Error('Ship must have size!'));
			expect(function() {new Ship(0);}).toThrow(new Error('Ship must have size!'));
		});
		it('should be possible to create a Ship instance with a size property', function() {
			var ship = new Ship(3);
			expect(ship).toBeDefined();
			expect(ship.constructor).toBe(Ship);
			expect(ship.size).toBe(3);
		});
	});

});
