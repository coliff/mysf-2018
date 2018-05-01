module.exports = function(grunt){
require('load-grunt-tasks')(grunt);
grunt.initConfig({
    imagemin: {
          static: {
            options: {
                optimizationLevel: 3
            },
        },
      dynamic: {
          options: {
                optimizationLevel: 3,
                svgoPlugins: [{removeViewBox: false}]
            },
        files: [{
            expand: true,
            cwd: 'docs/',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: 'docs/'
        }]
    }
    },
    devUpdate: {
        main: {
            options: {
                updateType: 'prompt',
                reportUpdated: true,
                semver: true,
                packages: {
                    devDependencies: true,
                    dependencies: true
                },
                packageJson: null
            }
        }
    }
  });
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);
};
