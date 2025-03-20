document.addEventListener("DOMContentLoaded",()=>{
    var newtodo = document.querySelector("#new-to-do");
    var addbtn = document.getElementById("add-btn");
    var delbtn = document.getElementById("del-btn");
    var todolist = document.querySelector(".scroll")
    var clist = document.getElementById("items-number");

    function countlist(){
        clist.textContent = todolist.children.length;
    }

newtodo.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        addbtn.click();
    }
})

addbtn.addEventListener("click",()=>{
      const input = newtodo.value.trim();
      if(input === ""){
        alert("please add any new to do");
      }
      else{
      const list = document.createElement("li");
      list.style.display="flex";
      list.style.alignItems="center";
      list.style.marginBottom="0px";

      const comp = document.createElement("input");
      comp.type="checkbox";
      comp.textContent="delete";
      comp.style.cursor = "pointer";
      comp.style.height = "30px";
      comp.style.width = "30px";

      const span = document.createElement("span");
      span.textContent = input;

      comp.addEventListener('click', () => {
        if(span.style.textDecoration==="line-through"){
            span.style.textDecoration="none"
        }
        else{
            span.style.textDecoration="line-through"
        }
        countlist();
});
      list.appendChild(comp);
      list.appendChild(span);
      
      todolist.appendChild(list);
      newtodo.value="";
      countlist()
    }

    delbtn.addEventListener("click",()=>{
        todolist.innerHTML="";
        countlist();
    })
})
})  
