"use strict";

/*============================
	01. let
============================*/

function theNotebook() {
	let movie = "The Notebook";
	return movie;
}

console.log(theNotebook());	// ①　 : không có error và xuât ra : The Notebook
console.log(movie);			// ②  : có error vì không thể tham chiếu đến biến movie