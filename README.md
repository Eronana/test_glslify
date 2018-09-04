```bash
npm i
npm start
```
you will see this in terminal
```
--------[ /private/tmp/test_glslify/test.frag ]--------
precision mediump float;
#pragma glslify:test = require('./test.glsl')

void main() {
	gl_FragColor = test(1.0);
}

--------[ /private/tmp/test_glslify/test.glsl ]--------
vec4 test (float x) {
    return vec4(x, x, x, x);
}

#pragma glslify:export(test)
```

I used `{post:true}` for glslify-test, but the transform cannot get finally glsl source.

My expected result is
```
--------[ /private/tmp/test_glslify/test.frag ]--------
precision mediump float;
#define GLSLIFY 1
vec4 test (float x) {
    return vec4(x, x, x, x);
}

void main() {
	gl_FragColor = test(1.0);
}
```
