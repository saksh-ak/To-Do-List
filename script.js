const ip=document.getElementById("inputtask");
const list=document.getElementById("ListTask");

function add(){
    if(ip.value === ''){
        alert("ENTER THE TASK!!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ip.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ip.value="";
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
