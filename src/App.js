import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import CellContainer from './containers/CellContainer'
import Keyboard from './components/Keyboard'

let store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <div>
      <CellContainer />
      <Keyboard />
    </div>
  </Provider>
)

store.subscribe(() =>
  console.log(store.getState())
)

export default App
