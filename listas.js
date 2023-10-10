let listaProductos = [
  {
    name: "Ropa mujer",
    precio: 250000,
    descripcion: "Short mas blusa",
    img: "imagenes/ropaMujerVerano7.jpg",
  },
  {
    name: "Ropa Hombre",
    precio: 320000,
    descripcion: "Bermuda con camiseta",
    img: "imagenes/ropaHombreVerano.jpg",
  },
  {
    name: "Ropa niños",
    precio: 280000,
    descripcion: "Conjunto",
    img: "imagenes/ropaNiñosVerano.jpg",
  },
  
  
];

function hiceClick(id) {
  console.log("diste click", id);
  eCommerceShop.agregarItem(id);
}
function eliminarClick(id) {
  console.log("diste click", id);
  eCommerceShop.EliminarItem(id);
}

function mostrarProductos() {
  let productosCodigoHTML = "";
  for (let i = 0; i < listaProductos.length; i++) {
    let producto = `<div class="card d-flex" style="width: 18rem">
    <img
      src="${listaProductos[i].img}"
      class="card-img-top d-flex align-self-center"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${listaProductos[i].name}</h5>
      <p class="card-text">
      ${listaProductos[i].descripcion}
      </p>
      <p class="card-text">${listaProductos[i].precio}</p>
      <a href="#" class="btn btn-primary" onclick="hiceClick(${i});">Comprar</a>
    </div>
  </div>`;
    productosCodigoHTML += producto;
  }
  document.getElementById("Catalogo-productos").innerHTML = productosCodigoHTML;
}

mostrarProductos();

let eCommerceShop = new Carrito(listaProductos);



