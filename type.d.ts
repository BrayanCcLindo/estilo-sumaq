interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type ProductDetail = {
  Material?: string;
  Colores?: string;
  Dimensiones?: string;
  Peso?: string;
  Compartimientos?: string;
  Correas?: string;
};

type Product = {
  slug: string;
  title: string;
  category: string;
  description: string;
  published: boolean;
  price: number;
  offer: boolean;
  rating: number;
  id: string;
  imagen: string;
  detalles: ProductDetail[];
  quantity: number;
};

type contactType = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
