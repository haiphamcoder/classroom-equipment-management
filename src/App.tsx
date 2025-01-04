import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/joy/styles';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/classroom-equipment-management/login" element={<LoginPage />} />
          <Route path="/classroom-equipment-management/signup" element={<SignUpPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </StyledEngineProvider>
  </React.StrictMode>
);