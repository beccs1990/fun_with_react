import React from 'react';
import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);

store.getState();
