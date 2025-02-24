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

type CheckoutFormData = {
  fullName: string;
  documentId: string;
  region: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  createdAt: string;
  uniqueCode: string;
};
