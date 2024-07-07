
let adminUSer = prompt("how's there?");
if(adminUSer == "admin"){
    let adminPassword = prompt("enter password");
    if(adminPassword == "master admin"){
        alert("wellcome");
    }
    else if(adminUSer == null||adminPassword==''){
        alert('canceld');}
    else{
        alert("wrong password");
    }
}
else if(adminUSer == null||adminUSer==''){
    alert('canceld');
}
 else{
    alert("i don't know you");
 }   
