//state - count 0
//action - increment, decrement, reset
//reducer
//store

const {createStore} = require("redux");

//Defining constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

//state
const initiateCountState = {
    count: 7
}

//action
const incrementCounterAction = () =>{
    return{
        type: INCREMENT
    }
}

const decrementCounterAction = () =>{
    return{
        type: DECREMENT
    }
}

const resetCounterAction = () =>{
    return{
        type: RESET
    }
}

const incrementByValue = (value) =>{
    return{
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

//reducer
const counterReducer = (state = initiateCountState, action) =>{
    switch (action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count+15
            }
            
        case DECREMENT:
            return{
                ...state,
                count: state.count-5
            }
            
        case RESET:
            return{
                ...state,
                count: 0
            }
            
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
            
        default:
            state;
    }
}

//store
const store = createStore(counterReducer);
//subscribe
store.subscribe(()=>{
    console.log(store.getState());
})
//dispatch
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
store.dispatch(incrementByValue(100));