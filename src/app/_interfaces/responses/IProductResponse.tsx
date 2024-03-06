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

export interface IProductCategoryCreated {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface IProductResponseCreated {
  title: string;
  price: number;
  description: string;
  images: string[];
  category: IProductCategoryCreated;
  id: number;
  creationAt: string;
  updatedAt: string;
}
