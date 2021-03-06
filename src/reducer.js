export const initialState = {
    basket: [], 
}

// Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((acc,el) => el.price + acc, 0)

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            return state;
    }
}

export default reducer;