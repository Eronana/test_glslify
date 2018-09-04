precision mediump float;
#pragma glslify:test = require('./test.glsl')

void main() {
	gl_FragColor = test(1.0);
}
