import React, { Component } from 'react';
import { Fade } from "react-slideshow-image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsArrowDownCircleFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HorizontalTimeline from "react-horizontal-timeline";

class Resume extends Component {

  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <ul>{education.description.map((e, index) => {
            return (
                <li key={index}>{e.point}</li>
                )
        })} 
        </ul>
    </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>{work.description.map((e, index) => {
            return (
                <li key={index}>{e.point}</li>
                )
        })} 
        </ul>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return  <li  className="skill-bar-wrapper" key={skills.name}>
                <span className = "skill-name">{skills.name}</span>
                
                <div style={{width:skills.level}}className="skill-bar"></div>
                <span className = "level">{skills.level}</span>
               </li>
              
      })
    }
    
    return (
      <section id="resume">
        {/*<div className="row work">


            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
            <div
              style={{
                width: "100%",
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

              
              <div className="row item">
                <div className="twelve columns">
                    <h3>{work}</h3>
                    <p className="info">{prevStatus}<span>&bull;</span> <em className="date">{cur_years}</em></p>
                    <p>{cur_description}</p>

                            <button className = "Badge_About">React</button>
                            <button className = "Badge_About">SAP HANA</button>
                            <button className = "Badge_About">DW</button>
                            <button className = "Badge_About">Python</button>
                </div>
              </div>


            </div>
        </div>*/}

        <div className="row work">

              <div className="three columns header-col">
                <h1><span>Work</span></h1>
              </div>

                <div className="nine columns main-col">
                {work}
                </div>
        </div>




      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>



 



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">



          <p>{skillmessage}</p>
				  
              <ul className="skills">{skills}</ul>

			</div>
      </div>
{/*}
      <div className="row work">
        <div className="three columns header-col"></div>
    </div>
    <div className="row">
    <div className="three columns header-col">
          <h1 className = "space"><span>Projects</span></h1>
    </div>
    </div>

      <div className = "Slider_Resume">
        <Slider {...settings}>
          <div>
            <h3 className = "heading_projects">1</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects" >2</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">3</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">4</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">5</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">6</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
        </Slider>


    </div>*/}

   </section>
    );
  }
}

export default Resume;
