import { container, title } from "assets/jss/material-kit-react.jsx";

const homeStyle = {
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  container: {
    zIndex: "12",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 20px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  background: {
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    zIndex: 0,
  },
};

export default homeStyle;
