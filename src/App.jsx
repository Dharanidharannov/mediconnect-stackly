
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Patientregpage from './pages/Patientregpage';



function App() {
  return (
   <BrowserRouter>
   <Routes>
         <Route path="/" element={<Patientregpage/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;