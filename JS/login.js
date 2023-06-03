// Declaro las variables y así son accesibles globalmente 

    let loginForm;
    let registrationForm;


function inicializar() {
  console.log("onload se ha llamado");

  const menu = new Menu([
    { url: "producto.html", label: "Productos" },
    { url: "quienesomos.html", label: "Equipo" },
    { url: "garantia.html", label: "Garantía" },
    { url: "#", label: "Mi pedido" },
    { url: "login.html", label: "Cerrar sesión" },
  ]);

  menu.render();

// Es una instancia a un nuevo formulario

loginForm = new LoginForm();
registrationForm = new RegistrationForm();

// Es la función de renderizado del formulario de login
  loginForm.render();
  registrationForm.render();

} // cierre del evento inicializar

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

function RegistrationForm(){
 (this.render = function (){
  const registrationFormDiv = document.getElementById("registration-form");
  registrationFormDiv.innerHTML = 
  `
  <form> 
    <h3>Regístrate</h3>
    <p>Crea tu cuenta en 3DREAMS para guardar tus progresos.</p>
    <input type="name" id="name" name="nombre" placeholder="Nombre"/>
        <input type="surname" id="surname" name="apellidos" placeholder="Apellidos"/>
        <input type="text" required id="email" name="email" placeholder="Escribe tu e-mail"/>
        <input type="password" id="password1" name="contraseña" placeholder="Contraseña"/>
        <input type="password" id="password2" name="contraseña" placeholder="Repite tu contraseña"/>
        <button class="button" onclick = "registrationForm.register()" id="btn" >Registrarme</button>
    </form> 
    `;
    const divButton = document.getElementById("btn");
    divButton.addEventListener("click", this.register);
 }),  // cierre del método renderizado-impresión
      // el método de recogida de datos en la ventana

 (this.register = function (){
      const name = document.getElementById("name").value;
      const surname = document.getElementById("surname").value;
      const email = document.getElementById("email").value;
      const password1 = document.getElementById("password1").value;
      const password2 = document.getElementById("password2").value;
      const divContainer = document.getElementById("registration-form");

      const local = window.localStorage;

      // En esta linea se hacen los siguientes pasos:
      // local.getItem captura de los usuarios registrados en cadena de texto string
      // JSON.parse convierte la cadena de texto en un objeto de javascript
      // si la tablaUsers está vacía utiliza un array vacío
      // lo guarda todo temporalmente en la variable users

      let tablaUsers = JSON.parse(local.getItem("tablaUsers")) || [];

      // let tablaUsersDeLocalStorageEnString = local.getItem("tablaUsers");
      // let tablaUsersEnObjetoJavascript = JSON.parse(tablaUsersDeLocalStorageEnString);
      // let tablaUsers;
      // if (tablaUsersEnObjetoJavascript) {
      //     tablaUsers = tablaUsersEnObjetoJavascript;
      // } else {
      //     tablaUsers = [];
      // }

      // condicionales para verificar los datos introducidos por ventana

      // condicionales de respuesta al interactuar con el visitante
      // declaro la variable usuario repetido para que la compruebe en
      // un bucle que recorra el array de objetos

      let usuarioRepetido = false;
      for (let i=0; i< tablaUsers.length; i++){
        if(tablaUsers[i].email === email){
          usuarioRepetido = true;
        }
      };

      if(usuarioRepetido){
        const userRepeat  = document.getElementById("regustration-failed")

      }
 })
}

function Menu(links) {
  this.links = links;
  this.render = function () {
    let menuDiv = document.getElementById("menu");
    menuDiv.innerHTML = "";
    menuDiv.innerHTML = `
                  <div class="col-izq">
                      <ul class="menu">
                          <li><a href="..//HTML/producto.html">Productos</a></li>
                          <li><a href="..//HTML/quienesomos.html">Equipo</a></li>
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
