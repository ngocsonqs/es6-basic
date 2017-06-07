"use strict";

/*============================
	01. this trong let & var
============================*/
var varGlobal = "var global";

let letGlobal = "let global";

console.log(this.varGlobal);	// ①
console.log(this.letGlobal);	// ②

/*=======================

■　①:
------
	▲　KẾT QUẢ:
		var global

■　②:
------
	▲　KẾT QUẢ:
		let global

========================*/