
// login 
let iuser = 'probando@gmail.com';
let ipass = '321654987';

window.onload = function(){
    logedIn();
    carrito();
  
}


function login(){
    let usuario = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    console.log(typeof(usuario));
    console.log(typeof(password));
    
    if (usuario===iuser && password === ipass){
        sessionStorage.setItem('user',usuario);
        sessionStorage.setItem('password',password);
        window.location.replace('index.html');   
    }
    else if (usuario ==='' && password ===''){
        let b = document.getElementById('modal');
        let c = document.getElementById('corrobore')
        c.innerHTML = 'Ingrese Usuario y Contraseña'
        b.style.display = 'block';
        }
    else{
        let b = document.getElementById('modal');
        let c = document.getElementById('corrobore')
        c.innerHTML = 'Corrobore Usuario y Contraseña'
        b.style.display = 'block'; 
    }

    } 

function logedIn(){
    if (sessionStorage.user !== undefined){
    let a = document.getElementById('log');
    let loginreplaced = document.createElement('li');
    loginreplaced.setAttribute('class',"nav-item dropdown");
    loginreplaced.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    `+sessionStorage.user+`</a>    
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="cart-list.html">Mi Carrito</a>
    <a class="dropdown-item" href="#">Cuenta</a>
    <a class="dropdown-item" href="#" onclick = 'LogOut()'>Salir</a>`
    a.replaceChild(loginreplaced, a.childNodes[9]);
    } 
}

function LogOut(){
    sessionStorage.clear();
    window.location.replace('index.html');
}

function modalclose() {
    let b = document.getElementById('modal');
    b.style.display = 'none'; 
}