import React from 'react';
import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <Card style={{ color: '#000' }}>
        <Card.Img src="https://ik.imagekit.io/dfw3q47dv0/cell_phone_hHIIsg37E.jpg" />
        <Card.Body>
          <Card.Title>Card Example</Card.Title>
          <Card.Text>This is an example of react-bootstrap cards</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="success">This is a button</Alert>
      <Button>Test Button</Button>
    </header>
  </div>
);

export default App;
