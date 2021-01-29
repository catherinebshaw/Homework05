var currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format('MMMM Do YYYY');

var currentHr = moment().format('HH');
console.log(currentDay);
console.log(currentHr);

var blockHr = document.querySelectorAll(".time-block")
console.log(blockHr)


for( i=0; i < blockHr.length; i++ ){
blockHr.textContent = i
console.log(blockHr.textContent)
if ( (8 + (i)) < currentHr ){
    blockHr[i].classList.add("past")
    console.log('past')
    }
    else if (( 8 + (i)) == currentHr ) {
    blockHr[i].classList.remove("past");
    blockHr[i].classList.add("present");
    console.log("present");
    }
    else {
    blockHr[i].classList.remove("past");
    blockHr[i].classList.remove("present")
    blockHr[i].classList.add("future")
    console.log("future");
    }
}


