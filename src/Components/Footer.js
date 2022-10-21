import React, { Component } from 'react';
import { BsArrowDownCircleFill } from "react-icons/bs";


class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <section id="footer">

     <div className="row">
        <div className="twelve columns">
                    {/*<ul className="social-links">
              {networks}
           </ul>*/}

           <ul className="copyright">
                &copy; Created by  <a href="https://akhneve.github.io/aakash-neve-resume/" target="_blank" rel='noopener noreferrer'> Aakash Neve</a> and Ayushi Sharma
           </ul>

        </div>

        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </section>
    );
  }
}

export default Footer;
