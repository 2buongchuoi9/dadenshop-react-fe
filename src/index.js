import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyles from './components/GlobalStyles';
import './index.css';
import { Provider } from 'react-redux';
import store, { history } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <Router history={history}>
        {/* <BrowserRouter> */}
        <GlobalStyles>
          <App />
        </GlobalStyles>
        {/* </BrowserRouter> */}
      </Router>
    </Provider>
  </>,
);
