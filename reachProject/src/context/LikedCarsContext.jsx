import React, { createContext, useState, useContext } from 'react'

const LikedCarsContext = createContext();

export const LikedCarsProvider = ({ children }) => {

    const [likedCars, setLikedCars] = useState([]);

    const toggleLikeCar = (car) => {
        setLikedCars(prevLikedCars => {
            if (prevLikedCars.some(LikedCar => LikedCar.id === car.id)) {
                // If the car is already liked, remove it from the list
                return prevLikedCars.filter(LikedCar => LikedCar.id !== car.id);
            } else {
                return [...prevLikedCars, car];
            }
        });
    };
    return (
        <LikedCarsContext.Provider value={{ likedCars, toggleLikeCar }}>
            {children}
        </LikedCarsContext.Provider>
    );

};
export const useLikedCars = () => {
    return useContext(LikedCarsContext);
};

