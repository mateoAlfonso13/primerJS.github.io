let mail = prompt("Ingrese un mail donde recibir los cuadros")

let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
    alert("Tienes la edad suficiente para comprar los cuadros")
    let producto = prompt("Ingrese el cuadro que desea comprar : La Gioconda, Hombre de Vitruvio ( s para salir)");
    while (producto != "s") {
        switch (producto) {
            case "La Gioconda":
                alert("La Gioconda esta valorada en 2500 USD$");
                break;
            case "Hombre de Vitruvio":
                alert("El Hombre de Vitruvio esta valorado en 1000 USD$");
                break;    
            default:
                alert("Cuadro no disponible");
                break;
        }
        producto = prompt("ingrese el producto que desa comprar : producto1, producto2, producto3 (s para salir)")
    }
}else{
    alert("Tienes que ser mayor de edad para comprar estos cuadros digitales")
}