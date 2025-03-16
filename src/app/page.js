'use client'
import "./globals.css"
import Navbar from "../components/Navbar";
import Main from '../components/Main';
import { useState, useEffect } from "react";
import { WishlistProvider } from './../context/WishListContext'; // Import WishlistProvider
import Footer from './../components/Footer';
import { fetchCategory, fetchProducts } from "./common";
import { Pagination } from 'antd';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(24);
  const [totalProducts, setTotalProducts] = useState(0);

  async function fetchAllProducts (query) {
    try{
      const data = await fetchProducts({query:query}); 

      setAllProducts(data.products);
      setFilteredProducts(data.products);
      // setProductsPerPage(data.limit);
      setTotalProducts(data.total);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }catch(err){
      console.error(err)
    }finally{
      setLoading(false)
    }
  }

  useEffect( () => {;
    if(allProducts.length === 0){
      fetchAllProducts('?limit=24&skip=0');
    }
  },[]);

  useEffect(() => {
    // if (selectedCategory) {
    //   fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setFilteredProducts(data.products);
    //     })
    //     .catch((err) => console.error("Error fetching category products:", err));
    // } else {
    //   setFilteredProducts(allProducts); 
    // }
  }, [selectedCategory, allProducts]); // Removed `allProducts` from dependencies to avoid unnecessary re-fetching

  useEffect(() => {
    // if (searchQuery.trim() === "") {
    //   setFilteredProducts(selectedCategory ? allProducts.filter(item => item.category === selectedCategory) : allProducts);
    // } else {
    //   setFilteredProducts(allProducts.filter((item) =>
    //     item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    //     (selectedCategory ? item.category === selectedCategory : true)
    //   ));
    // }
  }, [searchQuery, selectedCategory, allProducts]);


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
