function register(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var pnumber = document.getElementById('pnumber').value;
    var idnumber = document.getElementById('idnumber').value;
    var email=document.getElementById('email').value;



    var errorfname= document.getElementById('errorfname');
    var errorlname= document.getElementById('errorlname');
    var errorpnumber= document.getElementById('errorpnumber');
    var erroridnumber= document.getElementById('erroridnumber');
    var erroremail=document.getElementById('erroremail');
    
    var sub= document.getElementById('sub');


    errorfname.innerText = '';
    errorlname.innerText = '';
    errorpnumber.innerText = '';
    erroridnumber.innerText ='';
    erroremail.innerText='';

    if(!validatefname(fname)){
        errorfname.innerText="Name must contain A-Z or a-z only";
        return;
        
    }

    if(!validatelname(lname)){
        errorlname.innerText= "Name must contain A-Z or a-z only";
        return
    }

    if(!validatepnumber(pnumber)) {
        errorpnumber.innerText= "phone number must be atleast 10 characters long!";
        return;
    }
    if(idnumber.length < 6 ) {
        erroridnumber.innerText= "id number must be atleast 6 characters long!";
        return;
    }
    if(!validateemail(email)){
        erroremail.innerText="email must contain @ only";
        return;
    }

    sub.innerText='sign up Successful!';

}
function validatefname(fname) {
    var re = /^[A-Za-z]+$/;
    return re.test(fname);
}
function validatelname(lname) {
    var re = /^[A-Za-z]+$/;
    return re.test(lname);
}
function validatepnumber(pnumber) {
    var re = /^\d{10}$/;
    return re.test(pnumber);
}
function validateemail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


// 
function submi(){
    var fuln=document.getElementById('fuln').value;
    var em=document.getElementById('em').value;
    

    var errorfuln= document.getElementById('errorfuln');
    var errorem= document.getElementById('errorem');

    var submits= document.getElementById('submits');


    errorfuln.innerText = '';
    errorem.innerText = '';

   if(!validatefuln(fuln)){
        errorfuln.innerText="Name must contain A-Z or a-z only";
        return;
        
    }
    
    if(!validateem(em)){
        errorem.innerText="email must contain @ only";
        return;
        
    }
    submits.innerText='Successfully submited!';

    


}   
function validatefuln(fuln) {
    var re = /^[A-Za-z]+$/;
    return re.test(fuln);
}
function validateem(em) {
    var re = /\S+@\S+\.\S+/;
    return re.test(em);
}

   