//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataProvider } from './context/GlobalState.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import "./components/headers/header.css";
import "./components/mainpages/products/products.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <DataProvider>
        <App/>
      </DataProvider>
  </BrowserRouter>
 
)