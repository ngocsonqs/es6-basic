"use strict";

/*============================
	01. var
============================*/
function foo() {
	var hello = "Hello World";
	if ( true ) {
		var hello = "Hello ES6";
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
		- HƠN NỮA	: var sử dụng trong phạm vi function
		- NÊN	: khi in ra ở đâu thì nó sẽ lấy giá trị gần nhất trong phạm vi function đó

■　②:
------
	▲　KẾT QUẢ:
		Hello ES6

========================*/