module.exports = function (grunt) {

  grunt.initConfig({
    clean: {
      build: ["build"]
    },
    copy: {
      build: {
        files: [
          { expand: true, cwd: "public", src: ["**"], dest: "build" }
        ]
      }
    },
    browserify: {
      dev: {
        files: {
          "build/app.js": ["js/main.jsx"]
        },
        options: {
          transform: ["reactify"]
        }
      }
    },
    watch: {
      src: {
        files: ["js/**/*.js", "js/**/*.jsx", "less/**/*.less", "public/**/*.html"],
        tasks: ["build"],
        options: {
          livereload: {
            port: 9000
          }
        }
      }
    },
    connect: {
      dev: {
        options: {
          port: 8000,
          base: "./build",
          livereload: 9000
        }
      }
    },
    less: {
      dev: {
        files: {
          "build/styles.css": "less/main.less"
        }
      }
    },
    autoprefixer: {
      dev: {
        src: "build/styles.css",
        dest: "build/styles.css"
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-autoprefixer");

  grunt.registerTask("build", ["clean:build", "browserify:dev", "less:dev", "autoprefixer:dev", "copy:build"]);
  grunt.registerTask("default", ["connect:dev", "watch:src"]);

};