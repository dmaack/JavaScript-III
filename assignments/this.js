/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding : If you invoke a function that isnt specified by a 'this' then it will default to the window object

* 2. Implicit Binding : Is the most common rule and references when a function is invoked, look to the left of the dot and that should be what the 'this' keyword is referencing.

* 3. New Binding : You invoke this function with 'new' keyword the 'this' keyword inside that function is then bound to the object being constructed

* 4. Explicit Binding : Is telling the  of call (pass in an argument one by one), apply (pass in an as an array), and bind (is like call but it returns a new function that you invoke later rather than immediately). 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const myName = function(){
    console.log(this.name);
};

const me = {
    name: 'Dominique'
};
myName();
window.name = 'Mac';
myName();

//cannot log my real name Dominique because i invoked it without a specified 'this'
//instead I set the window object to a name to 'Mac' and now can see how it grabs the window object instead




// Principle 2

// code example for Implicit Binding
const petImplicit = {
    name: 'Mango',
    breed: 'German Shorthair Pointer',
    favFood: 'duck',
    sayName: function(){
        console.log(`My pet's name is ${this.name}`);
    }
};
petImplicit.sayName(); //sayName is referecing the 'this' inside the pet function which is pet and on the left of the dot





// Principle 3

// code example for New Binding
const Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type,
    this.getInfo = function(){
        console.log(`The new Animal info is as follows: ${this.color}, ${this.name}, ${this.type}`);
    }
};
const puppy = new Animal('rhone', 'mango', 'GSP');
    puppy.getInfo();



// Principle 4

// code example for Explicit Binding

 // .call:
 const eats = function(food1, food2, food3){
    console.log(`${this.name}'s favorite thing to eat is ${this.favFood} but he also eats ${food1}, ${food2}, and ${food3}.`)
};

 const petCall = {
    name: 'Mango',
    breed: 'German Shorthair Pointer',
   favFood: 'duck' 
};

eats.call(petCall); // eats is invoked and the this keyword is going to referece petCall
//we explicit say what the this keyword is on call
 /*********************************** OR  ************************/
 const foods = ['treats', 'turkey', 'chicken'];

 eats.call(petCall, foods[0], foods[1], foods[2]);
 //with .call here i am passing a parameter in one at a time


//.apply
  eats.apply(petCall, foods);
//does the exact same thing as .call but can now just pass in an array (i.e foods)

//.bind
const newFunction = eats.bind(petCall, foods[0], foods[1], foods[2]);
newFunction();
//same as .call but creates a new function that you can invoke later


