var list = document.getElementById("list")

function addTodo(){
    var input = document.getElementById("todo-item")
    var inputVal = input.value

    // creating li with TextNode
    var li = document.createElement("li")
    var createText = document.createTextNode(inputVal)

    // appending text of input in list
    li.appendChild(createText)
    list.appendChild(li)

    // DELETE BUTTON
    var delBtn = document.createElement("button")
    var delBtnText = document.createTextNode("Delete")
    delBtn.appendChild(delBtnText)
    li.appendChild(delBtn)
    
    // setting the attributes of Delete button
    delBtn.setAttribute("class" , "btn btn-danger")
    delBtn.setAttribute("onclick" , "Del(this)")

    // Edit button 
    var editBtn = document.createElement("button")
    var editBtnText = document.createTextNode("Edit")
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)

    // setting the attributes of Edit button
    editBtn.setAttribute("class" , "btn btn-info")
    editBtn.setAttribute("onclick" , "Edit(this)")


    input.value = ""
}
function Del(e){
    // passing the e parameter to get the button
    e.parentNode.remove()    
}
function DeleteAll(){
    list.innerHTML = ""
}
function Edit(e){
    var val = e.parentNode.firstChild.nodeValue
    var editVal = prompt("Enter Edit Value" ,val)
    e.parentNode.firstChild.nodeValue = editVal
}