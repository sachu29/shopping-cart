'use client'
import { createContext, useContext, useState, useEffect } from "react";

// Create context
const WishlistContext = createContext();

// Provider Component
export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    // Load wishlist from local storage when the app starts
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    // Save wishlist to local storage whenever it updates
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Toggle item in wishlist
    const toggleWishlist = (item) => {
        setWishlist((prevWishlist) => {
            const isInWishlist = prevWishlist.some((wishItem) => wishItem.id === item.id);

            if (isInWishlist) {
                return prevWishlist.filter((wishItem) => wishItem.id !== item.id); // Remove from wishlist
            } else {
                return [...prevWishlist, item]; // Add to wishlist
            }
        });
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

// Custom Hook to use Wishlist Context
export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
