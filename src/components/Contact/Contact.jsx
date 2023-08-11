import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import youtube from './../../assets/logo-filled-youtube.png';
import twitter from './../../assets/twitter.png';
import hashnode from './../../assets/hashnode.png';

const Contact = () => {
  return (
    <div className='section-container'>
      <Header
        heading='Get in touch.'
        details='Interested to collaborate? Feel free to drop me an email.'
      />

      {/* Form section */}
      <div className='contact-form-container'>
        <form
          className='contact-form'
          action='https://formspree.io/f/xayagqdj'
          method='POST'
        >
          {/* Email Id Input */}
          <input
            type='email'
            placeholder='Your Email ID'
            name='_replyto'
            className='input-box email-input'
            autoComplete='off'
          />

          {/* Email Body */}
          <textarea
            type='text'
            placeholder='Your Message'
            name='message'
            className='input-box body-input'
          ></textarea>

          {/* Submit button */}
          <button type='submit' className='contact-btn'>
            Send Email
          </button>
        </form>
      </div>

      {/* Social icons */}
      <div className='social-icons-container'>
        <a
          href='https://github.com/linkinsunil'
          target='_blank'
          rel='noreferrer'
          className='social-icon'
        >
          <img src={github} alt='github' />
        </a>
        <a
          href='https://linkedin.com/in/linkinsunil'
          target='_blank'
          rel='noreferrer'
          className='social-icon'
        >
          <img src={linkedin} alt='linkedin' />
        </a>
        <a
          href='https://instagram.com/linkinsunil'
          target='_blank'
          rel='noreferrer'
          className='social-icon'
        >
          <img src={instagram} alt='instagram' />
        </a>
        <a
          href='https://twitter.com/linkinsunil'
          target='_blank'
          rel='noreferrer'
          className='social-icon'
        >
          <img src={twitter} alt='twitter' />
        </a>
        <a
          href='https://linkinsunil.hashnode.dev/'
          target='_blank'
          rel='noreferrer'
          className='social-icon'
        >
          <img src={hashnode} alt='blog' />
        </a>
        <a
          href='https://www.youtube.com/@sunil_vishwakarma'
          target='_blank'
          rel='noreferrer'
          className='social-icon'
        >
          <img src={youtube} alt='youtube' />
        </a>
      </div>

      <FooterLink phrase='Read more ' toAdress='/about' link='about me.' />

      <div className='vector-frame'>
        <img src={contactVector} alt='vector' className='about-vector' />
      </div>
    </div>
  );
};

export default Contact;
