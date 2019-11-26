import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import useFetch from '../hooks/useFetch'

export default function Bestsellers() {
    // const items = [{ "id": 65, "category": 15, "title": "Босоножки 'Keira'", "price": 7600, "images": ["https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg", "https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518467_1000.jpg"] }, { "id": 66, "category": 13, "title": "Босоножки 'Myer' с завязкой на щиколотке", "price": 34000, "images": ["https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg", "https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567912_1000.jpg"] }, { "id": 73, "category": 15, "title": "Супергеройские кеды", "price": 1400, "images": ["https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg", "https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"] }]
    
    const [items, setItems] = useState('');
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BESTSALES_URL}`)
            .then(response => response.json())
            .then(response => setItems(response)
            )
    }, []);

    // const [items, setItems] = useState('');
    // const [{ data, loading, error }] = useFetch(`${process.env.REACT_APP_BESTSALES_URL}`) // загрузка данных с сервера
    // useEffect(() => {
    //     if (data.id !== undefined) {
    //         setItems(data);
    //         console.log(items);
    //     }
    // }, [data])
    
    if (items) {
        return (
            <Fragment>
                <section className='top-sales'>
                    <h2 className='text-center'>Хиты продаж!</h2>
                    <div className="row">
                        {items.map(o => (
                            <div className="col-4" key={o.id}> {/* загрузка страницы */}
                                <div className="card">
                                    <img src={o.images[0]} className="card-img-top img-fluid" alt={o.title} />
                                    <div className="card-body">
                                        <p className="card-text">{o.title.split(' ', 2).join(' ')}</p>
                                        <p className="card-text">{o.price} руб.</p>
                                        <NavLink to={'/catalog/:' + o.id} className='btn btn-outline-primary'>Заказать</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </Fragment>
        );
    } else { return null; }
}