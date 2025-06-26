// Grab the form and input
const form = document.getElementById("guest-form");
const input = document.getElementById("guest-name");
const category = document.getElementById("category");

//Grab the list 
const guestList = document.getElementById("guest-list");

form.addEventListener("submit", function(event) {
    //stop the from reloading the page
    event.preventDefault();

    //The guest list limit
    if (guestList.children.length >= 10)
    {
        alert("Maximum number reached!");
        return;
    }


    //Get the input value and remove extra spaces
    const name = input.value.trim();

    //alert the user if the input is empty thhen stop
    if(name === "") {
        alert("Please enter a guest name.");
        return;
    }

    //Create a new list item element 
    const listItem = document.createElement("li");

    //Set the text of the list item to a guest name
    listItem.textContent = `${name} (${category.value}) (Not Attending)`;
    const timestamp = new Date().toLocaleTimeString();
    const timeSpan = document.createElement("span");
    timeSpan.textContent = `.Added at ${timestamp}`;
    listItem.appendChild(timeSpan);

    //Create a button element
    const removeButton = document.createElement("button");

    ///Name the button 
    removeButton.textContent = "Remove";

    //Add a click event to the button
    removeButton.addEventListener("click", function(){
        listItem.remove(); //this removes the whole <li> when clicked
    });

    //Add name edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function(){
        console.log("Edit button clicked");
    const newName = prompt("Edit name?");
    if(typeof newName ==="string" && newName.trim()!=="") {
        listItem.textContent =`${newName}(${category.value}) (Not Attending)`;//name update
    }
    });

    //Add the list item to the guest list
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    guestList.appendChild(listItem);

    //Toggle RSVP status when the quest name is clicked
    listItem.addEventListener("click", function (){
        if(listItem.textContent.includes("Not Attending")) {
            listItem.textContent = `${name} (Attending)`;
        } else {
            listItem.textContent = `${name} (Not Attending)`;
        }

        //Reattatch the remove button after changing the text
        listItem.appendChild(removeButton);
        });

         //Clear the input field
        input.value = "";
        });