import { createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk),
);

store.subscribe(() => {
    console.log('state change', store.getState())
})
    

export default store