/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/layout';

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
