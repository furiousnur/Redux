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
                count: state.count+1,
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