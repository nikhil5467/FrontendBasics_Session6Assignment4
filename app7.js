var employee1 ={
    
    name : "Nikhil Kumar",
    age : 25,
    salary : 30000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 564100
    }
}
var employee2 ={
    
    name : "Prakhar Agarwaal",
    age : 26,
    salary : 40000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 564160
    }
}
var employee3 ={
    
    name : "Aakash Kumar",
    age : 25,
    salary : 20000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 554100
    }
}
var employee4 ={
    
    name : "Piyush Kumar",
    age : 25,
    salary : 30000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 565100
    }
}
var employee5 ={
    
    name : "Rajiv Ranjan",
    age : 25,
    salary : 35000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 564100
    }
}

var employeeArray = [];
employeeArray.push(employee1);
employeeArray.push(employee2);
employeeArray.push(employee3);
employeeArray.push(employee4);
employeeArray.push(employee5);
for(var i =0;i<employeeArray.length;i++){
    
    console.log("employee"+[i+1]);
        console.log( "Name :"+employeeArray[i].name);
        console.log("Age :"+employeeArray[i].age);
        console.log("salary :"+employeeArray[i].salary);
        console.log("City :"+employeeArray[i].address.city);
        console.log("State :"+employeeArray[i].address.state);
        console.log("Pincode :"+employeeArray[i].address.pincode);
        
        
    }

















