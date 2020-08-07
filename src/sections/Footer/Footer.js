import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../asset/images/logo.png';
import { Container, Grid } from '@material-ui/core';
import {
  FaFacebook,
  FaYoutube,
  FaGooglePlusG,
  FaAddressCard,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaMobile,
  FaEnvelope,
} from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#202325',
    padding: '50px 0',
  },
  frame: {
    padding: '0 30px',
    color: 'white',
    '& > h3': {
      fontSize: 20,
      fontWeight: 700,
      margin: 0,
      marginBottom: '40px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: 20
      }
    },
  },
  firstFrame: {
    '& .logoFooter': {
      display: 'flex',
      justifyContent: 'center',
      '& > img': {
        width: 160,
        borderRadius: '50%',
        marginBottom: 10,
      },
    },
    '& .description': {
      lineHeight: '30px',
      marginBottom: 10,
      textAlign: 'justify',
      '& span': {
        wordWrap: 'no-wrap',
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        fontStyle: 'oblique',
      },
    },
    '& .social': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: 32,
      '& > svg': {
        padding: 12,
        cursor: 'pointer',
        '&:hover': {
          color: theme.palette.secondary.main,
        },
      },
    },
  },
  secondFrame: {
    paddingLeft: 60,
    '& ul li': {
      padding: '12px 0',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.secondary.main
      }
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 30,
      margin: '50px 0',
      '& ul li': {
        padding: '6px 0'
      }
    }
  },
  thirdFrame: {
    '& .infoItems': {
      '& > div': {
        display: 'flex',
        alignItem: 'center',
        margin: '20px 0',
        '& span': {
          lineHeight: '24px',
          marginLeft: 20
        },
        '& svg': {
          fontSize: 24
        }
      }
    }
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md" style={{ maxWidth: 1140 }}>
        <Grid container>
          <Grid item xs={12} md={4} className={`${classes.frame} ${classes.firstFrame}`}>
            <div className="logoFooter">
              <img src={Logo} />
            </div>
            <div className="description">
              <span>PT STORE</span> chuyên kinh doanh và nhận gia công trang sức
              cao cấp VÀNG/BẠC, mọi người có nhu cầu đặt hàng theo mẫu thì hãy
              nhớ tới store chúng mình nhé.
            </div>
            <div className="social">
              <FaFacebook />
              <FaYoutube />
              <FaGooglePlusG />
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={`${classes.frame} ${classes.secondFrame}`}>
            <h3>Sản phẩm của chúng tôi</h3>
            <ul>
              <li>Bông tai cá tính</li>
              <li>Bông tai điệu đà</li>
              <li>Bông tai cao cấp</li>
              <li>Nhẫn vàng/bạc</li>
              <li>Dây chuyền vàng/bạc</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4} className={`${classes.frame} ${classes.thirdFrame}`}>
            <h3>Liên hệ với chúng tôi</h3>
            <div className="infoItems">
              <div className="address">
                <FaMapMarkerAlt />
                <span> 123 Nguyễn Tri Phương, Hải Châu, Đà Nẵng</span>
              </div>
              <div className="address">
                <FaMobile />
                <span> 090 586 56 85</span>
              </div>
              <div className="email">
                <FaEnvelope />
                <span> ptstore.hotro@gmail.com</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
