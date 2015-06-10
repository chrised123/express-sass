module.exports = function(grunt){

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      style: {
        options: {
          imagesDir: "public/images",
          fontsDir: "public/fonts",
          sassDir: "public/sass",
          cssDir: "public/stylesheets"
        }
      }
    }, //compass

    watch: {
      css: {
        files: "public/stylesheets/style.css",
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: 'Gruntfile.js',
        options: {
          livereload: false,
          reload: true
        }
      },
      compass: {
        files: "public/sass/{,*/}*.sass",
        tasks: ['compass'],
        options: {
          livereload: false
        }
      },
      js: {
        files: 'app.js',
        options: {
          livereload: true
        }
      },
      jade: {
        files: 'views/{,*/}*.jade',
        options: {
          livereload: true
        }
      }
    }, //watch

  });

  
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  //grunt.loadNpmTasks("grunt-contrib-uglify");
  //grunt.loadNpmTasks("grunt-contrib-clean");
  //grunt.loadNpmTasks("grunt-contrib-concat");
  //grunt.loadNpmTasks("grunt-contrib-cssmin");
  //grunt.loadNpmTasks("grunt-contrib-htmlmin");


  grunt.registerTask("default", ['compass']);
  //grunt.registerTask("prod", ['clean', 'cssmin', 'concat', 'uglify']);
}