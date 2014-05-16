module.exports = function(grunt) {

	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jasmine: {
			battleship: {
				src: 'src/**/*.js',
				options: {
					specs: 'spec/*.spec.js',
					helpers: 'spec/*Helper.js',
					template: require('grunt-template-jasmine-requirejs'),
					templateOptions: {
						requireConfig: {
							baseUrl: ''
						}
					}
				}
			}
		},
		jshint: {
			all: [
				'Gruntfile.js',
				'src/**/*.js',
				'spec/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['jshint', 'jasmine']);
	grunt.registerTask('default', ['test']);

};