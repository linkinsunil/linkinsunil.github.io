import React from 'react';
import './Header.css';

const Header = ({ heading, details, projectCount }) => {
  return (
    <div className='header-container'>
      <h1>{heading}</h1>
      {projectCount && (
        <p>
          Project Count : <strong>{projectCount}</strong>
        </p>
      )}
      <p>{details}</p>
    </div>
  );
};

export default Header;
