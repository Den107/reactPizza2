import React from 'react';
import Categories from "../components/categories";
import Sort from "../components/sort";
import Skeleton from "../components/pizzaBlock/skeleton";
import PizzaBlock from "../components/pizzaBlock";
import {useEffect, useState} from "react";

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://62ff94ea9350a1e548e1fe37.mockapi.io/items')
            .then(res => res.json())
            .then(res => {
                setIsLoading(false)
                setItems(res)
            })
    }, [])
    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>) : items.map(value =>
                        <PizzaBlock key={value.id} {...value}/>)
                }
            </div>
        </>
    );
};

export default Home;