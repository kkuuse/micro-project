import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Nature from './components/Nature';
import Food from './components/Food';
import Travel from './components/Travel';
import News from './components/News';
import Contact from './components/Contact';
import Login from './components/Login';
import NotFound from './components/NotFound';
import PostPage from './components/PostPage';
import Posts from './components/Posts';
import Users from './components/Users';
import AuthProvider from './components/AuthContext';

function App() {
 
  return (
    <Container fluid className="p-0">
      <AuthProvider>
      <Router>
        <header className="text-center py-3 w-100">
          <h1>Photography Portfolio</h1>
          <NavBar />
        </header>
        <Row className="my-4">
          <Col className="main-container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/nature' element={<Nature />} />
              <Route path='/food' element={<Food />} />
              <Route path='/travel' element={<Travel />} />
              <Route path='/news' element={<News />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/posts/:id' element={<PostPage />} />
              <Route path='/users' element={<Users />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <footer>
              <h5>2024</h5>
            </footer>
          </Col>
        </Row>
      </Router>
      </AuthProvider>
    </Container>
  );
}

export default App;
