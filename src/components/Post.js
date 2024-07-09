import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = (props) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          <Link to={`/posts/${props.id}`} className="text-decoration-none">{props.title}</Link>
        </Card.Title>   
        <Card.Subtitle className="mb-2 text-muted">{props.createdAt} by {props.author}</Card.Subtitle>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;