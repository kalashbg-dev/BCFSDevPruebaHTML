import React from 'react';
import './styles.css';
import UserTable from './components/UserTable';

const App: React.FC = () => {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserTable />
    </div>
  );
};

export default App;
