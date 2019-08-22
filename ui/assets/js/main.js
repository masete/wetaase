function login(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "" && password ==""){

        document.getElementById("msg").innerHTML = "Please Fill All Fields !";

    }else if(username == ""){

        document.getElementById("msg").innerHTML = "Username shoould not be left empty";
    
    }else if(password == ""){

        document.getElementById("msg").innerHTML = "Password should not be left empty";

    }else{


        if(username == "admin" && password =="12345"){

            window.location.href = "admin.html";
    
           
        }else if(username == "user" && password == "12345"){
    
            window.location.href = "create.html"; 
    
        }

    }
}