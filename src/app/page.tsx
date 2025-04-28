// import Footer from "@/components/footer"
// import Header from "@/components/header"
// import ProductListing from "@/components/product-listing"
 import Home from "@/components/home";
import { getProducts } from "@/lib/services";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const PostsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["product-images"],
    queryFn: getProducts,
  });
 
  return (

    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
};
export default PostsPage;