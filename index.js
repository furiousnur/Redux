//Defining constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'

//State
const initialCounterState = {
    count: 0,
}

const initialUsersState = {
    users: [
        {name: "Nur"}
    ]
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

const addUser = () =>{
    return {
        type: ADD_USER,
        payload: {name: 'Alam'}
    };
};
