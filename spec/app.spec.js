/* global document:true */
define(['app'], function(app) {
	describe('app', function() {
		var shipDiv;
		var gridDiv;
		beforeEach(function() {
			shipDiv = document.createElement('div');
			shipDiv.id = 'ships';
			gridDiv = document.createElement('div');
			gridDiv.id = 'grid';
			document.body.appendChild(shipDiv);
			document.body.appendChild(gridDiv);
		});
		it('draws the grid and ship', function() {
			expect(shipDiv.innerHTML).toBeDefined();
			expect(gridDiv.innerHTML).toBeDefined();
			app.init();
			expect(shipDiv.innerHTML).toBeDefined();
			expect(gridDiv.innerHTML).toBeDefined();
		});
	});
});