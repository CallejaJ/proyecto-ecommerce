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
