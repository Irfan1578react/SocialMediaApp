import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">© 2024 Irfan Gram. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/" className="text-muted">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="/post" className="text-muted">Add</a>
              </li>
              <li className="list-inline-item">
                <a href="/about" className="text-muted">About</a>
              </li>
              <li className="list-inline-item">
                <a href="/contact" className="text-muted">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
