import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <Alert variant="primary">This is a button</Alert>
      <Button>Test Button</Button>
    </header>
  </div>
);

export default App;
