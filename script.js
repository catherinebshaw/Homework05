var currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format('MMMM Do YYYY');

var currentHr = moment().format('HH');
console.log(currentDay);
console.log(currentHr);

var blockHr = document.querySelectorAll(".time-block")

for( i=0; i < blockHr.length; i++ ){
if (blockHr < currentHr){
    blockHr[i].classList.add("past")
    }
    else if (blockHr === currentHr) {
    blockHr[i].classList.remove("past");
    blockHr[i].classList.add("present");
    }
    else {
    blockHr[i].classList.remove("past");
    blockHr[i].classList.remove("present")
    blockHr[i].classList.add("future")
    }
}


