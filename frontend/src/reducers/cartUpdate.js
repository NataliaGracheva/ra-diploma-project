import { UPDATE_CART } from '../actions/actionTypes'

let initialState = { count: 0 }
let items = JSON.parse(localStorage.getItem("items"))
if (items) {
    let count = 0;
    items.forEach(el => count += el.count)
    initialState = { count: count }
    console.log(count);
}

export default function cartUpdateReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_CART:

            const { items } = action.payload
            console.log(items)

            let count = 0;

            // let itemsLS = JSON.parse(localStorage.getItem("items"))
            // if (itemsLS) {
            //     itemsLS.forEach(el => count += el.count)
            // }
            // console.log(count);

            if (items) {
                items.forEach(el => count += el.count)
            }

            return {
                ...state,
                count
            };
        default:
            return state;
    }
}