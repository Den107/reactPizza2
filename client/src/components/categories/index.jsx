import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const onClickCategory = (i) => {
        setActiveIndex(i)
    }

    const names = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {
                    names.map((value, index) => {
                        return <li key={index} onClick={() => onClickCategory(index)}
                                   className={activeIndex === index ? 'active' : ''}>{value}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Categories;