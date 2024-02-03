import { createStore } from 'redux';
import rootReducer from './Todos/rootReducer'

const store = createStore(rootReducer);

export default store;