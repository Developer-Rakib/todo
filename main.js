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
        <td class="status" style="color : red;">Processing</td>
        <td>
            <button class="done-btn btn btn-primary btn-sm">a</button>

            <button class="delete-btn btn btn-danger btn-sm">D</button>
        </td>
        `;
        tBoody.appendChild(tr)
        input.value = "";

        


        let deleteBtns = document.querySelectorAll(".delete-btn");
        for (const deleteBtn of deleteBtns) {
            deleteBtn.addEventListener("click", function (e) {
                e.target.parentNode.parentNode.style.display = "none";
                
            })
        }

        let doneBtns = document.querySelectorAll(".done-btn");
        for (const doneBtn of doneBtns) {
            doneBtn.addEventListener("click", function (e) {
                let trchilds = e.target.parentNode.parentNode.children;
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


