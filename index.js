const {createStore} = require("redux");

//Defining constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT' 

//State
const initialCounterState = {
    count: 0,
}

//Action - Object - Type, payload
//Increment Counter
const incrementCounter = () =>{
    return {
        type: INCREMENT,
    };
};

const decrementCounter = () =>{
    return {
        type: DECREMENT,
    };
};
 
//create reducer for counter
const counterReducer = (state = initialCounterState, action) =>{
    switch (action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count+10,
            }
            
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            state;
    }
}

//Store methods - getState(), dispatch(), subscribe()
//create store

const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())