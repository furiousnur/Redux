//state - count 0
//action - increment, decrement, reset
//reducer
//store

const {createStore} = require("redux");

//Defining constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

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
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());