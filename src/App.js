import './styles/app.scss';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import arrowRight from './assets/arrow-right.png';
import record from './assets/record.png';
import plane from './assets/plane.png';
import rotate from './assets/rotate.png';
import icon from './assets/icon.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import recordVideo from './assets/recordVid.png';

function App() {
  return (
    <div className="home">
      <Header/>
      <main className='home-main'> 
      <div className='main-header'>
        <div className='main-text-wrapper'>
          <div className='main-text-container'>
            <h1 className='main-home-heading'>Show Them Don’t Just Tell</h1>
            <p className='main-home-text'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
            <div className='main-home-btn-wrapper'><button className='main-home-btn btn--primary'>Install HelpMeOut<span><img className='main-home-btn-icon' src={arrowRight} alt=''/></span></button></div>
          </div>
        </div>
        <div className='main-image'></div>
      </div>
      <section className='home-features'>
        <div class="features-heading-wrapper">
        <h1 className='features-heading home-heading'>Features</h1>
         <p className='feature-heading-text'>Key Highlights of Our Extension</p>
         </div>
         <div className='feature-container'>
          <div className='feature-text-container'>
            <div className='feature-wrapper'>
              <img className='feature-icon' alt='feature icon' src={record}/>
              <div className='feature-text-wrapper'>
                <h1 className='feature-heading'>Simple Screen Recording</h1>
                <p className='feature-text'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
              </div>
            </div>
            <div className='feature-wrapper'>
              <img className='feature-icon' alt='feature icon' src={plane}/>
              <div className='feature-text-wrapper'>
                <h1 className='feature-heading'>Easy-to-Share URL</h1>
                <p className='feature-text'>Share your recordings instantly with a single link. No attachments, no downloads.</p>
              </div>
            </div>
            <div className='feature-wrapper'>
              <img className='feature-icon' alt='feature icon' src={rotate}/>
              <div className='feature-text-wrapper'>
                <h1 className='feature-heading'>Revisit Recordings</h1>
                <p className='feature-text'>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
              </div>
            </div>
          </div>
          <div className='feature-image'></div>
         </div>
      </section>
      <section className='guides'>
        <div className='guide-heading-wrapper'>
        <h1 className='guide-heading home-heading'>How it works</h1>
        </div>
        <div className='guide-content'>
          <div className='guide'>
            <div className='guid-icon-wrapper'>
              <img src={icon} className='guide-icon' alt='guide icon'/>
            </div>
            <h1 className='guide-heading'>Record Screen</h1>
            <p className='guide-text'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
            <div className='guide-image-wrapper'>
              <img src={recordVideo} className='guide-image' alt='guide image'/>
            </div>
          </div>
          <div className='guide'>
            <div className='guid-icon-wrapper'>
              <img src={icon1} className='guide-icon' alt='guide icon'/>
            </div>
            <h1 className='guide-heading'>Share Your Recording</h1>
            <p className='guide-text'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
            <div className='guide-image-wrapper'>
              <img src={recordVideo} className='guide-image' alt='guide image'/>
            </div>
          </div>
          <div className='guide'>
            <div className='guid-icon-wrapper'>
              <img src={icon2} className='guide-icon' alt='guide icon'/>
            </div>
            <h1 className='guide-heading'>Learn Effortlessly</h1>
            <p className='guide-text'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
            <div className='guide-image-wrapper'>
              <img src={recordVideo} className='guide-image' alt='guide image'/>
            </div>
          </div>
        </div>
      </section>
       </main>
      <Footer/>
    </div>
  );
}

export default App;
