import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import homeAnime from './../../assets/home_anime.gif';
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
          <button className='btn btn-transparent'>
            <a
              href='https://drive.google.com/file/d/1klZY85ciXc3Bz0eoJ0Mi8ANxGZfAhzld/view?usp=share_link'
              target='_blank'
              className='btn-text'
              rel='noreferrer'
            >
              Resume
            </a>
          </button>
        </div>
        <div className='splash-image'>
          <img src={homeAnime} alt='animation' className='home-anime' />
        </div>
      </div>
    );
  }
}

export default Home;
