import React from 'react';

const Content = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Header</h2>
          <p>Footer</p>
          <p>
            Duis ultricies lacus sed turpis tincidunt id aliquet risus. Bibendum
            est ultricies integer quis auctor.
          </p>
          <div>
            <span className="badge bg-warning text-dark mx-1">Yellow</span>
            <span className="badge bg-danger text-light mx-1">Red</span>
            <span className="badge bg-primary text-light mx-1">Blue</span>
          </div>
        </div>
        <div className="col-md-6">
          <img src="../public/logo192.png" alt="Sample" className="img-fluid" />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4">
          <div className="bg-dark text-white p-3">
            <h4>Block header</h4>
            <p>Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-dark text-white p-3">
            <h4>Block header</h4>
            <p>Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-dark text-white p-3">
            <h4>Block header</h4>
            <p>Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
