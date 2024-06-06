export type Inventory = {
  createdAt: Date;
  id: string;
  productId: string | null;
  quantityAvailable: number | null;
  updatedAt: Date;
};
