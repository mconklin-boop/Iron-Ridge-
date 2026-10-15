import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop-catalog";
import "./shop.css";
import { departments } from "@/lib/catalog";
export const metadata: Metadata = { title: "Equipment & Supply", description: "Explore shop equipment, air tools, truck and trailer supplies, pumps, generators and maintenance supplies. Request an equipment quote from Iron Ridge Service." };
export default async function ShopPage({ searchParams }: { searchParams: Promise<{ department?: string | string[] }> }) {
 const { department } = await searchParams;
 const initialDepartment = departments.find(value => value === department) ?? "All";
 return <ShopCatalog initialDepartment={initialDepartment} />;
}
