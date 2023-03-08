import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Linking from './link';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Linking/>
  </BrowserRouter>
);