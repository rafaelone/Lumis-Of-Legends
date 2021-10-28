import React, {ReactElement} from 'react';
import {ThemeProvider} from 'styled-components';
import {HashRouter} from 'react-router-dom';

import {render} from 'react-dom';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import {Routes} from './routes';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Routes />
      </HashRouter>
    </ThemeProvider>
  );
}

render(<App />, mainElement);
