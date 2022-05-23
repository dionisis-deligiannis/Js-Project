function goToLogIn() {
    window.location.href = "http://127.0.0.1:5500/login.html";
}

function goToRegister() {
    window.location.href = "http://127.0.0.1:5500/signin.html";
}
function loggedIn(){
    window.location.href = "http://127.0.0.1:5500/users.html";
    getUsers(1)
}
async function getUsers(page) {

    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();
    renderUsers(data)

}

// async function getUser(id){
//     const response = await fetch (`https://reqres.in/api/users/${id}`);
//     const user = await response.json();
// }

function renderUsers(data) {
    const usersList = data.data;
    console.log(usersList);
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (i = 0; i < usersList.length; i++) {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `<img src="${usersList[i].avatar}">
       <p>${usersList[i].first_name} ${usersList[i].last_name}</p>`
        container.appendChild(card)


    }


}

async function signIn() {

    try {
        const email = document.getElementById("sign-email").value;
        const pass = document.getElementById("sign-pass").value;
        
        const response = await fetch('https://reqres.in/api/register', {
            method: "POST",
            mode:"no-cors",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        });
        const data = await response.json();
    } catch (e) {
        console.log(e)
        alert("User exist please login")
    }
}