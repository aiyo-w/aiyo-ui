import React from 'react';
import ReactDOM from 'react-dom/client';
import { AiyoButton } from './components/button/aiyo-button';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AiyoButton iconClass='icon-smail'>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' loading>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' disabled>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' plain>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' plain loading>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' disabled plain>apao</AiyoButton>

    <AiyoButton iconClass='icon-smail' shape="rounded">apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="rounded" loading>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="rounded" disabled>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="rounded" plain>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="rounded" plain loading>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="rounded" disabled plain>apao</AiyoButton>

    <AiyoButton iconClass='icon-smail' shape="circle">apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="circle" loading>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="circle" disabled>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="circle" plain>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="circle" plain loading>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="circle" disabled plain>apao</AiyoButton>

    <AiyoButton iconClass='icon-smail' shape="square">apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="square" loading>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="square" disabled>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="square" plain>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="square" plain loading>apao</AiyoButton>
    <AiyoButton iconClass='icon-smail' shape="square" disabled plain>apao</AiyoButton>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
