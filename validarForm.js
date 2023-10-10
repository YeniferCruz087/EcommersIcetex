function validarFormulario() {
    const contraseña = document.querySelector("input[name='password']").value;
  
    // Validamos la contraseña
    if (!validarContraseña(contraseña)) {
      // Mostramos un mensaje de error
      alert("La contraseña debe tener al menos 8 caracteres");
      return false;
    }
  
    // Si la contraseña es válida, devolvemos true
    return true;
  }