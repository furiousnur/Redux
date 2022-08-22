const {createStore, applyMiddleware} = require("redux");
const {default: logger} = require("redux-logger");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const api_url = "https://jsonplaceholder.typicode.com/todos"
//constants
const get_todos_request = "get_todos_request"
const get_todos_success = "get_todos_success"
const get_todos_failed = "get_todos_failed"

//state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

//action
const getTodosRequest = () =>{
    return{
        type: get_todos_request
    }
}

const getTodosSuccess = (todos) =>{
    return{
        type: get_todos_success,
        payload: todos
    }
}

const getTodosFailed = (error) =>{
    return{
        type: get_todos_failed,
        payload: error
    }
}

//reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type){
        case get_todos_request:
            return{
                ...state,
                isLoading: true
            }
        
        case get_todos_success:
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        
        case get_todos_failed:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
            
        default:
            return state;
    }
}

//async action creator
const fetchData = () =>{
    return (dispatch)=>{
        dispatch(getTodosRequest());
        axios.get(api_url)
            .then(res =>{
                const todos = res.data;
                const title = todos.map((todo) => todo.title);
                dispatch(getTodosSuccess(title))
            })
            .catch((error) =>{
                dispatch(getTodosFailed(error.message)) 
            })
    }
};

//store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchData()); 