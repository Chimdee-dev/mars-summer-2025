import React, { createContext, useState, useContext } from 'react';

// 1. Контекст үүсгэх
const LikedProductsContext = createContext();

// 2. Провайдер компонент
export const LikedProductsProvider = ({ children }) => {
    const [likedProducts, setLikedProducts] = useState([]);

    const toggleLikeProduct = (product) => {
        setLikedProducts(prevLikedProducts => {
            const isAlreadyLiked = prevLikedProducts.some(p => p.id === product.id);

            if (isAlreadyLiked) {
                // Хэрэв таалагдсан жагсаалтад байвал хасна
                return prevLikedProducts.filter(p => p.id !== product.id);
            } else {
                // Таалагдаагүй бол нэмнэ
                return [...prevLikedProducts, product];
            }
        });
    };

    return (
        <LikedProductsContext.Provider value={{ likedProducts, toggleLikeProduct }}>
            {children}
        </LikedProductsContext.Provider>
    );
};

// 3. Custom hook — ашиглахад амар
export const useLikedProducts = () => {
    const context = useContext(LikedProductsContext);
    if (!context) {
        throw new Error("useLikedProducts must be used within a LikedProductsProvider");
    }
    return context;
};