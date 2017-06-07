"use strict";

/*============================
	01. let
============================*/
function foo() {
	let hello = "Hello World";
	if ( true ) {
		let hello = "Hello ES6";
		console.log(hello);	// ①
	}
	console.log(hello);	// ②
}

foo();

/*=======================

■　①:
------
	▲　KẾT QUẢ:
		Hello ES6

	▲ GIẢI THÍCH:
		- MẶC DÙ	: ta khai báo biến Hello ở ngoài if
		- NHƯNG	: vào vòng if ta đã khai báo đè
		- HƠN NỮA	: let chỉ sử dụng trong phạm vi scope block 
		- NÊN	: khi in ra ở đâu thì nó sẽ lấy giá trị trong phạm vi scope block gần nhất( ở vd này là vòng if)

■　②:
------
	▲　KẾT QUẢ:
		Hello World

	▲ GIẢI THÍCH:
		- MẶC DÙ	: trong vòng if ta có khai báo lại biến hello
		- NHƯNG	: biến hello trong vòng if chỉ hoạt động ở trong phạm vi scope block đó thôi
		- HƠN NỮA	: khi gọi biến đó nó sẽ xem trong phạm vi scope block của nó có biến đó không
		- NÊN	: lần này nó không thể nhìn được vào trong phạm vi scope block if nên lấy giá trị hello ở ngoài để in ra
========================*/