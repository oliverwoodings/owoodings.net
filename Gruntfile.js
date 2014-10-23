module.exports = function (grunt) {

  grunt.initConfig({
    rm: {
      build: {
        dir: "build"
      }
    },
    copy: {
      build: {
        files: [
          { expand: true, cwd: "public", src: ["**"], dest: "build" }
        ]
      }
    },
    browserify: {
      dist: {
        files: {
          "build/app.js": ["js/app.js"]
        },
        options: {
          transform: ["node-lessify"]
        }
      }
    },
    watch: {
      src: {
        files: ["js/**/*.js", "less/**/*.less"],
        tasks: ["build"],
        options: {
          livereload: {
            port: 9000
          }
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: "./build",
          livereload: 9000
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-rm");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("build", ["rm:build", "browserify:dist", "copy:build"]);
  grunt.registerTask("default", ["connect", "watch"]);

};