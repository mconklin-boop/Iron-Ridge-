import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop-catalog";
import "./shop.css";
export const metadata: Metadata = { title: "Equipment & Supply", description: "Explore shop equipment, air tools, truck and trailer supplies, pumps, generators and maintenance supplies. Request an equipment quote from Iron Ridge Service." };
export default function ShopPage() { return <ShopCatalog />; }
