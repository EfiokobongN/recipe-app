import React, { useState } from 'react';
import './Items.scss';

function Items() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Avocado, and Tomato Salad',
            subtitle: "dona's Kitchen",
            image: './images/recipe-1.jpeg',
        },
        {
            id: 2,
            title: 'Chickpea & Butternut Squash Salad',
            subtitle: "Tasty Treat",
            image: './images/recipe-2.jpeg',
        },
        {
            id: 3,
            title: 'Spicy Chicken & Salad',
            subtitle: "Yummy Foods",
            image: './images/recipe-3.jpeg',
        },
        {
            id: 4,
            title: 'Chips, Avocado Creamy Sauce',
            subtitle: "Ella Olsson",
            image: './images/recipe-4.jpeg',
        },
    ]);

    return (
        <section className='recipe_section' >
                {items.map((item) => (
                    <div className='recipe' key={item.id}>
                        <img src={item.image} width='190px' alt="" />
                        <h2>{item.title}</h2>
                        <p>{item.subtitle}</p>
                    </div>
                ))}
            
        </section>
    );
}

export default Items;

