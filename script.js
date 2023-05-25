//your JS code here. If req

let selref = document.getElementById("colorSelect")
let val = selref.value;
let btnref = document.getElementsByTagName("input")[0]
btnref.addEventListener("click",removeval)
function removeval(val){
     selref.remove(val)
}