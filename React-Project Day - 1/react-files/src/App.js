import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
