export default interface Category {
  image: string,
  name: string,
  descripcion: string,
  subTitle: string
}

export const CategoriesExamples: Category[] = [
  {
    name: "Inflables",
    subTitle: "Alquiler de Juegos Infantiles para Cumpleaños",
    descripcion: "Inflables para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/categories/Inflables.png",
  }, {
    name: "Salon",
    subTitle: "Juegos de Salón",
    descripcion: "Salon para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/categories/Salon.png",
  }, {
    name: "Videojuegos",
    subTitle: "Video Juegos y otras variedades",
    descripcion: "Electronicos para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/categories/Juegos.png",
  }, {
    name: "Juegos Inflables",
    subTitle: "Juegos Inflables para competencias",
    descripcion: "Electronicos para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/categories/Juegos Inflables.png",
  }, {
    name: "Empresas",
    subTitle: "Para eventos Empresariales",
    descripcion: "Electronicos para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/categories/Empresas.png",
  }, {
    name: "Personales",
    subTitle: "Para eventos Personales",
    descripcion: "Electronicos para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/categories/Personales.png",
  }, {
    name: "Promociones",
    subTitle: "Combos con precios especiales",
    descripcion: "Electronicos para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/categories/Promociones.png",
  }, {
    name: "Para los mas chicos",
    subTitle: "Alquiler de Juegos para los mas pequeños",
    descripcion: "Electronicos para todos los que quieran jugar todo lo que quieran",
    image: "/statics/imagens/categories/Pequeños.png",
  },
]