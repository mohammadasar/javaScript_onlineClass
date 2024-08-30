//  By string literal
var stringname="string value"; 
var str="This is string literal";  
document.write(str);  

// By string object (using new keyword)
var stringname=new String("string literal");
var stringname=new String("hello javascript string");  
document.write(stringname); 

// JavaScript Strings as Objects
let x = "John";
let y = new String("John");
console.log(x==y)

// String Length
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;

// Escape Characters
// Because strings must be written within quotes, JavaScript will misunderstand this string:
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash

// \" inserts a double quote in a string:
let text = "We are the so-called \"Vikings\" from the north.";

// \' inserts a single quote in a string:
// let text= 'It\'s alright.';

// \\ inserts a backslash in a string:
// let text = "The character \\ is called backslash.";
