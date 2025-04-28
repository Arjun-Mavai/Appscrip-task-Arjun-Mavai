"use client"

import type React from "react"

import { useState,  useMemo } from "react"
import FilterSidebar from "./filter-sidebar"
import ProductCard from "./product-cart"
 
type Product = {
  id: number
  title: string
  price: number
  image: string
  category: string
  description: string
  isNew?: boolean
  isOutOfStock?: boolean
}

type ProductListingProps = {
  products: Product[]
}
type SortOption = "recommended" | "newest" | "popular" | "price-low" | "price-high" | "name-asc" | "name-desc"

export default function ProductListing({ products }: ProductListingProps) {
  const [showFilter, setShowFilter] = useState(true)
  const [sortOption, setSortOption] = useState<SortOption>("recommended")
 
 

 

  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption)
  }

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name-asc":
          return a.title.localeCompare(b.title)
        case "name-desc":
          return b.title.localeCompare(a.title)
        case "newest":
          return b.id - a.id
        case "popular":
          return b.price - a.price
        default:
          return 0
      }
    })
  }, [products, sortOption])

  return (
    <section className="product-listing-section">
      <div className="container">
        <h1 className="page-title">DISCOVER OUR PRODUCTS</h1>
        <p className="page-description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh
          amet mi ut elementum dolor.
        </p>


        <div className="product-controls">
            
              <div className="product-count">
                <span className="span-gap">{products.length} ITEMS</span>
                <svg fill="#000000" width="20px" height="20px" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"></path></g></svg>
                <button className="filter-toggle" onClick={toggleFilter}>
                  {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
                </button>
              </div>

              <div className="filter-controls">
                 

                <div className="sort-dropdown">
                  <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="sort-select"
                    aria-label="Sort products"
                  >
                    <option value="recommended">RECOMMENDED</option>
                    <option value="newest">NEWEST FIRST</option>
                    <option value="popular">POPULAR</option>
                    <option value="price-low">PRICE: LOW TO HIGH</option>
                    <option value="price-high">PRICE: HIGH TO LOW</option>
                  </select>
                  <svg
                    className="dropdown-arrow"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>

              </div>
            </div>

        <div className="product-listing-container">
         {showFilter && <div className={`filter-sidebar ${showFilter ? "show" : "hide"}`}>
            <FilterSidebar />
          </div>}

          <div className="product-grid-container">
           

            <div className="product-grid">
              {sortedProducts.map((product,index) => (
                <ProductCard key={product.id} product={product}  prior={index < 6}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
