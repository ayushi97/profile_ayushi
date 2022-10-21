import React, { Component } from 'react';
import { BsArrowDownCircleFill } from "react-icons/bs";
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsChevronRight } from "react-icons/bs";
/*
This is second version
*/

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}


class Testimonials extends Component {
  render() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : true,
      className : "slides",
      //centerMode: true
      centerPadding: "100px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    if(this.props.data){
    var testimonials = this.props.data.Projects.map(function(Projects){
      return <div key={Projects.title}><h3 className = "heading_projects" ><span className="inner_heading">{Projects.title}</span></h3>
        
        <div className="aim"><b><u>Aim:</u></b> {Projects.Aim}</div>
         <ul className="projects">{Projects.description.map((e, index) => {
          return (
              <li  key={index}>{e.point}</li>
              )
              })} 
        </ul>
      </div>
    })
  }
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

         <div className="twelve columns collapsed">
               <h3 className = "title_test"><span>Check Out Some of My Works.</span></h3>
            </div>

          

            </div>

            <div className = "Slider_Resume_TEST">
        {/*<Slider {...settings}>*/}
        <Card sx={{ maxWidth: 345 }} className = "theme_thumb1">
      <CardActionArea>
        <CardMedia className= "thumbnail"
          component="img"
          height="140"
          image="https://miro.medium.com/fit/c/224/224/1*dpND5pSYH6UNzpORJFeWJA.png"
        />
        <CardContent>
        <a href= "https://medium.com/@aysharma1997/linear-regression-construct-775d0e257362" target="_blank">
          <Typography gutterBottom variant="h5" component="div">
           The Linear Regression Model
          </Typography>
          <Typography variant="body2" color="text.secondary" className='Text_Thumb1'>
          Linear regression is one of the simplest statistical models, but don't let that fool you. 
          It is a powerful tool because of that simplicity. Learn more about it here!

    </Typography>
        </a>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/*<Button size="small" color="primary">
          Learn more
    </Button>*/}
      </CardActions>
    </Card>
        {/*</Slider>*/}


</div>

         </div>
   </section>
    );
  }
}

export default Testimonials;


