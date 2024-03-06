export interface IProductCategory {
  id: number;
  name: string;
  image: string;
}

export interface IProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: IProductCategory;
  images: string[];
}

export interface IProduct {
  product: IProductResponse[];
  page: number;
}
