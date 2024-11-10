let btn = document.querySelector("button");
let text = document.getElementById("text-input") as HTMLInputElement
let list = document.querySelector(".list")
btn?.addEventListener("click",(Event:MouseEvent)=>{
    if(text.value === ""){
        alert("Please enter some text")
    }else{

        let new_list = document.createElement("ul")  
        let li = document.createElement("li") 
        li.textContent = text.value.toLowerCase();
        let delete_text = document.createElement("span")
        delete_text.innerHTML = '<i class="fas fa-trash"></i>'
    
        new_list.appendChild(li)

        list?.appendChild(new_list)
        new_list.appendChild(delete_text
            
        )
        let data  = text.value
        text.value = " ";
        delete_text.addEventListener("click",(Event:MouseEvent)=>{
            new_list.remove()
        })
        
    }

})

