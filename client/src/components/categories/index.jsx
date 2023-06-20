import React from 'react';

const Categories = ({value, onClickCategory}) => {


    const names = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {
                    names.map((categoryName, index) => {
                        return <li key={index} onClick={() => onClickCategory(index)}
                                   className={value === index ? 'active' : ''}>{categoryName}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Categories;