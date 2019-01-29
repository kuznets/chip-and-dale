export interface Cart {
  products: any;
  uid: string;
  count: number;
  amount_order?: number;
  _id: string;
  price: number;
  total_price: number;
  description?: string;
}
