import React, { useEffect } from 'react';
import { data } from '../data';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Food = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {data.food.map((item, index) => (
          <Col key={index} md={4} className="my-3">
            <Card>
              <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Food;
