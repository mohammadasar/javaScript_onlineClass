// JavaScript Object by object literal
// emp={id:102,name:"Kumar",salary:40000}  
// // document.write(emp.id+" "+emp.name+" "+emp.salary); 
// console.log("id:",emp.id)
// console.log("name :",emp.name)

// By creating instance of Object
// var objectname=new Object();

// var emp=new Object();  
// emp.id=101;  
// emp.name="Ravi ";  
// emp.salary=50000;  
// emp.location="madurai"
// console.log(emp.id)
// document.write(emp.id+" "+emp.name+" "+emp.salary+" "+emp.location);  

// By using an Object constructor
// const person = {
//     firstName: "edex",
//     lastName: "tech",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };


function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
    e=new emp(103,"EdexTech ",30000);  
      
    document.write(e.id+" "+e.name+" "+e.salary);
    console.log("id :",e.id)
    console.log("name :",e.name);
    console.log("salary :",e.salary)