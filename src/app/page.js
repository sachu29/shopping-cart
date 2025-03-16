'use client'
import "./globals.css"
import Navbar from "../components/Navbar";
import Main from '../components/Main';
import { useState, useEffect } from "react";
import { WishlistProvider } from './../context/WishListContext'; 
import Footer from './../components/Footer';
import { fetchCategory, fetchProducts } from "./common";
import { Pagination } from 'antd';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(24);
  const [totalProducts, setTotalProducts] = useState(0);

  async function fetchAllProducts (query) {
    try{
      const data = await fetchProducts({query:query}); 

      setAllProducts(data.products);
      setFilteredProducts(data.products);
      setTotalProducts(data.total);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }catch(err){
      console.error(err)
    }
  }

  useEffect( () => {;
    if(allProducts.length === 0){
      fetchAllProducts('?limit=24&skip=0');
    }
  },[]);

  const handleSearch = async(search) => {
    
    setSearchQuery(search);
    setSelectedCategory(null);

    let query = `${search ? '/search?q='+search +'&' : '?' }limit=${productsPerPage}&skip=0`;

    await fetchAllProducts(query);

  };

  const handleCategoryChange = async (category) => {
    
    setSelectedCategory(category);

    const data = await fetchCategory(category);
    console.log(data);
    setFilteredProducts(data.products);
    setTotalProducts(data.total);
  };

  const onPageChange = (page) => {

    setCurrentPage(page);
    let skip = (page - 1) * productsPerPage;

    let query = `${selectedCategory ? '/category' : ''}${searchQuery ? '/search?q='+searchQuery : '?'}&limit=${productsPerPage}&skip=${skip}`;

    fetchAllProducts(query);
  };

  return (
    <>
    <WishlistProvider> 
       <Navbar onSearch={handleSearch} />
        <Main onCategoryChange={handleCategoryChange} cardData={filteredProducts} category={selectedCategory} /> 
        <div className="flex justify-center w-full my-4">
          <Pagination defaultCurrent={currentPage} total={totalProducts} onChange={onPageChange} defaultPageSize={productsPerPage}/>
        </div>
        <Footer />
    </WishlistProvider>
    </>
  );
}
