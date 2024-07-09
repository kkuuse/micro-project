import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import Post from './Post';
import { AuthContext } from './AuthContext';

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { contextLogout } = useContext(AuthContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://blog.hk.tlu.ee/posts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data.posts);
    } catch (error) {
      if (error.response.status === 401) {
        contextLogout();
        navigate('/login');
      }
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4">Posts</h1>
          <p>Kokku on {posts.length} postitust</p>
        </Col>
      </Row>
      <Row>
        {posts.map((post) => (
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.content}
            author={`${post.firstName} ${post.lastName}`}
            createdAt={post.created_at}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
