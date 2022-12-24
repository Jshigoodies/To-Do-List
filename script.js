var timeEl = document.querySelector(".time");

const day = dayjs();  // create a dayjs object for the current date and time
console.log(day.format('dddd, MMMM D YYYY')); 


function setDate() {
    var day = dayjs();
    var now = day.format('dddd, MMMM D'); 

    timeEl.textContent = now;

}

setDate();


