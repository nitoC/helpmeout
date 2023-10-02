import React from 'react';
import Header from '../components/Header';
import edit from '../assets/edit.png';
import Facebook from '../assets/facebook.png';
import arrowDown from '../assets/arrow-down.png';
import whatsapp from '../assets/whatsapp.png';
import telegram from '../assets/telegram.png';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const File = () => {
    let params = useParams();
    const filepath = params.file
  return (
    <div className='file'>
        <Header/>
        <div className='file-wrapper'>
            <div className='file-elements-container'>

            </div>
            <div className='file-link-wrapper'>
            <div className='video-heading'>
                <h1>Your video is ready!</h1>
            </div>
            <div className='file-label'>
                <p className='file-name-label'>
                    Name
                </p>
                <div className='file-name'>
                    <p className='file-name-text'>{filepath} </p>
                    <img src={edit} alt='file name icon' className='file-name-icon'/>
                </div>

            </div>
                <div className='file-send'>
                    <input className='send-input' type='text' placeholder='enter email of receiver'/>
                    <button className="btn btn-send">Send</button>
                </div>
                <div className='file-link-container'>
                    <p className='file-link-heading'>Video Url</p>
                    <div className='link-input-container'>
                <input className='link-input' type='text' placeholder='enter email of receiver' value={ `https://helpmeout-0eal.onrender.com/video/${filepath}`} disabled/>
                    <button className="btn btn-copy">copy</button>
                    </div>
                </div>
                <div className='share-wrapper'>
                    <p className='share-heading'>Share your video</p>
                    <div className='share-links'>
                    <a href='#' className='share-link'>
                        <img src={Facebook} alt='facebook icon' className='share-icon'/>
                         Facebook
                    </a>
                    <a href='#' className='share-link'> 
                    <img src={whatsapp} alt='facebook icon' className='share-icon'/>
                    Whatsapp
                    </a>
                    <a href='#' className='share-link'>
                    <img src={telegram} alt='facebook icon' className='share-icon'/>
                         Telegram
                    </a>
                    </div>
                </div>

            </div>
            <div className='file-play'>
                <div className='file-video-wrapper'>
                    <video className='video-element' src={ `https://helpmeout-0eal.onrender.com/video/${filepath}`} autoPlay controls>cannot play video</video>
                </div>
                <div className='transcribe'>
                    <div className='transcribe-heading'>
                        <h1 className='transcribe-heading-text'>
                            Transcript
                        </h1>
                    </div>
                    <div className='transcript-language'>
                        English
                        <img src={arrowDown} alt='transcript icon' className='transcript-icon'/>
                    </div>
                    <div className='transcripts'>

                    </div>
                </div>
            </div>
        </div>
        <div className='file-save'>
            <div className='file-save-container'>
            <h1 className='file-save-heading'>
            To ensure the availability and privacy of your video, we recommend saving it to your account.
            </h1>
            <button className='btn-primary'>Save video</button>

            <p className='file-save-text'>Don’t have an account? <a href='#' className='signup-link'>Create account</a></p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}


export default File