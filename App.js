import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { cvReducer } from './Redux/reducers/reducers';

import Navigation from './navigation/navigation';

const store = createStore(cvReducer);


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider> 
  );
};


export default App;
