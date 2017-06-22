import React from 'react';
import { render } from 'react-dom';

import Article from './components/article.jsx';

const renderApp = () => {
  render(
    <Article />,
    document.getElementById('app'),
  );
};

renderApp();