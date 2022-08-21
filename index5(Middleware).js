 const {createStore, applyMiddleware} = require("redux");
 const {default: logger} = require("redux-logger");

const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS"; 

const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProduct: 2
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

const productReducer = (state=initialProductState, action) =>{
    switch (action.type){
        case GET_PRODUCTS:
            return{
                ...state
            }
            
        case ADD_PRODUCT:
            return{
                products: [...state.products, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
            
        default:
            return state;
    }
}
 
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() =>{
    console.log(store.getState());
})
 
//Action dispatch 
store.dispatch(addProduct("Pen"));
store.dispatch(getProducts()); 