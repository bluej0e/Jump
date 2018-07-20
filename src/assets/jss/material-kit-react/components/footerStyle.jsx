import { container } from "assets/jss/material-kit-react.jsx";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "10px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    justifySelf:'flex-start',
    order:1,
  },
  right: {
    justifySelf:'flex-end',
    order:2
  },
  center:{
    justifySelf:'center',
    order:2,
    "@media (max-width: 400px)": {
      order:3,
    }
  },
  footer: {
    color:'#f9f9f9',
    fontSize:'1rem',
    padding: "0.9375rem 0",
    display: "flex",
    zIndex: "2",
    position: "relative",
  },
  a: {
    color: "#FFF",
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container:{
    ...container,
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    textAlign:'center',
    "@media (max-width: 400px)": {
      flexDirection:'column',
    }
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
};

export default footerStyle;
