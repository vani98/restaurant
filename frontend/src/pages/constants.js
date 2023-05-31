import { getDataByIds } from "./utils";

const CATEGORIES = {
  ENTRADAS: "entradas",
  PLATOS: "platos",
  INFANTIL: "infantil",
  COMBOS: "combos",
  POSTRES: "postres",
  BEBIDAS: "bebidas",
};

export const PRODUCTS = [
  { name: "Empanada de pollo", price: 200, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.PLATOS },
  {
    name: "Milanesa a la napolitana con guarnicion",
    price: 1650,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.PLATOS,
  },
  {
    name: "Suprema a la napolitana con guarnicion",
    price: 1500,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.PLATOS,
  },
  { name: "Ñoquis", price: 1000, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.PLATOS },
  { name: "Asado con guarnicion", image: "/images/imagen-de-prueba.jpg", price: 2480, category: CATEGORIES.PLATOS },
  { name: "Pepsi 500ml", price: 350, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.BEBIDAS },
  { name: "Agua 500ml", price: 300, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.BEBIDAS },
  { name: "Cerveza artesanal", price: 700, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.BEBIDAS },
  { name: "Seven up 500ml", price: 350, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.BEBIDAS },
  {
    name: "Mini hamburguesa con papas fritas",
    price: 650,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.INFANTIL,
  },
  {
    name: "Mini pizzas de jamón y queso",
    price: 550,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.INFANTIL,
  },
  {
    name: "Pancho con papas fritas",
    price: 600,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.INFANTIL,
  },
  {
    name: "Macarrones con queso",
    price: 650,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.INFANTIL,
  },
  { name: "Chocotorta", price: 400, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.POSTRES },
  { name: "Lemon Pie", price: 350, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.POSTRES },
  { name: "Flan", price: 530, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.POSTRES },
  {
    name: "Panqueques con dulce de leche",
    price: 400,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.POSTRES,
  },
  {
    name: "Entrada de quesos y fiambres para 4 personas",
    price: 3500,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.ENTRADAS,
  },
  {
    name: "Mix de papas para 2 personas",
    price: 2500,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.ENTRADAS,
  },
  {
    name: "Mariscos para 4 personas",
    price: 4300,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.ENTRADAS,
  },
  {
    name: "Brochetas de carne o pollo con salsa criolla para 2 personas",
    price: 2300,
    image: "/images/imagen-de-prueba.jpg",
    category: CATEGORIES.ENTRADAS,
  },
  { name: "Combo 1", price: 2450, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.COMBOS },
  { name: "Combo 2", price: 3200, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.COMBOS },
  { name: "Combo 3", price: 4800, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.COMBOS },
  { name: "Combo 4", price: 6000, image: "/images/imagen-de-prueba.jpg", category: CATEGORIES.COMBOS },
];

export const MOCK_DATA = PRODUCTS.map((i, index) => ({
  ...i,
  id: index,
}));

export const STORES = [
  { name: "Palermo", address: "Av. Cabildo 432", phone: 1123213223 },
  { name: "Recoleta", address: "Junin 322", phone: 1132323233 },
  { name: "Tigre", address: "Arbarellos 789", phone: 1132323232 },
  { name: "San Justo", address: "Mendoza 23", phone: 1123213233 },
  { name: "Mar del plata", address: "Av. Colon 4312", phone: 223232322 },
  { name: "Pinamar", address: "Av. del Mar 1230", phone: 22543234 },
];

export const EVENTS = [
  { name: "Show Musical", store: "Mar del Plata", guest: "Juan Gabriel Perez" },
  { name: "Show de Magia", store: "Palermo", guest: "El mago Tus" },
  {
    name: "Noche de Trivias",
    store: "Tigre",
    guest: "Jorge Roca y Juliana Diaz",
  },
];

const RECOMMENDED_IDS = [1, 4, 2, 3];
const BEST_DEALS_IDS = [2, 12, 9];

export const RECOMMENDED_DATA = getDataByIds(RECOMMENDED_IDS);
export const BEST_DEALS_DATA = getDataByIds(BEST_DEALS_IDS);
