
export interface ProductType {
  id: number;
  name: string;
  category: string;
  image: string;
  gallery?: string[];
  shortDescription: string;
  description?: string;
  details?: string[];
}
