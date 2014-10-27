 module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	 pkg: grunt.file.readJSON('package.json'),
	 	sass: {                              // Task
	 	    dist: {                            // Target
 	      		options: {   // Target options
	 	        	style: 'compact',
	 	        	lineNumbers: true
 	      		}, // end options
	 	      	files: {  // Dictionary of files
		 	        'css/loaders.css': 'css/loaders.scss' // 'destination': 'source'
	 	      	} // end files
 	    	} // end dist
 	  	}, // end sass

 	  	watch: {
 	  	  css: {
 	  	    files: '**/*.scss',
 	  	    tasks: ['sass'],
 	  	    options: {
 	  	      livereload: true,
 	  	    } // end options
 	  	  } // end css
 	  	}, // end watch

 	  	svginject: {
 	  	    all : {
 	  	      options: {},
 	  	      files: {
 	  	        'scripts/SVGinject.js': ['img/*.svg'],
 	  	      }
 	  	    }
 	  	  }

	}); // end initconfig

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-svginject');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'watch', 'svginject']);

 };

