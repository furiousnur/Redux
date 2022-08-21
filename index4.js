 const {createStore, combineReducers} = require("redux");

const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS"; 

const ADD_CART_ITEMS = "ADD_CART_ITEMS";
const GET_CART_ITEMS = "GET_CART_ITEMS"; 

const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProduct: 2
}

const initialCartState = {
    cart: ['sugar'],
    numberOfCart: 1
}

const getProducts = () => {
    return{
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}

const getCart = () => {
    return{
        type: GET_CART_ITEMS
    }
}

const addCart = (cart) => {
    return{
        type: ADD_CART_ITEMS,
        payload: cart
    }
}

const productReducer = (state=initialProductState, action) =>{
    switch (action.type){
        case ADD_PRODUCT:
            return{
                products: [...state.products, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
            
        case GET_PRODUCTS:
            return{
                ...state
            }
            
        default:
            return state;
    }
}

const cartReducer = (state=initialCartState, action) =>{
    switch (action.type){
        case ADD_CART_ITEMS:
            return{
                cart: [...state.cart, action.payload],
                numberOfCart: state.numberOfCart + 1
            }
            
        case GET_CART_ITEMS:
            return{
                ...state
            }
            
        default:
            return state;
    }
}

const rootReducer = combineReducers({
   productR: productReducer, 
   cartR: cartReducer 
});
 
const store = createStore(rootReducer);
store.subscribe(() =>{
    console.log(store.getState());
})
 
store.dispatch(addProduct("Pen"));
store.dispatch(getProducts());
store.dispatch(addCart("apple"));
store.dispatch(getCart());