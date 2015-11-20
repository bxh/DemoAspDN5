/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
    });
    module.exports = function(grunt) {
    	var DEST_FOLDER = "wwwroot";
    	var VENDOR_JS_DEST = DEST_FOLDER + "/js/vendor.js";
    	var VENDOR_CSS_DEST = DEST_FOLDER + "/css/vendor.css";
    	var VENDOR_MIN_JS_DEST = DEST_FOLDER + "/js/vendor.min.js";
    	var VENDOR_MIN_CSS_DEST = DEST_FOLDER + "/css/vendor.min.css";

    	require('load-grunt-tasks')(grunt);

    	grunt.initConfig({
    		concat: {
    			vendor_js: {
    				src: [
						'wwwroot/lib/angular/angular.js',
						'wwwroot/lib/bootstrap/dist/js/bootstrap.js',
						'wwwroot/lib/lodash/lodash.js'
    				],
    				dest: VENDOR_JS_DEST
    			},
    			vendor_css: {
    				src: [
						'wwwroot/lib/bootstrap/dist/css/bootstrap.css',
						'wwwroot/lib/bootstrap/dist/css/bootstrap-theme.css'
    				],
    				dest: VENDOR_CSS_DEST
    			},
    			vendor_min_js: {
    				src: [
						'wwwroot/lib/angular/angular.min.js',
						'wwwroot/lib/bootstrap/dist/js/bootstrap.min.js',
						'wwwroot/lib/lodash/lodash.min.js'
    				],
    				dest: VENDOR_MIN_JS_DEST
    			},
    			vendor_min_css: {
    				src: [
						'wwwroot/lib/bootstrap/dist/css/bootstrap.min.css',
						'wwwroot/lib/bootstrap/dist/css/bootstrap-theme.min.css'
    				],
    				dest: VENDOR_MIN_CSS_DEST
    			},
    			app_js: {
    				src: [APP_JS],
    				dest: APP_JS_DEST
    			},
    			app_css: {
    				src: [APP_CSS],
    				dest: APP_CSS_DEST
    			}
    		},
    		uglify: {
    			app: {
    				files: [
							{ src: 'wwwroot/js/app.js', dest: 'wwwroot/js/app.min.js' }
    				]
    			}
    		},
    		cssmin: {
    			app: {
    				files: [
							{ src: 'wwwroot/css/app.css', dest: 'wwwroot/css/app.min.js' }
    				]
    			}
    		}
    	});

    	grunt.registerTask('build', []);
    	grunt.registerTask('build-vendor', ['concat:vendor_js', 'concat:vendor_css']);
    	grunt.registerTask('release-build', []);
    	grunt.registerTask('release-build-vendor', ['concat:vendor_min_js', 'concat:vendor_min_css']);

    	grunt.registerTask('default', ['build', 'build-vendor']);
    	grunt.registerTask('release', ['release-build', 'release-build-vendor', 'cssmin', 'uglify']);
    }
};