import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import homeAnime from './../../assets/home_anime.gif';
import resume from './../../assets/Sunil-Frontend.pdf';
import './Home.css';

class Home extends Component {
  state = { showModal: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showModal: false });
    }, 1000);
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className='home-container'>
        {this.state.showModal && <Modal closeModal={this.closeModal} />}
        <div className='header-text'>
          <h1>Hi, This is Sunil</h1>
          <p>A frontend developer and a tech enthusiast</p>
        </div>
        <div className='head-btns'>
          <Link to='/about' className='btn btn-transparent'>
            <p className='btn-text'>More about me</p>
          </Link>
          <Link to='/contact' className='btn btn-transparent'>
            <p className='btn-text'>Connect with me</p>
          </Link>
          <a
            href={resume}
            target='_blank'
            className='btn-text btn btn-transparent'
            rel='noreferrer'
            download='Sunil_Vishwakarma-Frontend_React'
          >
            Resume
          </a>
        </div>
        <div className='splash-image'>
          <img src={homeAnime} alt='animation' className='home-anime' />
        </div>
      </div>
    );
  }
}

export default Home;
