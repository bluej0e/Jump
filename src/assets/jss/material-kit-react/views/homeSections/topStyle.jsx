import { title } from "assets/jss/material-kit-react.jsx";

const topStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    lineHeight:'1.1em'
  },
  description: {
    color: "#999"
  },
  countdownClock:{
    display:'flex',
    justifyContent:'center',
      "@media (min-width: 576px)": {
        transform: 'scale(0.8)',
        webkitTransform: 'scale(0.6)',
      },
      "@media (min-width: 768px)": {
        transform: 'scale(1)',
        webkitTransform: 'scale(1)',
      },
      "@media (min-width: 992px)": {
        transform: 'scale(1)',
        webkitTransform: 'scale(1)',
      }
    }
};

export default topStyle;
