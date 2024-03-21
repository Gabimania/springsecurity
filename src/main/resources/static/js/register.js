window.onload=()=>{
    document.getElementById("formregister").onsubmit=(e)=>{
        e.preventDefault();
        if(document.getElementById("password").value===document.getElementById("repass").value){
            document.getElementById("formregister").submit();
        }else{
            alert("The password is not the same")
        }
    }
}