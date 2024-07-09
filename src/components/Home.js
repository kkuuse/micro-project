import React, { useEffect } from 'react';
import { data } from '../data';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const homeData = data.home[0];
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    if (!localStorage.getItem('token')) {
      navigate('/login'); // Redirect to login page if not logged in
    }
  }, [navigate]);
  
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={8} className="home-gallery text-center">
          <h2>{homeData.title}</h2>
          <p className={homeData.paragraphClass}>{homeData.description}</p>
          <img src={homeData.imageUrl} alt="Home" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
