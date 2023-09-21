let formId = document.getElementById("userForm");

let fName = document.getElementById("name");
let fEmail = document.getElementById("email");
let fMobile = document.getElementById("mobile");

//to read data from local storage
let users = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : [];

//random id generator
let  genId = () =>{
    return Math.floor(Math.random() *10000);
}


formId.addEventListener("submit", async(e) =>{
    e.preventDefault(); //avoid page refresh

    let data ={
        id: genId(),
        name: fName.value,
        email: fEmail.value,
        mobile: fMobile.value
    };
    console.log('new user', data);
    createUser(data);//new user method call
});

//create a new user
function createUser(user){
    let extEmail = users.find((item) => item.email === user.email);//true = return user Object , false = null
    let extMobile = users.find((item) => item.mobile === user.mobile);

    if(extEmail){
        window.alert(`${user.email} already exists`);
    }else if(extMobile){
        window.alert(`${user.mobile} already exists`);
    }else{
        users.push(user);
        localStorage.setItem("usersData",JSON.stringify(users));
        alert("New user added successfully");
        window.location.href= "index.html";
    }
}