interface Caracteristica {
  tipo: string,
  value: string
}
export default interface Product {
  name: string,
  category: string,
  image: string,
  descripcion: string,
  price: number,
  caracteristicas: Caracteristica[]
}

export const ProductsExamples: Product[] = [
  {
    name: "Castillo 5x4",
    category: "Inflables",
    descripcion: "Inflables para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/products/Castillo 5x4.png",
    price: Math.random()*1000+1500,
    caracteristicas: [
      { tipo: "Alto", value: "4m"},
      { tipo: "Ancho", value: "5m"},
      { tipo: "Largo", value: "4m"}
    ]
  },{
    name: "Castillo 4x3",
    category: "Inflables",
    descripcion: "Inflables para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/products/Castillo 4x3.png",
    price: Math.random()*1000+1500,
    caracteristicas: [
      { tipo: "Alto", value: "4m"},
      { tipo: "Ancho", value: "4m"},
      { tipo: "Largo", value: "3m"}
    ]
  },{
    name: "Ring 3x2",
    category: "Inflables",
    descripcion: "Inflables para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/products/Ring 3x2.png",
    price: Math.random()*1000+1500,
    caracteristicas: [
      { tipo: "Alto", value: "4m"},
      { tipo: "Ancho", value: "3m"},
      { tipo: "Largo", value: "2m"}
    ]
  },{
    name: "Metegol",
    category: "Salon",
    descripcion: "Salon para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/products/Metegol.png",
    price: Math.random()*1000+1500,
    caracteristicas: [
      { tipo: "Alto", value: "1m"},
      { tipo: "Ancho", value: "40cm"},
      { tipo: "Largo", value: "70cm"}
    ]
  },{
    name: "Tejo",
    category: "Salon",
    descripcion: "Salon para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/products/Tejo.png",
    price: Math.random()*1000+1500,
    caracteristicas: [
      { tipo: "Alto", value: "1m"},
      { tipo: "Ancho", value: "50cm"},
      { tipo: "Largo", value: "70cm"}
    ]
  },{
    name: "Ping Pong",
    category: "Salon",
    descripcion: "Salon para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/products/Ping Pong.png",
    price: Math.random()*1000+1500,
    caracteristicas: [
      { tipo: "Alto", value: "1m"},
      { tipo: "Ancho", value: "150cm"},
      { tipo: "Largo", value: "300cm"}
    ]
  },{
    name: "Videojuegos",
    category: "Videojuegos",
    descripcion: "Electronicos para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/products/Videojuegos.png",
    price: Math.random()*1000+1500,
    caracteristicas: [
      { tipo: "Alto", value: "4m"},
      { tipo: "Ancho", value: "40cm"},
      { tipo: "Largo", value: "70cm"}
    ]
  },
] 