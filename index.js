
const arr=[];
        const todo=document.querySelector('#todo');
        const ol=document.querySelector('ol');

const todoApp=function(){
    
    
   if(todo.value!=""){
      arr.push(todo.value);
   }
   else{
    alert("Cannot be empty");
   }
   todo.value='';
   renderTodo();
  
}

function renderTodo(){
    ol.innerHTML='';
    for (let i = 0; i < arr.length; i++) {
    ol.innerHTML+=`<li class="list"><div><p >${i+1}) ${arr[i]}</p></div><div class="btn"> <button style="background-color:green;" onclick="editFunc(${i})">Edit</button><button style="background-color:red;" onclick="deleteWar(${i})">Delete</button></div></li>`;
      
   }
}
function editFunc(index){
    console.log("edit");
    const n= prompt(`Enter value to update ${arr[index]}`);
    if(n!="" && n!=null){
   arr[index]=n;

    }
    else{
        alert("Please enter some value");
    }

   renderTodo();
}
function deleteWar(index){
const a = document.querySelector('.edit');

    a.style.display='flex';
    a.style.direction='column'
  

}
function notShow(){
    const a = document.querySelector('.edit');
    a.style.display='none';
}

function deleteFunc(index){
    console.log("delete");
   arr.splice(index,1);
   renderTodo();
   notShow();
}

 

