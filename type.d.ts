interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
  discounted: boolean;
  rating: number;
};

type Product = {
  URL: string;
  TITULO: string;
  CATEGORIA: string;
  IMAGEN: string;
  DESCRIPCION: string;
  CARACTERITICAS: string;
  PUBLICADO: boolean;
  STOCK: string;
  PRICE1: number;
  DESCUENTO: string;
  MODALIDAD: string;
  RATING: number;
  "SEO-DESCRIPTION": string;
  id: string;
  CANTIDAD: string;
};

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId: string;
};
