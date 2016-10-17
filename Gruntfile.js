module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': 'sass/styles.scss'
                },
            },
        },
        wiredep: {
            task: {
                src: [
                    'index.html',
                    'sass/styles.scss'
                ],
            },
        },
    });



    grunt.registerTask('default', ['sass']);

};