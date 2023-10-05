import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
    return (
        <div style={{minHeight:'100vh'}}>
          <header style={{ paddingLeft: 0, paddingTop: '1px' }}>
          <div className="p-5 text-center bg-light" style={{marginTop: '58px'}}>
          <h1 className="mb-3">Shopply</h1>
          <h4 className="mb-3">You demand, We supply</h4>
          <a className="btn btn-primary" href="/products" role="button">
           Products
          </a>
        </div>
        </header>
        </div>
    );
};

export default Homepage;