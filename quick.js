let users=[];


function Userexist()
{
    let alert=document.getElementById('alert-danger');
    alert.classList.remove('alert');
    alert.classList.add('alert-danger');

    setTimeout(()=>{
        alert.classList.remove('alert-danger');
        alert.classList.add('alert');
    },2000)
}

function UserAdded()
{
    let alert=document.getElementById('alert-success')
    alert.classList.remove('alert');
    alert.classList.add('alert-success')

    setTimeout(()=>{
        alert.classList.add('alert');
        alert.classList.remove('alert-success');
    },2000);
}

function Adduser(user)
{
    let checkuser=users.filter((userpresent)=>{
        return userpresent.email==user.email;
    })

    if(checkuser.length==0)
    {
        users.push(user);
        UserAdded();
    }
    else
    {
        Userexist();
    }
}
function displayusers()
{   
    let usercontainer=document.getElementById('users');
    usercontainer.innerHTML="";
    users.map((input)=>{
        let Userdiv=document.createElement('div');
        Userdiv.classList.add('user');
        let nameelement=document.createElement('p');
        nameelement.innerText=input.name;
        let emailelement=document.createElement('p');
        emailelement.innerText=input.email;
        let cityelement=document.createElement('p');
        cityelement.innerText=input.city;

        usercontainer.appendChild(Userdiv);
        Userdiv.appendChild(nameelement);
        Userdiv.appendChild(emailelement);
        Userdiv.appendChild(cityelement);
    })
}
function add()
{
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let centers=['Ahmedabad','Delhi','Mumbai','pune','Nagpur','Banglaore'];
    let city=centers[Math.floor(Math.random()*centers.length)];

    let user = {
        name: name.value,
        email: email.value,
        city: city,
    }

    Adduser(user);
    displayusers();
    console.log(users);
}
