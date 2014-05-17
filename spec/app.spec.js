/* global document:true */
define(['app'], function(app) {
	describe('_extractCoordinate', function() {
		it('should extract string coordinates as integers', function(){
			var td = document.createElement('td');
			td.setAttribute('data-row', '1');
			td.setAttribute('data-col', '9');
			var coord = app._extractCoordinate(td);
			expect(coord[0]).toBe(1);
			expect(coord[1]).toBe(9);
		});
	});
	describe('app', function() {
		var shipDiv;
		var gridDiv;
		var startButton;
		beforeEach(function() {
			shipDiv = document.createElement('div');
			shipDiv.id = 'ships';
			gridDiv = document.createElement('div');
			gridDiv.id = 'grid';
			startButton = document.createElement('button');
			startButton.id = 'startGame';
			document.body.appendChild(shipDiv);
			document.body.appendChild(gridDiv);
			document.body.appendChild(startButton);
		});
		afterEach(function() {
			document.body.removeChild(shipDiv);
			document.body.removeChild(gridDiv);
			document.body.removeChild(startButton);
		});
		it('draws the grid and ship', function() {
			expect(shipDiv.innerHTML).toBeFalsy();
			expect(gridDiv.innerHTML).toBeFalsy();
			app.init();
			expect(shipDiv.innerHTML).toBeTruthy();
			expect(gridDiv.innerHTML).toBeTruthy();
		});

		describe('init', function() {
			it('starts the game from scratch', function() {
				app.init();
				expect(app.game.inProgress).toBe(false);
			});
			it('reinitializes the game', function() {
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
				expect(shipDiv.innerHTML).toBeTruthy();
				app.start();
				expect(app.game.inProgress).toBe(true);
				expect(shipDiv.innerHTML).toBeFalsy();
			});
		});
	});
});