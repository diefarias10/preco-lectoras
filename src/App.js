import React from 'react';
import { useEffect, useState, useContext } from "react";
import './App.css';
import Header from './components/Header/Header';
import UserMenu from './components/Menu/UserMenu';
import TablePanel from './components/TablePanel/TablePanel';
import { AppProvider } from './context/AppContext';

function App() {

  return (
    <AppProvider>
      <div className="App">
        <Header />
        <UserMenu />
        <TablePanel />
      </div>
    </AppProvider>
  );
}

export default App;
