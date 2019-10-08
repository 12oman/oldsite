//create an empty array for entries = [];
var entries = [];
// initialise a total = 0;
var total = 10;

//create a cache 'temp' to hold the entered key-value in text format''

// listen for a click
clicked()

// when clicked send the even.target.value
function clicked () {
  document.addEventListener('click', getTargetValue);
  
  console.log("button clicked");
}

function getTargetValue () {
  let button = event.target.value
  console.log(button + " was clicked");
  
  testValue(button);
  // if value is a function do that function
  //else store value in entries
}

function testValue (button) {
  if (!isNaN(button) || button === '.') {
    placeNumber(button)
  } else if (button === 'AC') {
    AC()
  } else if (button === 'CE') {
    clr()
  } else if (button === '=') {
    calculate(entries);
  } else {
    placeNumber(button);
  }
}

function placeNumber(value){
  console.log(value + " push the number function");
  entries = entries + value;
  console.log(entries);
  return entries;
}

function AC() {
  console.log(button + "all clear function");
}

function clr() {
  console.log(button +"clear last number");
}

function calculate(entries) {
  // console.log(entries + "calculate function");
  console.log("calculate function");
  console.log(entries);
  result = eval(entries);
  refreshScreen(result);
  console.log(result);
  return result;
}

// total = result;
function refreshScreen(result) {
  document.getElementById("display").innerHTML = result;
}
  // test if this temp value returns a number, add to temp
// alternatives are either a decimal point, a clear function, or an operator
//   if (!isNaN(val) || val === '.') {
//     temp += val;
//     $("#answer").val(temp.substring(0,10));
    
  // If we have a given symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
//   } else if (val === 'AC') {
//     entries = [];
//     temp = '';
//     total = 0;
//     $("#answer").val('')

  // Clear last entry
//   } else if (val === 'CE') {
//     temp = '';
//     $("#answer").val('')
    
  // Change the X symbol to a recognised multiplication operator
//   } else if (val === 'x') {
//     entries.push(temp);
//     entries.push('*');
//     temp = '';
    
  // Change Obelus symbol to '/' a recognised division operator
//   } else if (val === '÷') {
//     entries.push(temp);
//     entries.push('/');
//     temp = '';

  // If we get the equals sign, do that math
//   } else if (val === '=') {
//   	entries.push(temp);

// initialise a new variable called 'nt' and assign it the value of the array and 
    // var nt = Number(entries[0]);
// for however many number or symbol entries there are take 'nt' and perform the right calc
    // for (var i = 1; i < entries.length; i++) {
    
    //   var nextNum = Number(entries[i+1])
    //   var symbol = entries[i];
      
    //   if (symbol === '+') { nt += nextNum; } 
    //   else if (symbol === '-') { nt -= nextNum; } 
    //   else if (symbol === '*') { nt *= nextNum; } 
    //   else if (symbol === '/') { nt /= nextNum; }
      
    //   i++;
    // }
    
    // Swap the '-' symbol so text input handles it correctly
    // if (nt < 0) {
    //   nt = Math.abs(nt) + '-';
    // }
    // select the answer element by id
    // and asign the 'nt' value to it:

    // $("#answer").val(nt);
	// 	entries = [];
    // temp = '';
    
  // if you're not doing the calc Push number to the array:
//   } else {
//     entries.push(temp);
//     entries.push(val);
//     temp = '';
//   }
// });
