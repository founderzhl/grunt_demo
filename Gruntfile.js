/*----------------------------------------------------
 * zhl20160411 grunt\connect
 *-----------------------------------------------------*/
'use strict';

/*----------------------------------------------------
 * Module Setting
 *-----------------------------------------------------*/
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		// Task htmlmin
		htmlmin: { 		
			dist: {
				options: {
					removeComments: true,		//去注析
					collapseWhitespace: true	//去换行
				},
				files: { // Dictionary of files
					'dist/html/index.html': ['src/html/index.html']
				}
			}
		},

		// Task jsmin
		uglify: {
			options: {
				mangle: false
			},
			build: {
				files: {
					'dist/js/comm.js': ['src/js/comm.js']
				}
			}
		},

		// Task cssmin
		cssmin: {
			/*
			compress: {
				files: {
				  'assets/all.min.css': ['css/a.css', 'css/b.css']
				}
			}, */
			
			/*
			smeite: {
				files: {
					'assets/smeite.all.css': ['/play21/smeite.com/public/assets/css/**.css']
				}
			},*/
			with_banner: {
				options: {
					banner: '/* projA Css files by Sonic */'
				},
				files: {
					'dist/css/combo.css': ['src/css/base.css','src/css/index.css']
				}
			}
		},

		 // Task imagemin
		 imagemin: {
			dist: { // Target
				options: { // Target options
					optimizationLevel: 3
				},
				files: { // Dictionary of files
					'dist/images/photo.png': 'src/images/photo.png', // 'destination': 'source'
					'dist/images/badge.jpg': 'src/images/badge.jpg'
				}
			}
		},

		/*[Connect] --------------------------------------------------------------------------*/
		 connect: {
		  options: {
			  port: 9000,
			  open: true,
			  livereload: 35729,
			  // Change this to '0.0.0.0' to access the server from outside
			  hostname: 'localhost'
		  },
		  server: {
			options: {
			  port: 9001,
			  base: 'dist/html/'
			}
		  }
		},
		// Configuration to be run (and then tested)
		regarde: {
			html: {
				files: 'src/**/*.html',
				tasks: ['connect']
			},
			css:{
				files: 'src/css/*.css',
				tasks: ['connect']
			},
			js:{
				files: 'src/js/*.js',
				tasks: ['connect']
			}
		}

	});

	// Load the plugin HTML/CSS/JS/IMG min
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	// Build task(s).
	grunt.registerTask('build', ['htmlmin', 'uglify', 'cssmin', 'imagemin']);

	/* [connect & task ] ---------------*/
	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('live', ['connect', 'regarde']);
};