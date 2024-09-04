let pass = document.getElementById("password");
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

function generate(){
    pass.value = "";

    for(let i = 0; i < 12; i++){
        let random = Math.floor(Math.random() * str.length);
        pass.value += str[random];
    }
}

function copy(){
    let copyPassword = document.getElementById("password");
    copyPassword.select();
    document.execCommand("copy");

    alert("Password copied to the clipboard!")
}