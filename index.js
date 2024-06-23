let title = document.getElementById('title')
let note = document.getElementById('note')
let btn = document.getElementById('btn')
let rightcont = document.getElementById('rightcont')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(title.value)
    console.log(note.value);
    rightcont.innerHTML += `<div> 
    <h2 title="Title">${title.value}</h2>  
    <p title="Note">${note.value}</p> 
    <i class="fa-duotone fa-pen-to-square" title="Edit" style="margin:"></i>
    <i class="fa-solid fa-trash" title="Delete"></i>
    </div>`

    title.value="";
    note.value="";

    let dbtns=document.getElementsByClassName('fa-trash')
    for(let i=0;i<dbtns.length;i++){
        dbtns[i].addEventListener('click',()=>{
            dbtns[i].parentElement.style.display='none';
        })
    }

    let ebtns=document.getElementsByClassName('fa-pen-to-square')
    for(let i=0;i<ebtns.length;i++){
        ebtns[i].addEventListener('click', ()=>{
            title.value=ebtns[i].parentElement.childNodes[1].innerText;
            note.value=ebtns[i].parentElement.childNodes[3].textContent;
            ebtns[i].parentElement.style.display='none';
        })
    }

})