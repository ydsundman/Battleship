module.exports = function(grunt) {

	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					baseUrl: 'src',
					name: 'main',
					out: 'dist/battleship-app.js'
				}
			}
		},
		jasmine: {
			battleship: {
				src: ['src/**/*.js', "!src/main.js"],
				options: {
					specs: 'spec/*.spec.js',
					template: require('grunt-template-jasmine-requirejs'),
					templateOptions: {
						requireConfig: {
							baseUrl: ''
						}
					}
				}
			},
			battleshipCoverage: {
				src: ['src/**/*.js', "!src/main.js"],
				options: {
					specs: 'spec/*.spec.js',
					template: require('grunt-template-jasmine-istanbul'),
					templateOptions: {
						coverage: 'coverage/report.json',
						report: 'coverage/report',
						template: require('grunt-template-jasmine-requirejs'),
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
				tasks: ['default'],
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

	grunt.registerTask('test', ['jshint', 'jasmine:battleship']);
	grunt.registerTask('default', ['test', 'requirejs']);
	grunt.registerTask('bw', ['default', 'watch']);

};