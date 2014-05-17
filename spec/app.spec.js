/* global document:true */
define(['app'], function(app) {
	describe('_markAttack', function() {
		var cell;
		beforeEach(function() {
			cell = document.createElement('td');
			cell.setAttribute('data-row', '1');
			cell.setAttribute('data-col', '9');
		});
		it('should mark the element as miss if there is no ship there', function(){
			expect(cell.className.indexOf('hit') >= 0).toBe(false);
			expect(cell.className.indexOf('miss') >= 0).toBe(false);
			app._markAttack(cell);
			expect(cell.className.indexOf('hit') >= 0).toBe(false);
			expect(cell.className.indexOf('miss') >= 0).toBe(true);
		});
		it('should mark the element as hit if there is a ship there', function(){
			app.game.ship.location = [[1,9]];
			expect(cell.className.indexOf('hit') >= 0).toBe(false);
			expect(cell.className.indexOf('miss') >= 0).toBe(false);
			app._markAttack(cell);
			expect(cell.className.indexOf('hit') >= 0).toBe(true);
			expect(cell.className.indexOf('miss') >= 0).toBe(false);
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