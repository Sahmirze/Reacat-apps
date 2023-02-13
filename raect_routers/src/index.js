import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { DataContextComponent } from 'context/DataContext';
import { ModeContext } from 'context/ModeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <>   
     <DataContextComponent> 
<ModeContext>
          < BrowserRouter >
         < CssBaseline />
         <App />
     </BrowserRouter> 
</ModeContext>           
  </DataContextComponent>
    </>

   

);