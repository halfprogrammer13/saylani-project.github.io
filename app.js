let fromdata;
var name;
var gmail;
function newfunction() {

    var info=document.getElementById("info")
    info.innerHTML=name;
    console.log(gmail);
    //console.log(name)
}
function signup() {

    b = document.getElementById("email").value;
    c = document.getElementById("password").value;
    d = document.getElementById("confirmPassword").value;
    var checkdata = true;

    if (c === d) {
        fromdata = JSON.parse(localStorage.getItem("fromdata")) || [];

        for (let i = 0; i < fromdata.length; i++) {
            if (fromdata[i].b === b) {
                alert("you already logged in");
                checkdata = false;
                break;
            }
        }
        if (checkdata) {
            fromdata.push({
                a: document.getElementById("users").value,
                b: document.getElementById("email").value,
                c: document.getElementById("password").value,
                d: document.getElementById("confirmPassword").value,
            });


            localStorage.setItem("fromdata", JSON.stringify(fromdata));
            alert("You successfully signup");
            window.location.href = "login.html";
        }
    }

    else {
        alert("password does not same the confirm password");
    }

}
function logingg() {
    window.location.href = "login.html";
}
function sign() {
    window.location.href = "signup.html";
}
function login() {

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var emailcheck = true;
    var passwordcheck = true;
    fromdata = JSON.parse(localStorage.getItem("fromdata")) || [];


    for (let i = 0; i < fromdata.length; i++) {
        if (fromdata[i].b === email) {
            emailcheck = false;

            if (fromdata[i].c === pass) {
                name=fromdata[i].a;
                gmail=fromdata[i].b;
                console.log(gmail)
                window.location.href = "index.html";
                // window.location.href = "index.html";
                // window.addEventListener("load",()=>{
                //     var info=document.getElementById("info")
                //     info.innerHTML=fromdata[i].a;
                //     console.log()

                // })
                // newfunction(fromdata[i].a);
                // var info=document.getElementById("info").value
                // info.innerHTML=fromdata[i].a
                // console.log(fromdata[i].a,"aagai ")
                passwordcheck = false;
                break;
            }

        }
    }
    if (emailcheck) {
        alert("The email is incorrect");

    }
    else if (passwordcheck) {
        alert("The password is incorrect");
    }
}
var list = document.getElementById("list");



function addlist() {




    var lust = document.getElementById("li")


    var lis = document.getElementById("lis")
    var listing = document.getElementById("listing")


    var li = document.createElement('li')

    var li1 = document.createElement('li')
    li1.setAttribute("class", "aisi")

    var litext = document.createTextNode(lust.value)
    var listext = document.createTextNode(lis.value)
    var listingtext = document.createTextNode(listing.value)





    li.appendChild(litext)
    li1.appendChild(listext)
    li.appendChild(listingtext)

    list.appendChild(li)
    list.appendChild(li1)
    list.appendChild(li)

    document.getElementById("my_form").style.display = "none";
}



function open_form_button1() {
    document.getElementById("my_form").style.display = "flex";

}
function logout() {
    window.location.href = "login.html";
}