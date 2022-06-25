import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import AddPet from './pages/addPet';
import Dashboard from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} >
            <Route index element={<Home />} />
            <Route path='/new' element={<AddPet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
