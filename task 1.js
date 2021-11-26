function person(FirstName ,LastName,Office_Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Office_Address=Office_Address
}
var p1 = new person("Ganesh","chowdary","America , Newjersey,1111");
var p2 = new person("Chaithra","reddy","London,1111");
var p3 = new person("Divya","Reddy","Bangkok,1111");

console.log(p1);
console.log(p2);
console.log(p3);