"use strict";
let btn = document.querySelector("button");
let text = document.getElementById("text-input");
let list = document.querySelector(".list");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", (Event) => {
    if (text.value === "") {
        alert("Please enter some text");
    }
    else {
        let new_list = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = text.value.toLowerCase();
        let delete_text = document.createElement("span");
        delete_text.innerHTML = '<i class="fas fa-trash"></i>';
        new_list.appendChild(li);
        list === null || list === void 0 ? void 0 : list.appendChild(new_list);
        new_list.appendChild(delete_text);
        let data = text.value;
        text.value = " ";
        delete_text.addEventListener("click", (Event) => {
            new_list.remove();
        });
    }
});
