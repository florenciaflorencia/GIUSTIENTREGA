const productos=[
    {
        producto: "Bowls",
        color:"pastel",
        codigo:"000001",
        precio: 1005
        
    },
    {
        producto:"Sets Bowls",
        color:"pastel",
        codigo:"000002",
        precio: 5729
    },
    {
        producto:"Moldes de Helado",
        color:"Violeta",
        codigo:"000003",
        precio: 2455
    },
    {
        producto:"Set cubiertos",
        color:"madera",
        codigo:"000004",
        precio: 5250
    },
    {
        producto:"Organizadores",
        color:"Crema",
        codigo:"000005",
        precio: 3544
    }
];

for(const producto of productos){
    console.log(producto.nombre);
    console.log(producto.precio);
}


class producto {
    constructor(producto, precio) {
        this.producto  = producto.toUpperCase();
        this.precio  = parseFloat(precio);
    }
    descuento() {
        this.precio = this.precio * 0.85;
    }
}


