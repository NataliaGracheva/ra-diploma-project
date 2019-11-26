import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Cart() {
    const [arr, setLocalArr] = useState([])
    const [inputData, setInputData] = useState({
        phone: '',
        address: '',
        agreement: false
    })
    const [disabled, setDisabled] = useState(true)

    return (
        <Fragment>
            <section className="cart container">
                <h2 className="text-center">Корзина</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Название</th>
                            <th scope="col">Размер</th>
                            <th scope="col">Кол-во</th>
                            <th scope="col">Стоимость</th>
                            <th scope="col">Итого</th>
                            <th scope="col">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr && 
                            (<Fragment>
                                {arr.map((el, id) => {
                                    return (
                                        <tr key={id}>
                                            <th scope="row">{id + 1}</th>
                                            <td><NavLink to={'/catalog/' + el.id}>{el.title}</NavLink></td>
                                            <td>{el.size}</td>
                                            <td>{el.count}</td>
                                            <td>{el.price} руб.</td>
                                            <td>{el.price * el.count} руб.</td>
                                            <td>
                                                <button className="btn btn-outline-danger btn-sm" 
                                                onClick={null}>Удалить
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                )}
                                <tr>
                                    <td colSpan="5" className="text-right">Общая стоимость</td>
                                    <td>{arr.reduce((acc, el) => acc + (el.price * el.count), 0)} руб.</td>
                                </tr>
                            </Fragment>)
                        }
                    </tbody>
                </table>
            </section>
            <section className="order">
                <h2 className="text-center">Оформить заказ</h2>
                <div className="card" style={{maxWidth: '30rem', margin: 'auto'}}>
                    <form className="card-body">
                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input className="form-control" id="phone" placeholder="Ваш телефон" onChange={null} value={inputData.phone} disabled={disabled}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Адрес доставки</label>
                            <input className="form-control" id="address" placeholder="Адрес доставки" onChange={null} value={inputData.address} disabled={disabled}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="agreement" onChange={null} checked={inputData.agreement} disabled={disabled}/>
                            <label className="form-check-label" htmlFor="agreement" >Согласен с правилами доставки</label>
                        </div>
                        <button type="submit" className="btn btn-outline-secondary" onClick={null}
                            disabled={!(inputData.phone.length > 0 && inputData.address.length > 0 && inputData.agreement)}>
                            Оформить
                        </button>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}
