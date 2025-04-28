"use client"

import { useState } from "react"
 
type FilterCategory = {
  id: string
  name: string
  options: string[]
  expanded: boolean
}

export default function FilterSidebar() {
  const [filterCategories, setFilterCategories] = useState<FilterCategory[]>([
    
    {
      id: "ideal-for",
      name: "IDEAL FOR",
      options: ["All", "Men", "Women", "Children"],
      expanded: true,
    },
    {
      id: "occasion",
      name: "OCCASION",
      options: ["All", "Casual", "Formal", "Sport"],
      expanded: true,
    },
    {
      id: "work",
      name: "WORK",
      options: ["All", "Office", "Outdoor", "Travel"],
      expanded: true,
    },
    {
      id: "fabric",
      name: "FABRIC",
      options: ["All", "Cotton", "Leather", "Synthetic"],
      expanded: true,
    },
    {
      id: "segment",
      name: "SEGMENT",
      options: ["All", "Bags", "Accessories", "Toys"],
      expanded: true,
    },
    {
      id: "suitable-for",
      name: "SUITABLE FOR",
      options: ["All", "Adults", "Kids", "Pets"],
      expanded: true,
    },
    {
      id: "raw-materials",
      name: "RAW MATERIALS",
      options: ["All", "Recycled", "Organic", "Sustainable"],
      expanded: true,
    },
    {
      id: "pattern",
      name: "PATTERN",
      options: ["All", "Solid", "Printed", "Textured"],
      expanded: true,
    },
  ])

  const [isCustomizable, setIsCustomizable] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({
    "ideal-for": "All",
    occasion: "All",
    work: "All",
    fabric: "All",
    segment: "All",
    "suitable-for": "All",
    "raw-materials": "All",
    pattern: "All",
  })

  const toggleCategory = (categoryId: string) => {
    setFilterCategories((categories) =>
      categories.map((category) =>
        category.id === categoryId ? { ...category, expanded: !category.expanded } : category,
      ),
    )
  }

  const handleCustomizableChange = () => {
    setIsCustomizable(!isCustomizable)
  }

  const handleOptionSelect = (categoryId: string, option: string,isCustomizable:boolean) => {
    if(!isCustomizable) {
        
        return
    }
    setSelectedOptions({
      ...selectedOptions,
      [categoryId]: option,
    })
  }

  return (
    <div className="filter-sidebar-inner">
        
      <div className="filter-header">
        <h2 className="filter-title">FILTER</h2>
      </div>
      <div className="checkbox-option">
                    <input
                      type="checkbox"
                      id="customizable-option"
                      className="filter-checkbox"
                      checked={isCustomizable}
                      onChange={handleCustomizableChange}
                    />
                    <label htmlFor="customizable-option">CUSTOMIZABLE</label>
                  </div>
      <div className="filter-categories">
        {filterCategories?.map((category) => (
          <div key={category.id} className="filter-category">
            
            <button
              className="category-header"
              onClick={() => toggleCategory(category.id)}
              aria-expanded={!category.expanded}
            >


              <span className="category-name">{category.name}
                </span> 

                <svg
                className={`category-icon ${(category.expanded) ? "expanded" : ""}`}
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
             
             
            </button>
            <span >All</span>
            {!category.expanded && (
              <div className="category-options">


                {category.id &&  (
                  <ul className="options-list">
                    {category.options.map((option) => (


               <div className="checkbox-option" key={option}>
                    <input
                      type="checkbox"
                      id={`${category.id}-${option}`}
                      className="filter-checkbox"
                      checked={selectedOptions[category.id]===option}
                      onChange={() => handleOptionSelect(category.id, option,isCustomizable)}
                    />
                    <label htmlFor={`${category.id}-${option}`}>{option}</label>
                  </div>
                     
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
