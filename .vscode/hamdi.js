function human(){
      var person = {
        firstName: "Hamdi",
        lastName: "Abass",
        age: 22,
        eyeColor: "white"
      };
      console.log(person.firstName + " is " + person.age + " years old.")
     console.log(person)}
    
    
    human();

    class School{
        constructor(registration,name){
        this.registration=registration;
        this.name=name;
        
         }
         id(){
           let number=new Number();
           console.log(number);
         }
         }
         let studentSchool= new School(346,"Hamdi")
         let studentSchool2= new School(678,"Loyce")
         console.log(studentSchool)
         console.log(studentSchool2)


class Home{
              constructor(familyMembers){
                  this.familyMembers= familyMembers;
              }
             get Members(){
                 return this.numMembers;
              }
              set Members(familyMembers){
                  this.numMembers =familyMembers;
              }
              static welcome(){
                  console.log('Welcome to my family');
              }
              static thank(){
                  console.log('Thanks for your time');
              }
              
              }
             
            
let person = new Home(1);
let person2 = new Home(2);
          
person.Members = "Loyce";
 person.welcome="welcome to my family"
 person.thank='Thanks for your time'


 console.log( 'Hello sister' + " "  + person.Members  + " "  +  person.welcome    + " " + 'and'+ " "+ person.thank );
                 
 class Personality extends Home{
 constructor(familyMembers,introvert,behaviour){
                  super(familyMembers);

                  this.introvert = introvert;
                  this.behaviour = behaviour;
                  
              }
              
              info(){
      console.log('My sister' + " " + person.Members + "  " + 'is an ' + " " + this.introvert + " "+ 'with ' + " " + this.behaviour);
              }
            }
            
            let sister = new Personality('Aisha','introvert', 'unique character');
            person.Members='Aisha'
            person.introvert='introvert'
            person.behaviour='unique behaviour'
            sister.info()
            var siblings=["Nasra","Halima","Deka","Moha","Ahmed","Meymuna","Rahma","Azmi"]
            console.log(siblings)
            siblings.length;
            console.log(siblings.length)
            siblings.push("mom")
            console.log(siblings)
            siblings.shift()
            console.log(siblings)
            var schools=['Makini','Tumaini','Lesani']
            var shops=['Costni','Kiliman']
            var village=schools.concat(shops)
            console.log(village)
            siblings.splice(0,1);
            console.log(siblings)
            siblings.sort()
            console.log(siblings)
            siblings.reverse()
            console.log(siblings)
        