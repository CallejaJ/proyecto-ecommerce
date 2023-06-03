// Declaro las variables y así son accesibles globalmente 

    let loginForm;
    let registrationForm;


function inicializar() {
  console.log("onload se ha llamado");

  const menu = new Menu([
    { url: "producto.html", label: "Productos" },
    { url: "quienesomos.html", label: "Que hacemos" },
    { url: "garantia.html", label: "Garantía" },
    { url: "#", label: "Mi pedido" },
    { url: "login.html", label: "Cerrar sesión" },
  ]);

  menu.render();

// Es una instancia a un nuevo formulario

loginForm = new LoginForm();

// Es la función de renderizado del formulario de login
  loginForm.render();
}

// cierre del evento inicializar

function LoginForm(){
this.render = function (){
  const loginFormDiv = document.getElementById("formulario-login");
  loginFormDiv.innerHTML = `
  
        <h3>Iniciar sesion</h3>
        <p>Accede con tus datos anteriores</p>
        <input type="email" id="email" name="email" placeholder="E-mail"/>
        <input type="password" id="password" name="contraseña" placeholder="Contraseña"/>
        <button class="button" onclick = "loginForm.login()">Iniciar sesión</button>
  `;
  }; // cierre del método de renderizado del formulario login

  // Método para loguearse

  this.login = function () {
    // variables locales del método login:

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const divContainer = document.getElementById("formulario-login");

    let usuarioRegistrado = null;
    const local = window.localStorage;

    let tablaUsers = JSON.parse(local.getItem("tablaUsers"));
    
    
    for(let i=0; i< tablaUsers.length; i++){
      if(tablaUsers[i].email == email){
        usuarioRegistrado = tablaUsers[i];
        } // bucle que recorre el almacen local
          
      } // cierre del bucle for

    if(usuarioRegistrado !== null){
      if(password == usuarioRegistrado.password){
      // happy path 
      console.log("usuario logueado");
      local.setItem("usuarioLogueado", JSON.stringify(usuarioRegistrado));
      window.location = "index.html";
      }
      else if (password !== usuarioRegistrado.password){
        console.log("unknown user");
        const emailUnknown = document.getElementById("login-failed");
        emailUnknown.innerHTML = `Contraseña incorrecta. Inténtalo de nuevo.`
      }
    } // cierre de la verificación de contraseña
  } // cierre del método para loguearse "login"
} // cierre de la clase LoginForm


function Menu(links) {
  this.links = links;
  this.render = function () {
    let menuDiv = document.getElementById("menu");
    menuDiv.innerHTML = "";
    menuDiv.innerHTML = `
                  <div class="col-izq">
                      <ul class="menu">
                          <li><a href="..//HTML/producto.html">Productos</a></li>
                          <li><a href="..//HTML/quienesomos.html">Quienes somos</a></li>
                          <li><a href="../HTML/garantia.html">Garantía</a></li>
                          </ul>
                  </div>
                  <div class="col-der">
                      <ul class="menu">
                          <li><a href="#">Mi pedido</a></li>
                          <li><a href="..//HTML/login.html">Cerrar sesión</a></li>
                      </ul>
                  </div>`;
  };
}
