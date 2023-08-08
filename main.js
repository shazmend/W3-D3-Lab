//------Before the break----------
//calculation Functions
function sum( num1 , num2 ){
    return num1 + num2
}
function subtract( num1 , num2 ){
    return num1 - num2    
}

const devide = ( num1 , num2) => {
    return num1 / num2
}

const multiply = ( num1 , num2) => {
    return num1 * num2    
}
console.log("Sum Function:");
console.log(sum( 4 , 2 ));
console.log("Subtract Function:");
console.log(subtract( 4 , 2 ));
console.log("Devide Function:");
console.log(devide( 4 , 2 ));
console.log("Multiply Function:");
console.log(multiply( 4 , 2 ));

//Arrays with filtter 

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let evenArr = arr.filter(function(i){
    return i%2 ==0
})
let oddArr = arr.filter(function(i){
    return i%2 !=0
})
console.log("Array even numbers using filtter:");
console.log(evenArr);
console.log("Array odd numbers using filtter:");
console.log(oddArr);

//------after the break----------
let characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

//Find-Blue Eyes
let fName = characters.find(function(value) {
    return value.eye_color === "blue"
})
    console.log(`first name that has blue eyes is: ${fName.name})`); 

//Find-gender
let gender = characters.find(function(value,index,arr){
    return value.mass > 50 ;
})
    console.log(`first gender that his mass is over 50 is: ${gender.gender})`); 

//FILTER-height less than 200
let height = characters.filter(function(value, index, array) {
    return value.height< 200 
})
    console.log(`characters with height less than 200:`);
    console.log(height);


//FILTER-all male characters
let isMale = characters.filter(function(value, index, array) {
    return value.gender === "male" 
})
    console.log(`all male characters:`);
    console.log(isMale );

//MAP-array of all names only
let allNames = characters.map(function(value) {  
    return value.name
})
    console.log(`all names only:`);
    console.log(allNames);

//MAP-all heights only
let allHeights = characters.map(function(value) {  
    return value.height
})
    console.log(`all heights only:`);
    console.log(allHeights);

//SORT-by mass (low to high)
let sortMass = characters.sort(function(a , b){
    return a.mass - b.mass
});
    console.log(`Sort by mass (low to high):`);
    console.log(sortMass);

//SORT-by height (high to low)
let sortHeight = characters.sort(function(a , b){
    return b.height - a.height
});
    console.log(`Sort by height (high to low):`);
    console.log(sortHeight);

//EVERY-character have mass more than 40
let everyMass = characters.every(function(value, index, arr){
    return value.mass > 40 
});
    console.log(`is every character have mass more than 40?`);
    console.log(everyMass);

//EVERY-character shorter than 200
let everyHeight = characters.every(function(value, index, arr){
    return value.height < 200 
});
    console.log(`is every character shorter than 200?`);
    console.log(everyHeight);

//SOME-character with blue eyes
let someBlueEyes = characters.some(function(value, index, arr){
    return value.eye_color === "blue"
});
    console.log(`Is there at least one character with blue eyes?`);
    console.log(someBlueEyes);

//SOME-character taller than 210
let someHeight = characters.some(function(value, index, arr){
    return value.height > 210
});
    console.log(`Is there at least one character taller than 210?`);
    console.log(someHeight);