const inputForm = document.querySelector("#form"); 
const itemsList = document.querySelector("#items");

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input
    const input = document.querySelector("#input-item");
    const value = input.value;
    if (value === "") {
        console.log("Input is empty");
        return;
    }

    // Create li and delete button
    const newItem = document.createElement("li")
    newItem.textContent = value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.margin = "10px";
    // Add event listener to delete item from list on click
    deleteButton.addEventListener("click", (e) => {
        itemsList.removeChild(newItem);
    })
    newItem.appendChild(deleteButton);

    itemsList.appendChild(newItem);

    input.focus();
    input.value = "";
});