// 변수에 담기
var two = function() {
	return 2;
}

// argument로 전달하기
var caller = function(f) {
	return f();
}
caller(two);
console.log(caller(two));

// 반환값으로 사용
var f = function() {
	return two;
}
