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

  const divCard = document.getElementById("tarjetas");

  for (const item of productos) {
    divCard.innerHTML += `
  
      <div class="card">
                  <img src="${item.imagen}" alt="maqueta1"/>
                      <div class="contenido-producto">
                          <div class="card-titulo">
                              <h5>"${item.nombre}"</h5>
                      <div class="precio">"${item.precio}"<i class="bi bi-currency-euro main-color"></i>
                      </div>
                      </div>
                          <div class="rating">
                          <i class="bi bi-star-fill main-color"></i>
                          <i class="bi bi-star-fill main-color" ></i>            
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>            
                          </div>
  
                      <p>"${item.descripcion1}"</p>
                      <p>"${item.descripcion2}"</p>
                      </div>
  
                          <div class="card-actions">
                          <button type="button" class="button anadir">Añadir al carrito</button>
                          <a href="../HTML/producto.html"class="button button-secundario">Ver</a>    
                          </div>
          
              </div> `;
  }
}

const productos = [
  {
    imagen: "../assets/images/maqueta1.jpg",
    nombre: "Maqueta 1",
    precio: 1790.0,
    descripcion1: "Maqueta de 6 habitaciones 2 niveles 2 plazas de garaje",
    descripcion2: "Esta maqueta es personalizable",
  },

  {
    imagen: "../assets/images/maqueta2.jpg",
    nombre: "Maqueta 2",
    precio: 1850.0,
    descripcion1: "Maqueta de 4 habitaciones 2 niveles 1 plaza de garaje",
    descripcion2: "Esta maqueta es personalizable",
  },

  {
    imagen: "../assets/images/maqueta1.jpg",
    nombre: "Maqueta 3",
    precio: 1760.0,
    descripcion1: "Maqueta de 3 habitaciones 2 niveles 2 plazas de garaje",
    descripcion2: "Esta maqueta es personalizable",
  },
];
