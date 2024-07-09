import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  
  const fetchPost = async (id) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://blog.hk.tlu.ee/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPost(response.data.post);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  if (!post) {
    return (
      <Container className="my-5">
        <h2>Post not found</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title className="heading">{ post.title }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>{ post.body }</Card.Text>
        </Card.Body>
      </Card>
      <Button className="mt-3" variant="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Container>
  );
};

export default PostPage;