'use client'
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import SearchComponent from './SearchComponent';
import { usePathname } from "next/navigation";

const { Header } = Layout;

const Navbar = ({ onSearch }) => {
    const pathname = usePathname();
    
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

    return (
        <Layout>
            <Header className="shadow-md px-6 py-3 flex justify-around items-center bg-light" style={{background: "white"}}>
                <div className="text-xl font-bold text-pink-500 ">M<span className="text-black ">oBoo</span>M</div>
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
