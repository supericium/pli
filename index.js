var path = require('path');
var GLOB = require('glob-patterns');

var PLI = {
  SOURCE: './src/',
  TARGET: './target/',
  src: {
    main: {
      js: './src/main/js/',
      css: './src/main/css/',
      html: './src/main/html/'
    },
    test: {
      js: './src/test/js/',
      css: './src/test/css/',
      html: './src/test/html/'
    }
  },
  target: {
    main: {
      js: './target/main/js/',
      css: './target/main/css/',
      html: './target/main/html/'
    },
    test: {
      js: './target/test/js/',
      css: './target/test/css/',
      html: './target/test/html/'
    }
  }
}

var glob = path.join(PLI.src.test.html, GLOB.ALL_HTML);

PLI.SRC_MAIN_CSS = path.join(PLI.src.main.css, GLOB.ALL_CSS);
PLI.SRC_MAIN_HTML = path.join(PLI.src.main.html, GLOB.ALL_HTML);
PLI.SRC_MAIN_JS = path.join(PLI.src.main.html, GLOB.ALL_JS);
PLI.SRC_TEST_CSS = path.join(PLI.src.test.css, GLOB.ALL_CSS);
PLI.SRC_TEST_HTML = path.join(PLI.src.test.html, GLOB.ALL_HTML);
PLI.SRC_TEST_JS = path.join(PLI.src.test.html, GLOB.ALL_JS);

module.exports = PLI;
