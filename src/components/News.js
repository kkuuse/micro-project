import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
    fetchNews();
  }, [navigate]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const toggleComments = async (postId, commentsContainer, button) => {
    if (commentsContainer.style.display === 'none') {
      try {
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const comments = commentsResponse.data;
        commentsContainer.innerHTML = comments.map(comment => `<li><h4>${comment.name}</h4><p>${comment.body}</p></li>`).join('');
        button.textContent = 'Hide Comments';
        commentsContainer.style.display = 'block';
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    } else {
      button.textContent = 'Show Comments';
      commentsContainer.style.display = 'none';
    }
  };

  return (
    <div className="row">
      {news.map((item) => (
        <div key={item.id} className="col-md-4 gallery-item mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.body}</p>
              <button
                className="btn btn-primary toggle-comments"
                onClick={(e) => toggleComments(item.id, e.target.nextSibling, e.target)}
              >
                Show Comments
              </button>
              <ul className="comments-container mt-3" style={{ display: 'none' }}></ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
