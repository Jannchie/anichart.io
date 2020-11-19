import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';

// import base style
import 'codemirror/lib/codemirror.css';

import '~/assets/codemirror/vscode-dark.css';
// import language js
import 'codemirror/mode/javascript/javascript.js';

// you can set default global options and events when Vue.use
Vue.use(VueCodemirror, {
  options: {
    lineNumbers: true,
    line: true,
    tabSize: 2,
    styleActiveLine: true,
    foldGutter: true,
    styleSelectedText: true,
    scrollbarStyle: 'null',
    lineWrapping: true,
    mode: 'text/javascript',
    theme: 'vscode-dark',
  },
  events: ['scroll'],
});
