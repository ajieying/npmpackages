const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'test') {
  console.log(`Running the test task!`);
}
console.log(process.argv)

module.exports = {
	install: function () {
		console.log('ljj-test-packages')
	}
}
