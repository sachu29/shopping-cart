'use client'
import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import SearchComponent from './SearchComponent';
import { usePathname } from "next/navigation";

const { Header } = Layout;

const Navbar = ({ onSearch }) => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    
    const menuItems = [
        {
            key: "/",
            label: <Link href="/">Store</Link>,
        },
        {
            key: "/Account",
            label: <Link href="/Account">Account</Link>,
        },
        {
            key: "/WishList",
            label: <Link href="/WishList">Wish List</Link>,
        },
        {
            key: "/Basket",
            label: <Link href="/Basket">Basket</Link>,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Layout>
            <Header className={`w-screen shadow-md px-6 py-3 flex justify-around items-center transition-all duration-200 bg-white ${isScrolled ? "fixed z-50" : "static"}`} style={{backgroundColor: "white"}}>
                <a href="/" className="text-xl font-bold ">
                    <span className="text-pink-500 text-2xl">M</span>
                    <span className="text-black ">oBoo</span>
                    <span className="text-pink-500 text-2xl">M</span>
                </a>
                <SearchComponent onSearch={onSearch} />
                <Menu
                    theme="light" 
                    mode="horizontal"
                    selectedKeys={[pathname]}
                    // onClick={handleClick}
                    className="flex justify-end"
                    items={menuItems}
                >
                </Menu>
            </Header>
        </Layout>
    );
};

export default Navbar;
