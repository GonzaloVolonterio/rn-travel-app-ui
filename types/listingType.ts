import { ReactNode } from "react";

export interface ListingType {
  [x: string]: ReactNode;
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  category: string;
}