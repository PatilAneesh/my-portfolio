import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <div className="card cards">
        <h4>Name: Aneesh Patil</h4>
        <h4>Phone.No: +91 7022870534</h4>
        <h4>Email: aneeshpatil341@gmail.com</h4>
        <h4>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/aneesh-patil-65b54a183/"
            target="_blank"
          >
            Click Here
          </a>
        </h4>
        <h4>
          GitHub:{' '}
          <a href="https://github.com/PatilAneesh" target="_blank">
            Click Here
          </a>
        </h4>
      </div>
    </>
  );
};
export default Contact;
