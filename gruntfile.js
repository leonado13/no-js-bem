module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'elements',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                },{
                    'style.css': 'style.scss'
                }]
            }
        },
        autoprefixer: {
            options: {
                cascade: false,
                map: true
            },
            dist: {
                src: [
                    'css/*.css',
                    'style.css'
                ]
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

// Load the plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

// Default task(s).
    grunt.registerTask('default', ['sass', 'autoprefixer']);
}
;
