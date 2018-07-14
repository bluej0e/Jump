import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

import teamStyle from "assets/jss/material-kit-react/views/homeSections/teamStyle.jsx";




class SpeakerSocial extends React.Component {
  constructor(props) {
    super(props);
  }


  theRightIcon(link) {
    switch(link){
      case 'facebook':
        return 'fab fa-facebook';
      case 'twitter':
        return 'fab fa-twitter';
      case 'linkedin':
        return 'fab fa-linkedin';
      case 'instagram':
        return 'fab fa-instagram';
      case 'site':
        return 'fas fa-globe';
      default:
        return 'fas fa-external-link-alt';
    }
  }

  render() {
    const { classes, links } = this.props;
    const linkMapper = p => {
      (p[0] , p[1])
    };

    const components = [];

    Object.keys(links).forEach((link) => {
      const linkValue = links[link];
      if (linkValue !== '') {
        components.push(
          <Button
            key={link}
            justIcon
            color="transparent"
            className={classes.margin5}
           >
           <a href={linkValue} target="_blank">
           <i className={classes.socials + ' ' + this.theRightIcon(link)} />
           </a>
          </Button>
        );
      }
    });

    return (
      <div>
        {components}
      </div>
    );
  }
}


export default withStyles(teamStyle)(SpeakerSocial);
