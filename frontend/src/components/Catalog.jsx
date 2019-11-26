import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


export default function Catalog() {
    // const categories = [{ "id": 12, "title": "Мужская обувь" }, { "id": 13, "title": "Женская обувь" }, { "id": 14, "title": "Обувь унисекс" }, { "id": 15, "title": "Детская обувь" }];
    const [categories, setCategories] = useState('');
    const [items, setItems] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_CATEGORIES_URL}`)
            .then(response => response.json())
            .then(response => setCategories(response))
        fetch(`${process.env.REACT_APP_DATA_CATEGORIES_URL}`)
            .then(response => response.json())
            .then(response => setItems(response))       
    }, []);


    if (categories) {
        return (
            <section className='container catalog'>
                <h2 className='text-center'>Каталог</h2>
                <Fragment>
                    <ul className='catalog-categories nav justify-content-center'>
                        <li className='nav-item'>
                            <p className='nav-link active'>Все</p>
                        </li>
                        {categories.map(o => (
                            <li className='nav-item' key={o.id}>
                                <p className='nav-link'>{o.title}</p>
                            </li>
                        ))}
                    </ul>
                    {items && 
                (<Fragment>
                    <div className='row'>
                        {items.map(o => (
                            <div className='col-4' key={o.id} >
                                <div className='card catalog-item-card' >
                                    <img src={o.images[0]} className='card-img-top img-fluid' alt={o.title} style={{ width: '90%', height: 200, objectFit: 'cover' }}/>
                                    <div className='card-body'>
                                        <p className='card-text'>{o.title}</p>
                                        <p className='card-text'>{o.price} руб.</p>
                                        <NavLink to={'/catalog/' + o.id} exact className='btn btn-outline-primary' >
                                            Заказать
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {items.length === 6 &&
                    <div className='text-center'>
                        <button className='btn btn-outline-primary'>Загрузить ещё</button>
                    </div>}
                </Fragment>)
            }
                </Fragment>

            </section>
        );
    } else {return null;}
}