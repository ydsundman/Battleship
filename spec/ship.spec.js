define(['ship'], function(Ship) {

	describe('Ship constructor function', function() {
		it('should be a function', function() {
			expect(typeof Ship).toBe('function');
		});
		it('taking one parameter', function() {
			expect(Ship.length).toBe(1);
		});
	});
});
