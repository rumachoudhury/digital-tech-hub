// export interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   rating: number;
//   img: string;
//   badge?: string;
//   badgeColor?: string;
// }

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  img: string;
  category: string;
  badge?: string;
  badgeColor?: string;
}
