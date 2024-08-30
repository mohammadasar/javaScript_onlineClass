// automatically
// x=5;
// y=6;
// z=x+y;
// document.write("Total =",z)
// console.log("Total = ",z)

// // <===== using var ======>
// var x = 5 ;
// var y = 6 ;
// var z = x+y ;
// document.write(" using var  total is = ",z)
// console.log(" using var  total is = ",z)

//<====== using let ======>
// let x = 7 ;
// let y = 6 ;
// let z = x+y ;
// document.write("using let  total is =",z)
// console.log("using let  total is =",z)

// <====== using const =====>
// const a = 5 ;
// const b = 2 ;
// const c = a+b ;
// document.write("using const total is = ",c,"<br>")

// <====== mixed example =====>
// const d = 5 ;
// const e = 9 ;
// let f = d+e;
// document.write(f);
//  let x=10;
//  document.write(X);

// ================================================================================================================
// <==== Declaring a JavaScript Variable =====>
// undeclaring

// var carName ;
// let carName;

// let carName = ""

// const carName ;
// document.write(carName)
 
// declaring
// var name = "edextech"
// document.write(name);

// ====================================================================================================================

// <===== Re-Declaring JavaScript Variables =====>
// const carName = "Volvo";
// var carName;
// document.write(carName)

// <==== one statement, many variable ====>
// let person = "John Doe",
//     carName = "Volvo",
//     price = 200;

// document.write(person,"<br>")
// document.write(carName,"<br>")
// document.write(price)


// ========================================================================================================
// <========local variable =========>

// function abc(){  
//     var x=10;//local variable  
//     document.write(x);   
//     }  
// function bcd(){
//     document.write(x);  
// }
// // abc() 
// bcd()

// ==========================================================================================================

// <=======Global variable =======>

var data=200;//gloabal variable  
function a(){  
// document.writeln("data =",data ,"<br>");
alert(data);
}  
function b(){  
document.writeln(data);  
// alert(data);
}  
a();//calling JavaScript function  
b();      

// =======================================================================================================
// <============== A JavaScript global variable is declared outside the function or declared with window object.
//  It can be accessed from any function. ============>
// var value=50;  
// function a(){  
// alert("value = "+ window.value);//accessing global variable   
// }  
// a()


// ========================================================================================================
// <===== Declaring JavaScript global variable within function =======>
// function m(){  
//     window.value=100;//declaring global variable by window object  
//     }  
//     function n(){  
//     alert(window.value);//accessing global variable from other function  
//     }
// m();      
// n();