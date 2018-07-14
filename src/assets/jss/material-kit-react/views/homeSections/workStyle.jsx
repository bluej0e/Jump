import { title } from "assets/jss/material-kit-react.jsx";

const workStyle = {
  section: {
    // background:'url(http://1.bp.blogspot.com/-S-pkqiT-87k/UdHWC7dhDrI/AAAAAAAALb0/9fdtV9-3z4E/s1600/plazaIndependencia.jpg) center center no-repeat',
    backgroundSize: 'cover',
    padding: "70px 0",
    width:'100%'
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default workStyle;
