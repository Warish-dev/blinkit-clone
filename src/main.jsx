import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import{BrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import MyState from './context/MyState.jsx'
// import { DarkModeProvider } from './component/Sheared/DarkModeContext'
// import './App.css'
import './index.css'


createRoot(document.getElementById('root')).render(
 
  // <DarkModeProvider>
     <MyState>
    <BrowserRouter>
      {/* <StrictMode> */}
        <App />
      {/* </StrictMode> */}
    </BrowserRouter>
  </MyState>

   //</DarkModeProvider>

 
 
)
