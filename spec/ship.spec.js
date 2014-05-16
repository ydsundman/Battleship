define(['ship'], function(Ship) {

	describe('Ship constructor function', function() {
		it('construct a ship', function() {
			expect(typeof Ship).toBe('function');
		});
	});
});
