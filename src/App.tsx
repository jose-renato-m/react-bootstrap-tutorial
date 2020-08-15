import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" />
                <Form.Text className="text-muted">
                  We'll never share your email adress. Trust us!
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </Form>
        <Card className="mb-3" style={{ color: '#000' }}>
          <Card.Img src="https://picsum.photos/200/50" />
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
      </Container>
    </header>
  </div>
);

export default App;
