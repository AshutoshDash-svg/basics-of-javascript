//dates
let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);
let mycreateddate=new Date("2023-01-14")
console.log(mycreateddate.toLocaleString());
let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));
let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());
newdate.toLocaleDateString('default',{
    weekday:"long",
})