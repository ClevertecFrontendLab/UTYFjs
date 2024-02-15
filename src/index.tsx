import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { HistoryRouter } from 'redux-first-history/rr6';


import { store, history } from '@redux/configure-store';
import { MainPage } from './pages';

import 'normalize.css';
import './index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path='/' element={<MainPage />}>
                        <Route path='auth'>
                            <Route path='registration' />
                            <Route path='login' />
                            <Route path='change-password' />
                            <Route path='confirm-email' />
                        </Route>
                        <Route path='result'>
                            <Route path='success' />
                            <Route path='error' />
                            <Route path='error-user-exist' />
                            <Route path='error-login' />
                            <Route path='error-check-email-no-exist' />
                            <Route path='error-check-email' />
                            <Route path='error-change-password' />
                            <Route path='success-change-password' />
                        </Route>
                    </Route>
                </Routes>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
