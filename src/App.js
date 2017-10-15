import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import Cell from './containers/Cell';

let store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <div>
            <Cell/>
        </div>
    </Provider>
);

store.subscribe(() =>
    console.log(store.getState())
);

export default App;
