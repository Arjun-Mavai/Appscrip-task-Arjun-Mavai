"use client"
import { useQuery } from "@tanstack/react-query";
import Footer from "./footer";
import Header from "./header";
import ProductListing from "./product-listing";
import { getProducts } from "@/lib/services";

export default function Home() {
 
    const { data: products } = useQuery({
        queryKey: ["product-images"],
        queryFn: () => getProducts(),
      });
    
  
    return (
      <main>
        <Header />
        <ProductListing products={products} />
        <Footer />
      </main>
    )
  }