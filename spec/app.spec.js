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

	describe('init', function() {
		it('starts the game from scratch', function() {
			app.init();
			expect(app.game.inProgress).toBe(false);
		});
		it('reinitializes the game after being played', function() {
			app.init();
			expect(app.game.inProgress).toBe(false);
			app.start();
			expect(app.game.inProgress).toBe(true);
			app.init();
			expect(app.game.inProgress).toBe(false);
		});
	});

	describe('start', function() {
		it('should start game', function() {
			app.init();
			expect(app.game.inProgress).toBe(false);
			app.start();
			expect(app.game.inProgress).toBe(true);
		});
	});
});