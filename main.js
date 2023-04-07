"use strict";
let TODOS = [
    {
        id: 1,
        title: "Men Java scriptni o'rganyapman!",
        isdone: false,
    },
    {
        id: 2,
        title: "Js ni react js kutubxonasini o'rganaman",
        isdone: false,
    }
];
let input = document.getElementById('input');
function AddTodo() {
    if (input.value === "") {
        alert('Iltimos  inputni toldiring ')
    }
    else {
        TODOS.push({
            id: TODOS.length + 1,
            title: input.value,
            isdone: false
        })
        AvvalgiRender()
        UpdateNumber()
        input.value = null
    }
}

function ClearAll() {
    TODOS.length = 0
    AvvalgiRender()
    UpdateNumber()
}
function del(id) {
    TODOS.splice(id, 1)
    AvvalgiRender()
    UpdateNumber()
}
function UpdateNumber() {
    document.getElementById('num').innerHTML = TODOS.length
}
UpdateNumber()

function AvvalgiRender() {
    let text = ""
    TODOS.forEach((item, index) => {
        text += `
        <div class='box ${item.isdone == true ? "active" : ""}'>
            <p>  ${item.title} </p>
            <div>
                ${item.isdone ? `<input type="checkbox" checked="true"  onchange="check(${index})" >` :
                `<input type="checkbox"   onchange="check(${index})" >`
            }
                <button class="del" onclick="del(${index})"> X </button>
            </div>
       </div>`
    });
    document.getElementById('mainlist').innerHTML = text
}
AvvalgiRender()




function check(i) {
    console.log(i)
    if (TODOS[i].isdone) {
        TODOS[i].isdone = false
    }
    else {
        TODOS[i].isdone = true
    }
    AvvalgiRender()
    UpdateNumber()
};
