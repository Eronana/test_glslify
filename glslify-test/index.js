module.exports = transform;
module.exports.sync = transform;

function transform (file, src, opts, done) {
	src = '--------[ ' + file + ' ]--------\n' + src;
	console.log(src);

	if (done) done(null, src);
	else return src;
}