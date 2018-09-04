var glsl = require('glslify');

var el = document.createElement('pre');
el.innerText = glsl('./test.frag');
document.body.append(el);
