var btn = document.querySelector("button");
var text = document.getElementById("text-input");
var list = document.querySelector(".list");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (Event) {
    if (text.value === "") {
        alert("Please enter some text");
    }
    else {
        var new_list_1 = document.createElement("ul");
        var li = document.createElement("li");
        li.textContent = text.value.toLowerCase();
        var delete_text = document.createElement("span");
        delete_text.innerHTML = '<i class="fas fa-trash"></i>';
        new_list_1.appendChild(li);
        list === null || list === void 0 ? void 0 : list.appendChild(new_list_1);
        new_list_1.appendChild(delete_text);
        var data = text.value;
        text.value = " ";
        delete_text.addEventListener("click", function (Event) {
            new_list_1.remove();
        });
    }
});
