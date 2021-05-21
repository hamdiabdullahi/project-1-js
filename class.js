function myFirst() {

    console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  
  myFirst();
  mySecond();
//   function human(){
//   var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   console.log(person.firstName + " is " + person.age + " years old.")
//  console.log(person)}


// human();
// var cars=["Saab","Volvo","Bmw"]
// console.log(cars)
// console.log(cars[0])

// class Gari {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }
// let myCar = new Gari("Nissan", 2020);
// let myCar2 = new Gari("Nissan", 2020);
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;

//   }
//   age(){
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// };

// let myGari = new Gari("Ford", 2014);
//  console.log("My car is " + myCar.age() + " years old.");

//  class School{
// constructor(registration,name){
// this.registration=registration;
// this.name=name;

//  }
//  id(){
//    let number=new Number();
//    console.log(number);
//  }
//  }
//  let studentSchool= new School(346,"Hamdi")
//  let studentSchool2= new School(678,"Hannah")
//  console.log(studentSchool)
//  console.log(studentSchool2)
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//     console.log(present)}
//   }
  

// let  myCar = new Model("Ford", "Mustang");
// console.log(myCar)

// class School{
//   constructor(height){
//     this.schoolName=Mwangaza;
//   }
//   login(){
//     return 'I am in' + this.schoolName;
//     console.log(login)
//   }
// }
// class Section extends School{
//   constructor(height,age){
//     super(height);
//     this.age=age;
//   }
//    tell(){
   

//     }
   
// }

// let Element={
//   element1:"wind",
//   element2:"earth",
//   element3:"fire"
// }
//   Element.element4="air"
//   console.log(Element)
//   delete Element.element2;
//   console.log(Element)
//   Element.element3

// class Vehicle{
//   constructor(_wheels){
//       this.numWheels = _wheels;
//   }
//   get wheels(){
//       return this.numWheels;
//   }
//   set wheels(_wheels){
//       this.numWheels = _wheels;
//   }
//   static accelerate(){
//       console.log('go faster');
//   }
//   static decelerate(){
//       console.log('go slower');
//   }
//   justAMethod(){
//       //like a function
//   }
//  }

// let car = new Vehicle(4);
// let car1 = new Vehicle(2);
// let car2 = new Vehicle(6);
// car.wheels = 7;
// console.log(car.wheels);
// Vehicle.accelerate();

// class Car extends Vehicle{
//   constructor(_wheels, _make, _model, _year){
//       super(_wheels);
//       this.make = _make;
//       this.model = _model;
//       this.year = _year;
//   }
  
//   info(){
//       console.log('The', this.make, this.model, 'was made in', this.year, 'and has', this.wheels, 'wheels');
//   }
// }

// let ferrari = new Car(4, 'Ferrari', 'Testarossa', 1985);
// ferrari.info();
// Car.accelerate();
// Car.accelerate();
// Car.accelerate();
// Car.accelerate();
// Car.accelerate();