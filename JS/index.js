function inicializar(){
    console.log("onload se ha llamado");

    const menuIzq = new MenuIzq([
        {url: "producto.html", label: "Productos"},
        {url: "quienesomos.html", label: "Que hacemos"},
        {url: "garantia.html", label: "Garantía"},
        ]);

    const menuDcha = new MenuDcha([
        {url: "carrito.html", label: "Mi pedido"},
        {url: "login.html", label: "Cerrar sesión"},
    ])

    menuIzq.render();
    menuDcha.render();
}

function MenuIzq(links){
    this.links = links;
    this.render = function(){

        let menuIzqDiv = document.getElementById("menuIzq");
        menuIzqDiv.innerHTML = "<ul>";
        for(const link of this.links){
            menuIzqDiv.innerHTML += 
            `<li class="menu"><a href='${link.url}'>${link.label}</a></li> `
        }
    }
};

function MenuDcha(links){
    this.links = links;
    this.render = function(){
        let menuDchaDiv = document.getElementById("menuDcha");
        for(const link of this.links){
            menuDchaDiv.innerHTML +=
            `<ul class="menu">
            <li><a href='${link.url}'>${link.label}</a></li>
            </ul>`
        }
    }
};
