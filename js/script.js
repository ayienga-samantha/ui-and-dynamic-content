//accessing/getting references from html
let item = document.getElementById("item");
let addBtn = document.getElementById("add");
let ul = document.getElementById("list");
let err = document.querySelector(".error");

function addItems() {

    //collect the value
    let val = item.value;

    //trim the white space
    val = val.trim();

    if (val.length !== 0) {
        
        err.innerText = "";
        
        //create the list item
        let li = document.createElement("li");

        //add the content to the <li>
        li.innerText = val;

        //<li>...</li> appended to hard-coded <ul>...</ul>
        ul.appendChild(li);

        //access text field and overwrite the existing value with empty string
        item.value = "";
        
        //getting the cursor back to text field
        item.focus();
    } else {
        err.innerText = "Please enter task and click the button!";
    }

}

addBtn.addEventListener("click", addItems);
