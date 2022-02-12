let input = document.querySelector("#input");
let addBtn = document.querySelector(".add-todo-btn");
let tBoody = document.querySelector('#todo-list');
let num = 0;

addBtn.addEventListener("click", function  (event) {
    // console.log("todo clicked");
    // console.log(input.value);
    if (input.value == "") {
        alert("Please Enter A Todo")
    } else {
        num++;
        let tr = document.createElement("tr");
        tr.innerHTML= `
        <th scope="row">${num}</th>
        <td>${input.value}</td>
        <td class="status" style="color: darkred;">Processing</td>
        <td>
            <button  style="background-color: green; color: white" class="done-btn btn btn-sm"><i class="fa-solid fa-square-check"></i></button>

            <button  style=" color: white" class="delete-btn btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button>
        </td>
        `;
        tBoody.appendChild(tr)
        input.value = "";

        


        let deleteBtns = document.querySelectorAll(".delete-btn");
        for (const deleteBtn of deleteBtns) {
            deleteBtn.addEventListener("click", function () {
                deleteBtn.parentNode.parentNode.style.display = "none";
                
            })
        }

        let doneBtns = document.querySelectorAll(".done-btn");
        for (const doneBtn of doneBtns) {
            doneBtn.addEventListener("click", function () {
                let trchilds = doneBtn.parentNode.parentNode.children;
                for (const trchild of trchilds) {
                    if (trchild.className == "status") {
                        trchild.innerText = "Complete";
                        trchild.style.color = "green"
                    }
                }
            
            })
        }
        
        
    }
})


