function inicializar(){
    console.log("onload se ha llamado");
const divCard = document.getElementById("card")

for(const item of productos){
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
        
            </div> `
        }

}

const productos = [
    {
        imagen: "../assets/images/maqueta1.jpg",
        nombre: "Maqueta 1",
        precio: 1790.00,
        descripcion1: "Maqueta de 6 habitaciones 2 niveles 2 plazas de garaje",
        descripcion2: "Esta maqueta es personalizable",
    },

    {
        imagen: "../assets/images/maqueta2.jpg",
        nombre: "Maqueta 2",
        precio: 1850.00,
        descripcion1: "Maqueta de 4 habitaciones 2 niveles 1 plaza de garaje",
        descripcion2: "Esta maqueta es personalizable",
    },

    {
        imagen: "../assets/images/maqueta1.jpg",
        nombre: "Maqueta 3",
        precio: 1760.00,
        descripcion1: "Maqueta de 3 habitaciones 2 niveles 2 plazas de garaje",
        descripcion2: "Esta maqueta es personalizable",
    }
]

function login(){
    console.log("Boton login clickado");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const divContainer = document.getElementById("login");


    if(email === "koke@gmail.com" && password === "1234"){
        console.log("usuario logueado");
        divContainer.innerHTML = `<p style="color:green;">Usuario logueado.</p>`            
    }
    else if(email !== "koke@gmail.com" && password === "1234"){
        console.log("usuario no valido");
        divContainer.innerHTML = `<p style="color:red;">Usuario no válido.</p>`
      }
      else if(email === "koke@gmail.com" && password !== "1234"){
        console.log("usuario no valido");
        divContainer.innerHTML = `<p style="color:red;">Conttraseña no válida.</p>`
      }
  }