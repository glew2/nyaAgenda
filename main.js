window.addEventListener("load", () => {
    const form = document.querySelector("#new-item-form");
    const input = document.querySelector("#new-item-input");
    const element = document.querySelector("#items");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const item = input.value;
        if (!item) {
            return;
        }
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        
        const itemContent = document.createElement("div");
        itemContent.classList.add("content");
        
        itemElement.appendChild(itemContent);
        const itemInputElement = document.createElement("input");
        itemInputElement.classList.add("text");
        itemInputElement.type = "text";
        itemInputElement.value = item;
        itemInputElement.setAttribute("readonly", "readonly");
        itemContent.appendChild(itemInputElement);

        const itemActionsElement = document.createElement("div");
        itemActionsElement.classList.add("actions");

        const editElement = document.createElement("button");
        editElement.classList.add("edit");
        editElement.innerHTML="Edit";

        const deleteElement = document.createElement("button");
        deleteElement.classList.add("delete");
        deleteElement.innerHTML="Delete";

        itemActionsElement.appendChild(editElement); itemActionsElement.appendChild(deleteElement);
        itemElement.appendChild(itemActionsElement);
        element.appendChild(itemElement);
        input.value="";

        editElement.addEventListener("click", ()=>{
            if (editElement.innerText.toLowerCase()=="edit") {
                itemInputElement.removeAttribute("readonly");
                itemInputElement.focus();
                editElement.innerText = "Save";
            }
            else {
                itemInputElement.setAttribute("readonly", "readonly");
                editElement.innerText="Edit";
            }
        });

        deleteElement.addEventListener("click", ()=>{
            element.removeChild(itemElement);
        });
    });
});