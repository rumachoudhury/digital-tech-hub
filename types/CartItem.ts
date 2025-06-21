export interface CartItem {
  title: string;
  price: string | number; //allow both string and number
  description: string;
  image: string;
  img?: string;
  category?: string;
}
