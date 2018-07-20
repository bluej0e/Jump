import { cardTitle, title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const teamStyle = {
  section: {
    // background: "#f0f0f0",
    padding: "60px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    margin: "-5em auto 2em",
    maxWidth:'250px'
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  gridtainer:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap:'wrap',

  },
  logoImg:{
    width: '200px',
    maxWidth:'33%',
    '&:hover': {
        transform: 'scale(1.1)',
       transition: '0.16s ease-in-out'
    },
  },
    logoImgSponsor:{
      width: '330px',
      maxWidth:'49%',
      '&:hover': {
          transform: 'scale(1.1)',
         transition: '0.16s ease-in-out'
      },
  }
};

export default teamStyle;
