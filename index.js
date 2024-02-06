const daye=document.querySelector(".day");
const time=document.querySelector(".time");
const listbox=document.querySelector(".listbox")
const text_bx=document.querySelector(".type")
const d =new Date();
const day=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"]
daye.innerHTML=day[d.getDay()]
time.innerHTML=d.getDate()+"/"+d.getMonth()+1+""+"/"+d.getFullYear();

function add(){
    if(text_bx.value==""){
        document.querySelector(".error").innerHTML="Empty list can't be added"
    }
    else{
        document.querySelector(".error").innerHTML=""
    let li = document.createElement("li")
    li.innerHTML=text_bx.value;
    listbox.appendChild(li)
    let span=document.createElement("span")
       span.innerHTML="\u00d7"
       li.appendChild(span)
    }
    text_bx.value=""
    storage()
}
listbox.addEventListener("click", (e)=>{
    if(e.target.tagName==='LI'){
      e.target.classList.toggle("done");
      console.log("kdji")
      storage()
    }  
    else if(e.target.tagName==="SPAN"){
       e.target.parentElement.remove()
       storage()
    }

    
},false)
function storage(){
    localStorage.setItem("data",listbox.innerHTML);

}
function get(){
  listbox.innerHTML=localStorage.getItem("data")
}
get()