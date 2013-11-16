/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            version: '<%= pkg.version %>',
            banner:
                '/*!\n' +
                ' * jQuery-remove-Backbone\n' +
                ' * -------------------\n' +
                ' * v<%= pkg.version %>\n' +
                ' *\n' +
                ' * Copyright (c)<%= grunt.template.today("yyyy") %> Justin Ridgewell\n' +
                ' * Distributed under MIT license\n' +
                ' *\n' +
                ' * https://github.com/jridgewell/jquery-remove-backbone\n' +
                ' */' +
                '\n'
        },

        preprocess: {
            build: {
                files: {
                    'jquery-remove-backbone.js' : 'src/build/jquery-remove-backbone.js'
                }
            }
        },

        uglify : {
            core : {
                src : 'jquery-remove-backbone.js',
                dest : 'jquery-remove-backbone.min.js',
                options : {
                    sourceMap : 'jquery-remove-backbone.map',
                    sourceMapPrefix : 1,
                }
            }
        },

        jshint: {
            options: {
                jshintrc : '.jshintrc'
            },
            src : [ 'src/*.js' ],
            test : [ 'spec/*.js', 'spec/specs/*.js' ],
        },

        mocha: {
            browser: ['spec/index.html'],
            options: {
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-mocha');

    // Default task.
    grunt.registerTask('lint-test', ['jshint:test']);
    grunt.registerTask('test', ['jshint:src', 'preprocess', 'mocha']);
    grunt.registerTask('default', ['test', 'uglify']);

};
