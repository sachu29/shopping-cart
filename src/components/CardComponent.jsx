"use client";
import React from "react";
import { Card } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import StarComponent from "./StarComponent";
import { useWishlist } from "../context/WishListContext";

const CardComponent = ({ cardData }) => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <>
      {cardData && cardData.length > 0 ? (
        cardData.map((item) => {
          const isLiked = wishlist.some((wishItem) => wishItem.id === item.id);
          return (
            <Card
              key={item.id}
              className="relative border w-full md:w-52 lg:w-64"
              hoverable
              cover={<img alt="product" src={item.thumbnail} />}
            >
              <span
                className="absolute flex justify-center items-center w-4 h-4 top-3 right-3 bg-gray-500 opacity-60 p-4 text-cyan-50 cursor-pointer"
                onClick={() => toggleWishlist(item)}
              >
                {isLiked ? <HeartFilled className="text-red-500" /> : <HeartOutlined />}
              </span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="truncate">{item.description}</p>
              <p className="text-xl font-bold">${item.price}</p>
              <div>
                <StarComponent rating={item.rating} />
              </div>
            </Card>
          );
        })
      ) : (
        <p className="text-center text-red-500 text-3xl font-bold">...Products Not Found!!!</p>
      )}
    </>
  );
};

export default CardComponent;
