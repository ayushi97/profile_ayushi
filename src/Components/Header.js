import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';
import { BsChevronCompactDown } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
//import ModalImage from "react-modal-image";

class Header extends Component {
  render() {

    if(this.props.data){
      //var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var profilepic= "images/"+this.props.data.image;
      //var LOGO= "images/LOGO.png";
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      /*var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url}></a></li>
       })*/
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#myself">About</a></li>
            {/*<li><a className="smoothscroll" href="#about">About</a></li>*/}
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {/*<li><a className="smoothscroll" href="#portfolio">Works</a></li>*/}
            <li><a className="smoothscroll" href="#testimonials">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
            
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
         <div className = "Particles">
         <Particles
         options={{ interactivity: {
            events: {
               onClick: {
                  enable: true,
                  mode: "bubble",
               },
              onhover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                size: 17,
                
                opacity: 0.8,
                speed: 2,
              },
            },
         },
            particles: {
            color: {
               value: ['#0be779', '#008a3e', '#a3ffce']
            },

            line_linked: {
               enable: true,
               distance: 450,
               color: '#ffffff',
               opacity: 0.1,
               width: 1,
             },

            move: {
               enable: true,
               speed: 1,
               direction: 'none',
               random: true,
               straight: false,
               bounce: false,
            },
            number: {
               value: 10,
            },
            opacity: {
               value: 0.5,
               random: false,
               anim: {
                 enable: true,
                 speed: 0.2,
                 opacity_min: 0.3,
                 sync: true,
               },
            },
            size: {
               value: 50,
               random: true,
            },
         } 
      }}
   /></div>
    
         <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
          {/*<ModalImage
            small={profilepic}
            medium={profilepic}
            alt= ""
            hideDownload={true}
            hideZoom={true}
            className="profile-pic"
          />
   */}
      <h1 className = "responsive-headline" >
      <Typewriter 
                options={{
                  strings: [
                    'I\'m Ayushi Sharma.'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '|',
                  delay: 100,
                  

      }}/>
      
      </h1> 
            <h3>I'm a {/*{city} based*/} <span>{occupation}</span>. {description}</h3>
            <hr />
            <ul className="social">
                {/*{networks}*/}

                <li>
                <a
                  href="https://www.linkedin.com/in/ayushisharma97/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <BsLinkedin />
                </a>
              </li>
               
            </ul>
         </div>
      </div>
      
        {/*<img className="logo"  src={LOGO} alt="Tim Baker Profile Pic" />*/}
 

      <p className="scrolldown">
         <a className="smoothscroll" title="Back to Top" href="#myself"><BsChevronCompactDown /></a>
      </p>


   </header>
    );
  }
}
//https://react-icons.github.io/react-icons
export default Header;
