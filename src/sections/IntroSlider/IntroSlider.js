import React, { useState } from 'react';
import Slider from 'react-slick';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Slide1 from '../../asset/images/intro-slide1.png';
import Slide2 from '../../asset/images/side2.jpg';
import Slide3 from '../../asset/images/slider2.jpg';
import { Typography, Grid } from '@material-ui/core';
import SpreadButton from '../../components/common/SpreadButton';
import { CSSTransition } from 'react-transition-group';

const useStyles = makeStyles((theme) => ({
  introSlider: {
    maxWidth: 1920,
    backgroundColor: '#b5d4ff',
    paddingTop: 80
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    '& > *': {
      display: 'inline-block',
      marginBottom: 30,
    },
  },
  imgSlide: {
    height: 420,
    width: 'auto',
  },
}));

const fakeData = [
  {
    description: 'Khuyến mãi lên đến 20%',
    title: 'Women fashion',
    image: Slide1,
  },
  {
    description: 'Ưu đãi với hàng ngàn quà tặng',
    title: 'Men fashion',
    image: Slide2,
  },
  {
    description: 'Khuyến mãi lên đến 20%',
    title: 'Women fashion',
    image: Slide3,
  },
];

const IntroSlider = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setIndex(next||0),
  };
  return (
    <Container maxWidth="md" className={classes.introSlider}>
      <Slider {...settings}>
        {fakeData.map((slide, i) => {
          return (
            <div>
              <div
                style={{
                  width: '100%',
                  height: 500,
                  
                  backgroundSize: '40%',
                }}
              >
                <Container
                  maxWidth="md"
                  style={{ maxWidth: 1140, height: '100%' }}
                >
                  <Grid container>
                    <Grid item xs={12} md={6} className={classes.info}>
                      <CSSTransition
                        in={index === i}
                        timeout={1000}
                        classNames="description"
                      >
                        <Typography variant="body1">
                          {slide.description}
                        </Typography>
                      </CSSTransition>
                      <CSSTransition
                        in={index === i}
                        timeout={1500}
                        classNames="title"
                      >
                        <Typography variant="h3">{slide.title}</Typography>
                      </CSSTransition>
                      <CSSTransition
                        in={index === i}
                        timeout={2000}
                        classNames="button"
                      >
                        <div style={{zIndex: 1, position: 'relative'}}>
                          <SpreadButton color="secondary">
                            shop now
                          </SpreadButton>
                        </div>
                      </CSSTransition>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img
                        src={slide.image}
                        alt="intro slide img"
                        className={classes.imgSlide}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default IntroSlider;
