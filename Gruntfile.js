
module.exports = function (grunt) {
  'use strict';

  // Load all grunt tasks matching the `grunt-*` pattern.
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take.
  require('time-grunt')(grunt);

  grunt.initConfig({

    sassdoc: {
      test: {
        src: 'test/sass',
        dest: 'test/docs',
        options: {
          title: 'grunt-sassdoc test',
          display_access: ['public', 'private'],
          display_alias: false
        }
      }
    },

    simplemocha: {
      test: {
        src: 'test/*.js'
      }
    },

    clean: {
      test: ['test/docs']
    },

    eslint: {
      target: ['tasks/*.js', 'test/*.js'],
      options: {
        // config: 'conf/eslint.json'
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', [
    'sassdoc:test',
    'simplemocha:test',
    'clean:test'
  ]);

};