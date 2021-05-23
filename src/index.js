/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import { client } from './api/ZAFClient';
import App from './App.js';

client.invoke('resize', { width: '100%', height: '350px' });

const root = document.getElementById('root');
root ? ReactDOM.render(<App />, root) : false;
