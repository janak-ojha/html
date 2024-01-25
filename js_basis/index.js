
console.warn("this is warning");
console.error("this is error");


let name="janak";
console.log(typeof name);
let firstname="janakojha";
let lastname="ojha";
console.log(firstname.concat(lastname));
console.log("my name is janak"+lastname);
console.log(firstname.substring(1,3));
console.log(firstname.split(",")[1]);
console.log(firstname.replace("jan","jana"));
//array
let frameworks =["Angular","react","Vue"];
let databases=new Array("DB2","SQL","Mongodb");
//accessing
console.log(frameworks[1]);
databases[0]="Oracle";
console.log(databases);
console.log(databases.sort());
console.log(databases.pop());
console.log(databases);
databases.shift();
console.log(databases);
databases.push("casyandra");
console.log(databases); 
databases.unshift("postgre");
console.log(databases);
console.log(typeof frameworks);
console.log(Array.isArray(frameworks));
//object in js
let employee = {
    id:101,
    firstname:"janak",
    lastname:"ojha",
    age:20,
    doj:"20/10/2022",
    address:{
        city:"mahendranagr",
        country:"nepal"
    },
    skills:['html','css','js']
    
};

console.log(employee);
console.log(employee.age);
//ES6 deconstructing
//array of object

let employees =[
    {
        id:101,
        firstname:"janak",
        lastname:"ojha",
        age:29

    },
    {
        id:102,
        firstname:"mote",
        lastname:"randu",
        age:18
    },
    {
        id:103,
        firstname:"beto",
        lastname:"mugi",
        age:20
    },


];
//loop in js

//for each

employees.forEach(function (emp)
{
    console.log(emp.lastname);
});
//map
const names =employees.map(function(emp)
{
    return emp.firstname;
});
console.log(names);

//filter 
const employeess=employees.filter(function(emp)
{
    return (emp.id==102);
})
.map(function(emp)
{
    return emp.firstname;
});
console.log(employeess);
for(let i=0;i<employees.length;i++)
{
    console.log(employees[1].age);
}
let j=0;
while( j<employees.length)
{
    console.log(employees[j].id);
    j++;
}
for(let employeey of employees)
{ 
    console.log(employeey);

}

 
console.log(employees[2].firstname);
//converting into json file
const employeesJSON=JSON.stringify(employees);
console.log(employeesJSON);
//using json file

const emparray=JSON.parse(employeesJSON);
console.log(emparray);

//consition
let x=10;
//== check either equal to or not 
//=== check with datatypes
if(x==="10")
{
    console.log("x is equal to  10");
}
else{
    console.log("x i equal   not to 10");
}

//turnary operator
console.log(x===10 ? "true" : "false");


const dev="html";
switch(dev)
{
    case "html":
        console.log("i  am html developer");
        break;
    case "css":
        console.log("i am css developer");    
        break;
    default:
        console.log("i am beginner");
        break; 

}

//function in js
function showtext(text)
{
    console.log(text)
}
console.log(showtext("hello"));

//arrow function


const text=(text1,text2)=>
{
    console.log(text1);
    console.log(text2);
}

console.log(text("hello","how"))

//constructor object
function Mobile(brand,price,launchdate)
{
    this.brand=brand;
    this.price=price;
    this.launchdate=launchdate;
}

Mobile.prototype.ram="4gb";
Mobile.prototype.getLaunchYear=function()
{
    return this.launchdate.getFullYear();
};


const s2=new Mobile("samsung","$250","02/11/2019");
const onplus=new Mobile("samsung","$300","2/22/2040");
console.log(s2.getLaunchYear());
console.log(onplus);


//window object and dom
console.log(window.location);




