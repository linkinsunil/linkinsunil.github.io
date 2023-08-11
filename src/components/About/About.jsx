import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
  return (
    <div className='section-container'>
      <Header
        heading='About Me'
        details='I am a JavaScript enthusiast, a team player, interested in learning more about
                development in the JavaScript language and libraries and working with it to
                build great products'
      />

      <div className='about-main'>
        <div className='about-main-left'>
          {/* Sub section 1 */}
          <h3 className='about-sub-head'>Programming Content Creator</h3>
          <p className='about-details'>
            I've been creating content for my 30,000+ audinence. Go check out{' '}
            <a
              className='about-link-element'
              href='https://www.linkedin.com/in/linkinsunil'
            >
              my posts
            </a>
            !
          </p>

          {/* Sub section 2 */}
          <h3 className='about-sub-head'>Project Creator</h3>
          <p className='about-details'>
            I have been learning and building projects with ReactJS. Check them
            out and if you like them, you can{' '}
            <a
              className='about-link-element'
              href='https://github.com/linkinsunil'
            >
              follow me on Github
            </a>{' '}
            to checkout my beginner friendly project's in codebase as well as
            the deployed version.
          </p>

          {/* Sub section 3 */}
          <h3 className='about-sub-head'>Blogger</h3>
          <p className='about-details'>
            I've been writing blogs lately. Check out{' '}
            <a
              className='about-link-element'
              href='https://linkinsunil.hashnode.dev/'
            >
              my blogs
            </a>
            !
          </p>
        </div>

        <div className='about-main-right'>
          <img src={aboutAnime} alt='animation' className='about-anime' />
        </div>
      </div>

      <FooterLink
        phrase='Check out my '
        link='projects!'
        toAdress='/projects'
      />
      {/* Vector Frame! */}
      <div className='vector-frame'>
        <img src={aboutVector} className='about-vector' alt='about' />
      </div>
    </div>
  );
};

export default About;
