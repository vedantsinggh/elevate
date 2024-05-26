import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import TestLayout from 'layouts/test';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import Home from './views/home';

import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <BrowserRouter> {/* Replace HashRouter with BrowserRouter */}
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/testplatform/:testID`} component={TestLayout} />
            <Route path={`/home`} component={Home} />
            <Redirect from='/' to='/home' />
          </Switch>
        </BrowserRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

