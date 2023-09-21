
let userInfo = document.getElementById('userInfo');

let users = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) :[];
//let users = JSON.parse(localStorage.getItem("usersData")) || [];

const deleteUser =async(id) =>{
    console.log('id',id);
    let index = users.findIndex( item => item.id == id);
    console.log('index',index);
     
    if(window.confirm(`Are you sure you want to delete user id ${id}`)){
        users.splice(index, 1);
        localStorage.setItem("usersData",JSON.stringify(users));
        alert("user info deleted successfully");
        window.location.reload();
    } else{
        return ;
    }

};

const printData = (users) =>{
     users.forEach(item  => {
      userInfo.innerHTML += `<tr class = "center">
                         <td> ${item.id}</td>
                         <td> ${item.name}</td>
                         <td> ${item.email}</td>
                         <td> ${item.mobile}</td>
                         <td class = "btn-group">
                         <a href="update.html?id=${item.id}" class="btn btn-info">Edit</a>
                         <button onclick="deleteUser(${item.id})" class = "btn btn-danger">Delete</button>
                         </td>
                    </tr>`;
    });
}



(function (){
  

console.log('users', users);
printData(users);
})()