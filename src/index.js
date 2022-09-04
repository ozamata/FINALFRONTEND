import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Landings404Page from './components/404/Landings404Page';
import {Routes, Route}from 'react-router-dom';

const rootElement = document.getElementById('#root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
    <div>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Landings404Page />} />
    </Routes>
    </div>
    </BrowserRouter>
  </StrictMode>
);