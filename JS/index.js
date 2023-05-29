function init(){
    console.log("onload se ha llamado");

function MenuIzq(links){
    this.links = links;
    this.render = function(){
        let menuIzqDiv = document.getElementById("menuIzq");
        for(const link of this.links){
            menuIzqDiv.innerHTML += 
            ` <ul class="menu">
            <li><a href='${link.url}'>${label}</a></li>
            </ul>`
        
        }
    }
};

function MenuDcha(links){
    this.links = links;
    this.render = function(){
        let menuDerDiv = document.getElementById("menuDcha");
        for(const link of this.links){
            menuDerDiv.innerHTML +=
            `<ul class="menu">
            <li><a href="#">Mi pedido</a></li>
            <li><a href="..//HTML/login.html">Cerrar sesión</a></li>
            </ul>`
        }
    }
};
