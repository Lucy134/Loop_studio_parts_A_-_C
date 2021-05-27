//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require('readline-sync');
let protiens = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let starches= ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies= ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let bev= ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let snacks= ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let num = input.question('How many meals are we assembling? ');
num = Number(num);
let pantry = [];
while (num < 1 || num > 6) {
   num = input.question('Try again with a number between 1 and 6: ');
   num = Number(num);
}

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for( let i =0; i < num; i++){
  let meal =[protiens[i],starches[i], veggies[i], bev[i],snacks[i]];
  console.log(`Menu ${i+1} : ${meal}`);
  pantry.push(meal);
  if(meal.indexOf("kale" || "more kale") != -1){
    console.log("(Don't worry, you can have chocolate tomorrow)");
  }
}
console.log(pantry);
//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”