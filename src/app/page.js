'use client'
import "./globals.css"
import Navbar from "../components/Navbar";
import Main from '../components/Main';
import { useState, useEffect } from "react";
import { WishlistProvider } from './../context/WishListContext'; // Import WishlistProvider
import Footer from './../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched Data:", data);
        setAllProducts(data.products);
      })
      .catch(err => console.log("Error fetching all products:", err))
    .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredProducts(data.products); // Set filtered products based on category
        })
        .catch((err) => console.error("Error fetching category products:", err));
    } else {
      setFilteredProducts(allProducts); // Reset to all products when no category is selected
    }
  }, [selectedCategory, allProducts]); // Removed `allProducts` from dependencies to avoid unnecessary re-fetching

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(selectedCategory ? allProducts.filter(item => item.category === selectedCategory) : allProducts);
    } else {
      setFilteredProducts(allProducts.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory ? item.category === selectedCategory : true)
      ));
    }
  }, [searchQuery, selectedCategory, allProducts]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <WishlistProvider> 
      {/* <Navbar onSearch={handleSearch} />
        <Main onCategoryChange={handleCategoryChange} cardData={filteredProducts} /> */}
        <Footer />
    </WishlistProvider>
    </>
  );
}
