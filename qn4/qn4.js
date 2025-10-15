

const toDoContainer=document.getElementById("toDoContainer");
const inputField=document.getElementById("inputField");
const addToDoBtn=document.getElementById("addToDo");
const show=document.getElementById("show");

addToDoBtn.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputField.value
    toDoContainer.appendChild(paragraph)
    localStorage.setItem('tasks',paragraph.innerText);
    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
        console.log(paragraph);
    });
    });
    show.addEventListener('click',function(){
        const paragraphs=toDoContainer.querySelectorAll('p');
        paragraphs.forEach(p=>{
            if(p.style.textDecoration==="line-through"){
            toDoContainer.removeChild(p);
            }
    });

});
