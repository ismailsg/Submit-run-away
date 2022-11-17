var val=100
function verifier(){

    
}

function validate() { 
     
    var str = document.getElementById("password").value; 
    if (str.length >= 8) 
        return true;
    else 
        return false;
} 

function changer() {
ele=document.getElementById("valid");
// ele.style.background-colorgreen;
if(!validate())
{
    ele.style.background="aqua"    
val=-val;
let pad=100-val;
ele.style.margin="0px 10px 0px "+pad+"px";
}
else 
{
    ele.style.background="green"
}
} 