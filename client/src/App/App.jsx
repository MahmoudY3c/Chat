

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from '../Routes';

//roboto fonts for MUI 
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.key} element={route.Element} path={route.path} />
          ))}
        </Routes>
    </Router>
  );
}

export default App;
