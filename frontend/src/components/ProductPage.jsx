import React, { useState, useEffect, Fragment } from 'react';
import useFetch from '../hooks/useFetch'


export default function ProductPage({ match }) {
    const url = process.env.REACT_APP_DATA_CATEGORIES_URL + '/' + match.params.id

    const [{ data, loading, error }] = useFetch(url) // загрузка данных с сервера

    const [form, setForm] = useState({
        image: '',
        title: '',
        sku: '',
        manufacturer: '',
        color: '',
        material: '',
        season: '',
        reason: ''
    })

    useEffect(() => {
        if (data.id !== undefined) {
            setForm({
                image: data.images[0],
                title: data.title,
                sku: data.sku,
                manufacturer: data.manufacturer,
                color: data.color,
                material: data.material,
                season: data.season,
                reason: data.reason,
                sizes: data.sizes
            })
        }
    }, [data])

    const addtoCart = () => { // в корзину
        

    }

    if (loading) {
        return (
            <p>Loading...</p>
        );
    }
    if (error) {
        console.log(error);
        return <p>Что-то пошло не так</p>;
    }

    return (
        <Fragment>
            {form.title !== undefined &&
                <section className="catalog-item container catalog">
                    <h2 className="text-center">{form.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={form.image} className="img-fluid" alt={form.title}
                                onError={null} />
                        </div>
                        <div className="col-7">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{form.sku}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{form.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{form.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{form.material}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{form.season}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{form.reason}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                                <p>Размеры в наличии: 
                                    { form.sizes !== undefined && 
                                        form.sizes.map((o, i) => o.avalible && 
                                            <span className="catalog-item-size" key={i} onClick={null}>
                                                {o.size}
                                            </span> )
                                    }
                                </p>
                                { form.sizes !== undefined && 
                                    <p>Количество: 
                                        <span className="btn-group btn-group-sm pl-2">
                                            <button className="btn btn-secondary" onClick={null}>-</button>
                                            <span className="btn btn-outline-primary">1</span>
                                            <button className="btn btn-secondary" onClick={null}>+</button>
                                        </span>
                                    </p>
                                }
                            </div>
                            <button className='btn btn-danger btn-block btn-lg' disabled={false} onClick={addtoCart}>В корзину</button>
                        </div> 
                    </div> 
                </section>
            }
        </Fragment>
    )


}
