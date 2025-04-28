"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type ProductCardProps = {
  product: {
    id: number
    title: string
    price: number
    image: string
    isNew?: boolean
    isOutOfStock?: boolean
    
  },
  prior?:boolean
}

export default function ProductCard({ product,prior }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }
 
  const formatProductName = (name: string) => {
    return name.length > 20 ? name.substring(0, 20) + "..." : name
  }

  return (
    <div className="product-card">
      <Link href="#" className="product-link">
        <div className="product-image-container">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={300}
            height={300}
            className="product-image"
            priority={ prior}
            loading={ prior ? "eager" : "lazy"}
          />

          {product.isNew && <div className="product-badge new">NEW PRODUCT</div>}

          {product.isOutOfStock && <div className="product-badge out-of-stock">OUT OF STOCK</div>}
        </div>

        <div className="product-info">
          <h2 className="product-title">{formatProductName(product.title)}</h2>
       <div className="cd">
       <div className="kk">
             Sign in  or Create an account  to see pricing
          </div>

          <button
        // className={`wishlist-button ${isWishlisted ? "active" : ""}`}
        onClick={toggleWishlist}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={isWishlisted ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>


       </div>
        </div>
      </Link>

     
    </div>
  )
}
