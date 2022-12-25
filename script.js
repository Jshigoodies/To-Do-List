var timeEl = document.querySelector(".time");

var list = document.querySelector("#to-do-list");

const day = dayjs();  // create a dayjs object for the current date and time
console.log(day.format('dddd, MMMM D YYYY')); 


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
    for(var i = 0; i<4; i++)
    {
        var divTodoEl = document.createElement("div");
        divTodoEl.classList.add("to-do-item");

        var divTimeTitleEl = document.createElement("div");
        divTimeTitleEl.classList.add("time-title");

        var headingEl = document.createElement("h2");
        headingEl.textContent = amNum + " AM"

        amNum++;

        divTimeTitleEl.appendChild(headingEl);

        var inputEl = document.createElement("input");
        inputEl.type = "text"
        inputEl.classList.add("item-input");

        var buttonEl = document.createElement("button");
        buttonEl.type = "submit";
        buttonEl.classList.add("save-button");
        buttonEl.textContent = "💾";

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

        pmNum++;

        divTimeTitleEl.appendChild(headingEl);

        var inputEl = document.createElement("input");
        inputEl.type = "text"
        inputEl.classList.add("item-input");

        var buttonEl = document.createElement("button");
        buttonEl.type = "submit";
        buttonEl.classList.add("save-button");
        buttonEl.textContent = "💾";

        divTodoEl.appendChild(divTimeTitleEl);
        divTodoEl.appendChild(inputEl);
        divTodoEl.appendChild(buttonEl);

        list.appendChild(divTodoEl);

        console.log("here PM times");
    }
}


makeList();
setDate();


