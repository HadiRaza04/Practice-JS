
// #1 ALERTS                     CH # 01 From "A SMARTER WAY TO LEARN JAVASCRIPT"

alert("This Page contains sensitive information");
// Another Way
var a = "This Page contains sensitive information";
window.alert(a);


// #2 VARIBLES FOR STRINGS       CH # 02 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var nationality;
nationality = "Pakistani";
console.log(nationality);
// Another Way
var nationality = "Pakistani";
console.log(nationality);

// Changes Variables Values
var name1 = "Hadi";
console.log(name1);
var name1 = "Raza";
console.log(name1);

// #3 VARIBLES FOR NUMBERS       CH # 03 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var weight = 60;
weight += 20;
console.log(weight);

var firstNum = 24;
var secondNum = 7;
var total = firstNum + secondNum;
console.log(total);

var origNum = 7;
origNum = origNum + 10;
console.log(origNum);
// Strings Number Addition
var strNum = "27";
strNum = strNum + 0;
console.log(strNum);  // strNum = 270;
console.log(strNum + 4);

// #4 VARIBLES Names Legal and Illegal        CH # 04 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var rose = "Welcome to my Page";
// console.log(Rose);  //ERROR Rose is NotDefined
console.log(rose);
// SOME ILLEGAL OR LEGAL NAMES
var username  //illegal
var summer  //legel
var summerVication  //legal


// #5 MATH EXPRESSIONS:FAMILIAR OPERATORS     CH # 05 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var popularNumber = 2 + 2;
console.log(popularNumber);
// Another Way 
console.log(2+2);
var secPopularNum = 12 * 9;
console.log(secPopularNum);
// % is the Modulus Operator.
var whatsLeftOver = 9 % 3;
console.log(whatsLeftOver); 


// #6 MATH EXPRESSIONS: UNFAMILIAR OPERATORS     CH # 06 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var nun = 2;
var newNun = nun++;
console.log(nun);
console.log(newNun);

var nun1 = 9;
var newNun1 = ++nun1;
console.log(nun1);
console.log(newNun1);


var nul = 9;
var newNul = nul--;
console.log(nul);
console.log(newNul);

var nul1 = 13;
var newNul1 = --nul1;
console.log(nul1);
console.log(newNul1);


// #7 MATH EXPRESSIONS: ELIMINATING AMBIGUITY     CH # 07 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var valuee = (1 + 3) * 4;
console.log(valuee);
// First Solve () Brackets
var valuee1 = 1 + (3 * 4);
console.log(valuee1);

var compile = (3 * 2) * 4 + 2;
console.log(compile);
// Another Way
var compile1 = ((3 * 2) * 4) + 2;
console.log(compile1);

var compile2 = (3 * 2) * (4 + 2);
console.log(compile2);


// #8 CONCATENATING TEXT STRINGS                  CH # 08 From "A SMARTER WAY TO LEARN JAVASCRIPT"

console.log("Welcome Hadi Raza!")
// Another Way
var user = "Hadi Raza";
console.log("Welcome " + user + "!");

var msg = "Thanks, ";
var cooloon = " !";
console.log(msg + user + cooloon);

var messaga = "Thanks, ";
var userNamee = "Susan";
var banger = "!";
var customMess = messaga + userNamee + banger;
console.log(customMess);

console.log("2" + "2");



//   #9 PROMPTS                                  CH # 09 From "A SMARTER WAY TO LEARN JAVASCRIPT"


var yourName = prompt("Enter your name");
console.log(yourName);

var ques = "Your species?";
var ans = "Human";
var display = prompt(ques, ans);
console.log(display);


//   #10 IF STATEMENTS                              CH # 10 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var x = prompt("Where does the Hadi live?");
if(x === "karachi"){
    console.log("True");
}
else {
    console.log("False");
}


//   #11 COMPARISON OPERATORS                        CH # 11 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var yourTicketNum = 00022;
if (yourTicketNum !== 00021){
    console.log("Better Luck next time");
}
 
// === equal to with data type
// ==  equal to without data type
// !== not equal to
// <   less than   and  > greater than
// <=  less than or equal to
// >=  greater than or equal to


//   #39  SWITCH STATEMENTS: HOW TO START THEM        CH # 39 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var dayOfWeek = prompt("What Day is Today???")
switch(dayOfWeek){
    case "Sat":
        console.log("Whoopee");
        break;
    case "Sun":
        console.log("Whoopee");
        break;
    case "Fri":
        console.log("TGIF!");
        break;
    default :
        console.log("Shoot me now!")
}


//   #40  SWITCH STATEMENTS: HOW TO COMPLETE THEM       CH # 40 From "A SMARTER WAY TO LEARN JAVASCRIPT"

// The keyword default works like else in an if...else statement

switch (dayOfWeek){
  case "Fri":
    console.log("Woopee");
    break;
  default :
   console.log("Shoot Me Now!");
}   


//   #41   WHILE LOOPS                           CH # 41 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var a = 27;
while(a < 35){
    console.log(a);
    a++;
} //  Run from 27 to 34


//   #42   DO...WHILE LOOPS                        CH # 42 From "A SMARTER WAY TO LEARN JAVASCRIPT"

var d = 4;
do {
    console.log(d);
    d++;
} while(d < 6);  // Print Atleast one time 


//   #43   PLACING SCRIPTS                        CH # 43 From "A SMARTER WAY TO LEARN JAVASCRIPT"

// // Internal JavaScript
// <script>
//     console.log("Hi Buddy!")
// </script>

// // External JavaScript
// <script src="app.js"></script>


//   #44   COMMENTING                             CH # 44 From "A SMARTER WAY TO LEARN JAVASCRIPT"

// THIS IS A COMMENT  IGNORED BY THE BROWSER
var animals = []; // Declare an empty array

/*
  When a comment requires more than one line,
  a block comment like this, with its opening
  and closing tags, is the way to go.
*/


//   #45   EVENTS: LINK                           CH # 45 From "A SMARTER WAY TO LEARN JAVASCRIPT"

function popup(message) {
    alert(message);
}
    


//   #46   EVENTS: BUTTON                           CH # 46 From "A SMARTER WAY TO LEARN JAVASCRIPT"
// IN HTML FILES



//   #47   EVENTS: MOUSE                          CH # 47 From "A SMARTER WAY TO LEARN JAVASCRIPT"






















































