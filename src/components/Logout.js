import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Logout = () => {
  const { contextLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    contextLogout();
    navigate('/login');
  };

    return (
        <Button onClick={logout} variant='primary' size='sm'>Logout</Button>
    );
};

export default Logout;
