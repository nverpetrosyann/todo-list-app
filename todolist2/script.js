let searchBtn = document.querySelector("#search-button")
let searchInp = document.querySelector("#search-input")
let list = document.querySelector("#list")


searchInp.addEventListener("keypress",function(e){
    if (e.key === "Enter") {
        if(!searchInp.value.trim()) {
            alert("Please text anything")
        } else {
            let todo = document.createElement("div")
            todo.classList.add("item")
            let text = document.createElement("p")
            text.innerHTML = searchInp.value
            text.classList.add("item-p")
            todo.append(text)
            list.append(todo)
            searchInp.value = ""
            let tools = document.createElement("div")
            tools.classList.add("tools")
            let completeBtn = document.createElement("button")
            completeBtn.classList.add("complete-btn")
            completeBtn.innerHTML = "Complete";
            let deleteBtn = document.createElement("button")
            deleteBtn.classList.add("delete-btn")
            deleteBtn.innerHTML = "Delete";
            tools.append(completeBtn,deleteBtn)
            todo.append(tools)
            list.append(todo)
            searchInp.value = ""
            deleteBtn.addEventListener("click",function(){
                todo.remove()
            })
            completeBtn.addEventListener("click",function(){
                todo.classList.toggle("done")
                if (todo.classList.contains("done")){
                    todo.querySelector(".complete-btn").innerHTML = "Cancel"
                    todo.style.borderColor = "green"
                } else {
                    todo.querySelector(".complete-btn").innerHTML = "Complete"
                    todo.style.borderColor = "white"


                }
            })
        }
    }

})

searchBtn.addEventListener("click",function(){
    
        if(!searchInp.value.trim()) {
            alert("Please text anything")
        } else {
            let todo = document.createElement("div")
            todo.classList.add("item")
            let text = document.createElement("p")
            text.innerHTML = searchInp.value
            text.classList.add("item-p")
            todo.append(text)
            list.append(todo)
            searchInp.value = ""
            let tools = document.createElement("div")
            tools.classList.add("tools")
            let completeBtn = document.createElement("button")
            completeBtn.classList.add("complete-btn")
            completeBtn.innerHTML = "Complete";
            let deleteBtn = document.createElement("button")
            deleteBtn.classList.add("delete-btn")
            deleteBtn.innerHTML = "Delete";
            tools.append(completeBtn,deleteBtn)
            todo.append(tools)
            list.append(todo)
            searchInp.value = ""
            deleteBtn.addEventListener("click",function(){
                todo.remove()
            })
            completeBtn.addEventListener("click",function(){
                todo.classList.toggle("done")
                if (todo.classList.contains("done")){
                    todo.querySelector(".complete-btn").innerHTML = "Cancel"
                    todo.style.borderColor = "green"
                    todo.style.margin = "10px 20px 10px 20px";

                } else {
                    todo.querySelector(".complete-btn").innerHTML = "Complete"
                    todo.style.borderColor = "white"


                }
            })
        }
    


})

function saveData() {
    localStorage.setItem("data",list.innerHTML)

}

function showData(){
    list.innerHTML = localStorage.getItem("data")
}



























