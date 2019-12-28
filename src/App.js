import React from 'react';
// import classNames from 'classnames'
// import Typography from '@material-ui/core/Typography'
// import withStyles from '@material-ui/core/styles/withStyles'
import logo from './logo.svg';
import './App.css';
// import CitiesSlider from './components/myscroll/myscroll';
// import { isBrowser, isMobile, isPortrait, isLandscape } from 'react-device-detect';

const info = require('react-device-detect');

const Slide = require('./components/myscroll/Slide').default;
const AutoRotatingCarousel = require('./components/myscroll/AutoRotatingCarousel').default;
// const { red, blue, green } = require('@material-ui/core/colors');

function App() {

  // const slides = [
  //   {
  //     city: 'Paris',
  //     country: 'France',
  //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  //   },
  //   {
  //     city: 'Singapore',
  //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  //   },
  //   {
  //     city: 'Prague',
  //     country: 'Czech Republic',
  //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  //   },
  //   {
  //     city: 'Amsterdam',
  //     country: 'Netherlands',
  //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  //   },
  //   {
  //     city: 'Moscow',
  //     country: 'Russia',
  //     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
  //   },
  // ];

  if (info.isBrowser) {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div>
          <AutoRotatingCarousel
            label='Get started'
            open={true}
            mobile
            autoplay={true}
            landscape
            style={{ position: 'absolute' }}
          >
            <Slide
              media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
              // mediaBackgroundStyle={{ backgroundColor: red[400] }}
              // style={{ backgroundColor: red[600] }}
              title='This is a very cool feature'
              subtitle='Just using this will blow your mind.'
              description='Hello, I am Igor!'
            />
            <Slide
              media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
              // mediaBackgroundStyle={{ backgroundColor: blue[400] }}
              // style={{ backgroundColor: blue[600] }}
              title='Ever wanted to be popular?'
              subtitle='Well just mix two colors and your are good to go!'
              description='Hello, I am Igor!'
            />
            <Slide
              media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
              // mediaBackgroundStyle={{ backgroundColor: green[400] }}
              // style={{ backgroundColor: green[600] }}
              title='May the force be with you'
              subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
              description='Hello, I am Igor!'
            />
          </AutoRotatingCarousel>
        </div>
      </div>
    );
  }
  else if (info.isMobile) {
    return (
      <div className="App">
        {/* <header >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div>
          <header className="App-header">
            <div
                className="App-mobile-text mobile-textMobile textLandscape"
              >
              <div className="mobile-title">
                This is a very cool feature
              </div>
              <div className="mobile-subtitle">
                Just using this will blow your mind.
              </div>
              <div className="mobile-description">
                Hello, I am Igor!
              </div>
            </div>
          </header>
          <AutoRotatingCarousel
            label='Get started'
            open={true}
            mobile
            autoplay={false}
            style={{ position: 'absolute', height: '70%' }}
          >
            <Slide
              media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
              // mediaBackgroundStyle={{ backgroundColor: red[400] }}
              // style={{ backgroundColor: red[600] }}
              title='This is a very cool feature'
              subtitle='Just using this will blow your mind.'
              description='Hello, I am Igor!'
            />
            <Slide
              media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
              // mediaBackgroundStyle={{ backgroundColor: blue[400] }}
              // style={{ backgroundColor: blue[600] }}
              title='Ever wanted to be popular?'
              subtitle='Well just mix two colors and your are good to go!'
              description='Hello, I am Igor!'
            />
            <Slide
              media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
              // mediaBackgroundStyle={{ backgroundColor: green[400] }}
              // style={{ backgroundColor: green[600] }}
              title='May the force be with you'
              subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
              description='Hello, I am Igor!'
            />
          </AutoRotatingCarousel>
        </div>
      </div>
    );
  }
}

export default App