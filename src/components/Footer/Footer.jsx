/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";


// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
import bochardgroup from 'assets/img/logos/bochardgroup.svg';



function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          Website design by&nbsp;
          <a
            style={{color:"#fff"}}
            href="http://www.1up.uy"
            target="_blank"
          >
           1UP.uy
          </a>

          <a
            href="http://www.1up.uy"
            target="_blank"
          >
          <div className="oneup" data-glitch="A">A</div>
          </a>
        </div>



        <div className={classes.center}>
            Jump! &copy; {1900 + new Date().getYear()}
        </div>

        <div className={classes.right}>
          Experiencia diseñada por
          <a
            style={{color:"#fff"}}
            target="_blank"
            href="http://www.bochardgroup.com/"
            >
            <img src={bochardgroup}  alt={bochardgroup} />
          </a>
        </div>

      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
