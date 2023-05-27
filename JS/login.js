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
        divContainer.innerHTML = `<p style="color:red;">Contraseña no válida.</p>`
      }
  }