import React, { Component } from 'react';
import HorizontalTimeline from "react-horizontal-timeline";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Badge from 'react-simple-badges'


const VALUES = [ '2019-05-01' , '2020-05-01' ];

const EXAMPLE = [
      { 
        data: '2019-05-01',
        company: "Awesome Design Studio",
        title: "Senior UX God ",
        years: "March 2010 - Present",
        description: "Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. "
      },

      {
        data: '2020-05-01',
        company: "Super Cool Studio",
        title: "Junior bug fixer",
        years: "March 2007 - February 2010",
        description: "Super Cool Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Super Cool Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Super Cool Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Super Cool Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. "

      }
 ];


class About extends Component {
   constructor(props) {
      super(props);
      this.state = {
        curIdx: 0,      
        prevIdx: -1
      };
    }

    
  render() {

    if(this.props.data){
      {/*var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;*/}
      
      var work = this.props.data.work.map(function(work){
        return <div><h1>{work.company}</h1>
            <h3 className="info">{work.title}</h3>
            <h5> {work.years}</h5>
            {/*<p>{work.description}</p>*/}
        </div>
      })

    }
    const {curIdx, prevIdx} = this.state;
    const curStatus = EXAMPLE[curIdx].company;
    const prevStatus = EXAMPLE[curIdx].title;
    const cur_years = EXAMPLE[curIdx].years;
    const cur_description = EXAMPLE[curIdx].description;

    return (
      <section id="about">


      <div>
        <div
          style={{
            width: "90%",
            height: "100px",
            margin: "0 auto",
            marginTop: "50 px",
            fontSize: "14px",
            color: '#fff'
          }}>
          <HorizontalTimeline
            styles={{
               background: '#243040',
               foreground: "#0be779",
               outline: "#BFBFBF",
               margin: "0 auto",
               textAlign: "center"
            }}
            index={this.state.curIdx}
            indexClick={index => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}            
            values={EXAMPLE.map(x => x.data)}
          />
        </div>
        {/*<div className="text-center">
  
          <h2 styles={{
               color: '#fff'
            }} >{curStatus} - {prevStatus} - {cur_years} - {cur_description}</h2>
          </div>*/}
          
      </div>


      <div className="row">
         <div className="six columns">
         <strong><h1 className = 'comapany_name'><span>{curStatus}</span></h1></strong>
         
           <h3 className = 'title_name'>{prevStatus}</h3>
           <h3 className = 'years_name' >{cur_years}</h3>
          </div>
           
            <div className="six columns">
               {/*<div className="columns contact-details">*/}
                    <p className = 'descript_name'>{cur_description}</p>
                    <button className = "Badge_About">React</button>
                    <button className = "Badge_About">SAP HANA</button>
                    <button className = "Badge_About">DW</button>
                    <button className = "Badge_About">Python</button>
               {/*</div>*/}
               
               
               {/*<div className="columns download">
                  <p>
                     <a href= ' ' className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
              </div>*/}
            </div>

           {/*<img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />*/}
  

         {/*<div>
            
            <h2 style = {{padding: "0 20px;"}}>Description </h2>
            <div className="row">
               <div className="columns contact-details">
                    <h3>{cur_description}</h3>
               </div>
               <div className="columns download">
                  <p>
                     <a href= ' ' className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
              </div>
            </div>
         </div>*/}
         
      </div>
        {/*<p className="scrolldown">
            <a className="smoothscroll" title="Back to Top" href=" "><BsArrowDownCircleFill /></a>
        </p>*/}

          <div className="button_about">
            <a className="smoothscroll"  href="#resume"><BsArrowDownCircleFill /></a>
          </div>
        
   </section>
    );
  }
}

export default About;

