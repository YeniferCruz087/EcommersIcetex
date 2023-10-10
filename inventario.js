
const inventario = {
    productos: [
      {
        nombre: "Producto1",
        cantidad: 40,
      },
      {
        nombre: "Producto2",
        cantidad: 15,
      },
    ],
  };
  
  function agregarProductoAlCarrito(producto) {
    inventario.productos[producto.id].cantidad--;
  }

  
  function eliminarProductoDelCarrito(producto) {
    inventario.productos[producto.id].cantidad++;
  }

  function totalInventario(agregarProductoAlCarrito,eliminarProductoDelCarrito){

    let total= agregarProductoAlCarrito -eliminarProductoDelCarrito;
    return total

  }






  



  

