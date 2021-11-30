import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to ...</h1>
      <Link to={'/companies'}>
        <button>Clients</button>
      </Link>
      <Link to={'/audits'}>
        <button>Audits</button>
      </Link>
    </div>
  );
}

export default Home();