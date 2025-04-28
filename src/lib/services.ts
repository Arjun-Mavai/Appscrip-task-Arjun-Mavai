export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products" 
    )

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    const products = await response.json()

    // Map the API response to our product structure
    return products.map((product: any) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description,
      isNew: Math.random() > 0.8,  
      isOutOfStock: Math.random() > 0.9,  
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}