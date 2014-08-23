module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
		pivotal: {
			src: 'code/*.js',
			options: {
				specs: 'tests/jasmine/tests.js'
			}
		}
	},
	qunit: {
		all: ['tests/qunit/*.html']
	},
	mocha: {
		all: {
			src: ['tests/mocha/index.html'],
			options: {
				run: true
			}
		}
	},
	jshint: {
		all: ['tests/qunit/tests.js', 'tests/mocha/tests.js', 'tests/jasmine/tests.js',
		'code/**/*.js'],
		options: {
			curly: true
		}
		
	},
	watch: {
		files: ['tests/**/*.js', 'code/**/*.js'],
		tasks: ['jshint', 'jasmine', 'qunit', 'mocha']
	}
	
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['jasmine', 'qunit', 'mocha']);

};