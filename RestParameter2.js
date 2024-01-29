function f(...a, ...b, ...c) {
	// Wrong
}
// Uncaught SyntaxError: Rest parameter must be last formal parameter

function f(arg1, ...rest, arg2) {
	// Wrong
}
// Uncaught SystaxError: Rest parameter must be last formal parameter
