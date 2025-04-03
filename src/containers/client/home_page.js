import React from 'react';
import Footer from '../../assets/components/footer/footer';

const HomePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar bg-body-primary border-bottom">
        <div className="container">
          <span className="navbar-brand mb-0 fs-2" id="navbar">UniVault</span>
        </div>
      </nav>
      <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="text-center">
          <h1>Welcome to UniVault</h1>
          <p className="mt-3">
            Your ultimate platform for accessing and sharing university content. Explore a wide range of resources, collaborate with peers, and enhance your learning experience.
          </p>
          <div className="mt-4">
            <button className="btn btn-primary me-3">RGPV</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
