import React from 'react';
import github from './../assets/images/github.png';
import rsschool from './../assets/images/rs_school_js.svg';

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__items">
        <div className="footer__item">
          <a href="https://motoblock.github.io/" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
        </div>
        <div className="footer__item">All Rights Reserved © motoblock, 2023</div>
        <div className="footer__item">
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            <img src={rsschool} className="rsschool" alt="rsschool" />
          </a>
        </div>
      </div>
    </div>
  );
};
