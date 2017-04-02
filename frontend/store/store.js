import { createStore } from 'redux';
import rootReduer from '../reducers/root_reducer';

const configureStore = () => {
    const store = createStore(rootReduer);

    return store;
}

export default configureStore;