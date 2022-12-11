import React, {useState, useEffect, createContext} from 'react'

import {housesData} from "../data"

export let HouseContext = createContext();

const HouseContextProvider = ({children}) => {

    let [houses,
        setHouses] = useState(housesData);
    let [country,
        setCountry] = useState('Location (any)');
    let [countries,
        setCountries] = useState([]);
    let [property,
        setProperty] = useState('Property type (any)');
    let [properties,
        setProperties] = useState([]);
    let [price,
        setPrice] = useState('Price range (any)');
    let [loading,
        setLoading] = useState(false);

    useEffect(() => {
        let allCountries = houses.map((house) => {
            return house.country;
        });
        const uniqueCountries = [
            'Location (any)', ...new Set(allCountries)
        ];
        setCountries(uniqueCountries);
    }, []);

    useEffect(() => {
        let allProperties = houses.map((house) => {
            return house.type;
        });

        const uniqueProperties = [
            "Property (any)", ...new Set(allProperties)
        ];
        setProperties(uniqueProperties);
    }, []);

    let handleClick = () => {

        let isDefault = (str) => {
            return str
                .split(" ")
                .includes("(any)");
        };

        let minPrice = parseInt(price.split(" ")[0]);
        let maxPrice = parseInt(price.split(" ")[2]);

        let newHouses = housesData.filter((house) => {

            setLoading(true);

            let housePrice = parseInt(house.price);

            if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
                return house;
            }

            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house;
            }

            if (!isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country;
            }

            if (!isDefault(property) && isDefault(country) && isDefault(price)) {
                return house.type === property;
            }

            if (!isDefault(price) && isDefault(country) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house;
                }
            }

            if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
                return house.country === country && house.type === property;
            };

            if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice && house.country === country) {
                    return house;
                }
            };

            if (!isDefault(property) && !isDefault(price) && isDefault(country)) {
                if (housePrice >= minPrice && housePrice <= maxPrice && house.type === property) {
                    return house;
                }
            }

        });

        setTimeout(() => {
            return newHouses.length < 1
                ? setHouses([])
                : setHouses(newHouses),
            setLoading(false);
        }, 1000);
    };

    return (
        <HouseContext.Provider
            value={{
            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            price,
            setPrice,
            houses,
            loading,
            handleClick
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContextProvider