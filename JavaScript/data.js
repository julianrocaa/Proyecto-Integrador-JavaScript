
const prendasRopa = [
  {
    id: 1,
    nombre: "T-SHIRT LOUD®",
    precio: "$5.000",
    category: "Remeras",
    productImg: "/assets/productos/remera-1.png",
  },
  {
    id: 2,
    nombre: "HOODIE L-STAR®",
    precio: "$10.000",
    category: "Buzos",
    productImg: "/assets/productos/hoodie-1.png",
  },
  {
    id: 3,
    nombre: "HOODIE BLACKSTAR®",
    precio: "$10.000",
    category: "Buzos",
    productImg: "/assets/productos/hoodie-2.png",
  },
  {
    id: 4,
    nombre: "HOODIE LOUD®",
    precio: "$10.000",
    category: "Buzos",
    productImg: "/assets/productos/hoodie-3.png",
  },
  {
    id: 5,
    nombre: "SOCKS L-STAR®",
    precio: "$1.000",
    category: "Accesorios",
    productImg: "/assets/productos/medias-1.png",
  },
  {
    id: 6,
    nombre: "TOTEBAG LOUD®",
    precio: "$2000",
    category: "Accesorios",
    productImg: "/assets/productos/tote-bag-2.png",
  },
  
];

const DivideProductsInParts = (size) => {
  let productsList = [];
  for (let i = 0; i < prendasRopa.length; i += size)
    productsList.push(prendasRopa.slice(i, i + size));
  return productsList;
};

const appState = {
  products: DivideProductsInParts(6),
  currentProductsIndex: 0,
  productsLimit: DivideProductsInParts(6).length,
  activeFilter: null,
};

