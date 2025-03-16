'use client'
import React from "react";
import Navbar from "../../components/Navbar";
import { useWishlist } from "../../context/WishListContext";
import { Card } from "antd";

const WishList = () => {
  const { wishlist } = useWishlist(); 

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-center text-red-500 text-3xl font-bold">Your Wishlist is Empty!</p>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {wishlist.map((item) => (
              <Card
                key={item.id}
                className="border"
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={item.thumbnail} />}
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="truncate">{item.description}</p>
                <p className="text-xl font-bold">${item.price}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;
