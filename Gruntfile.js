module.exports = function(grunt) {

	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					baseUrl: 'src',
					name: 'app',
					out: 'dist/battleship-app.js'
				}
			}
		},
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
		},
		watch: {
			scripts: {
				files: ['src/**/*.js', 'spec/**/*.js'],
				tasks: ['default'],
				options: {
					spawn: false
				}
			},
			configFiles: {
				files: [ 'Gruntfile.js'],
				options: {
					reload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('test', ['jshint', 'jasmine']);
	grunt.registerTask('default', ['test', 'requirejs']);

};