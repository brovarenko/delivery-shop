export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type Shop = {
  id: number;
  name: string;
};
