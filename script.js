var timeEl = document.querySelector(".time");

var list = document.querySelector("#to-do-list");

var day = dayjs();  // create a dayjs object for the current date and time
console.log(day.format('dddd, MMMM D YYYY')); 

var clearButtonEl = document.querySelector("#clear");

clearButtonEl.addEventListener("click", clearLocalStorage);

function setDate() {
    var day = dayjs();
    var now = day.format('dddd, MMMM D'); 

    timeEl.textContent = now;

}


function makeList() {
    // <div class = "to-do-item">
    //     <div class="time-title">
        //     <h2>
        //         9 AM
        //     </h2>
    //     </div>
    //     <input type="text" class="item-input">
    //     <button type="submit" class="save-button">💾</button>
    // </div>

    // AM times
    var amNum = 9
    var current = false //did we find out where we are on the time table condition
    for(var i = 0; i<4; i++)
    {
        var divTodoEl = document.createElement("div");
        divTodoEl.classList.add("to-do-item");

        var divTimeTitleEl = document.createElement("div");
        divTimeTitleEl.classList.add("time-title");

        var headingEl = document.createElement("h2");
        headingEl.textContent = amNum + " AM"

        divTimeTitleEl.appendChild(headingEl);

        var inputEl = document.createElement("input");
        inputEl.size = 125;
        inputEl.maxLength = 125;
        inputEl.type = "text"
        inputEl.classList.add("item-input");

        // if you did not find out where we are on the time table
        if(!current) {
            //then check it if we still don't know
            var checked = checkIfHere(amNum)
            if(checked) {
                console.log("Current time is " + amNum);
                inputEl.style.backgroundColor = "red";
                current = true;
            }
            else {
                // if you still don't know where we are on the time table, that time must have passed then
                inputEl.style.backgroundColor = "gray";
            }
        }
        else {
            //we know where we are, the time after it are just green
            inputEl.style.backgroundColor = "green";
        }

        //set value of input
        if(localStorage.getItem(amNum) != null) {
            inputEl.value = localStorage.getItem(amNum);   
        }

        amNum++;

        var buttonEl = document.createElement("button");
        buttonEl.type = "submit";
        buttonEl.classList.add("save-button");
        buttonEl.textContent = "💾";
        buttonEl.addEventListener("click", function(event) {
            saveToLocalStorage(event);
        });

        divTodoEl.appendChild(divTimeTitleEl);
        divTodoEl.appendChild(inputEl);
        divTodoEl.appendChild(buttonEl);

        list.appendChild(divTodoEl);

        console.log("here AM times");
    }

    amNum = 9; // reset

    var pmNum = 1;
    // PM times
    for(var i = 0; i<12; i++) {
        var divTodoEl = document.createElement("div");
        divTodoEl.classList.add("to-do-item");

        var divTimeTitleEl = document.createElement("div");
        divTimeTitleEl.classList.add("time-title");

        var headingEl = document.createElement("h2");
        headingEl.textContent = pmNum + " PM"

        divTimeTitleEl.appendChild(headingEl);

        var inputEl = document.createElement("input");
        inputEl.size = 125;
        inputEl.maxLength = 125;
        inputEl.type = "text"
        inputEl.classList.add("item-input");

        // if you did not find out where we are on the time table
        if(!current) {
            //check it
            var checked = checkIfHere(pmNum + 12)
            if(checked) {
                console.log("Current time is " + pmNum);
                inputEl.style.backgroundColor = "red";
                current = true;
            }
            else {
                // if you still don't know where we are on the time table, that time must have passed then
                inputEl.style.backgroundColor = "gray";
            }
        }
        else{
            //we know where we are, the time after it are just green
            inputEl.style.backgroundColor = "green";
        }

        if(localStorage.getItem(pmNum + 12) != null) {
            inputEl.value = localStorage.getItem(pmNum + 12);   
        }

        pmNum++;

        var buttonEl = document.createElement("button");
        buttonEl.type = "submit";
        buttonEl.classList.add("save-button");
        buttonEl.textContent = "💾";
        buttonEl.addEventListener("click", function(event) {
            saveToLocalStorage(event);
        });

        divTodoEl.appendChild(divTimeTitleEl);
        divTodoEl.appendChild(inputEl);
        divTodoEl.appendChild(buttonEl);

        list.appendChild(divTodoEl);

        console.log("here PM times");
    }

    pmNum = 1; //reset
    current = false; //reset
}

function checkIfHere(numTime) {
    var now = dayjs();
    var isNumTime = now.isSame(dayjs().hour(numTime), "hour");

    return isNumTime;
}

function clearLocalStorage() {
    localStorage.clear();
    for(var i = 9; i< 25; i++) {
        localStorage.setItem(i, "");
    }
}

function saveToLocalStorage(event) {
    var input = event.target.parentNode.querySelector("input");

    var inputValue = input.value;

    var time = event.target.parentNode.querySelector(".time-title");
    var timeString = time.textContent;

    console.log(timeString);

    var timeNum = null;

    timeString = timeString.replace(" AM", "");
    if(timeString.includes("PM")) {
        timeString = timeString.replace(" PM", "");
        timeNum = Number(timeString) + 12;
    }
    else{
        timeNum = Number(timeString);
    }
    
    

    

    localStorage.setItem(timeNum, inputValue);

    console.log("At time: " + timeNum);

    console.log(inputValue);
}
makeList();
setDate();


// console.log("testing ================");

// const now = dayjs();
// const isOnePM = now.isSame(dayjs().hour(12), "hour");

// if (isOnePM) {
//   console.log("It is 12 PM");
// } else {
//   console.log("It is not 12 PM");
// }



