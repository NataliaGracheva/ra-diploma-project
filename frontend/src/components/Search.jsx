import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchProducts } from '../actions/actionCreators'


export default function Search() {
    const { text } = useSelector(state => state.productsSearch)
    const dispatch = useDispatch();

    const handleChange = ({ target }) => { // поисковая строка в каталоге

        // как сделать так, чтобы строка реагировала на полный ввод?
        dispatch(searchProducts(target.value))
    }

    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск" value={text} onChange={handleChange} />
        </form>
    )
}