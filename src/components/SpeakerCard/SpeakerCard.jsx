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
import SpeakerSocial from "components/SpeakerCard/SpeakerSocial.jsx";

import teamStyle from "assets/jss/material-kit-react/views/homeSections/teamStyle.jsx";


class speakerCard extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <Card raised='true'>
            <GridItem xs={12} sm={8} md={6} className={classes.itemGrid}>
              <img src={this.props.cards.image} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
              {this.props.cards.name}
              <br />
              <small className={classes.smallTitle}>{this.props.cards.title}</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                {this.props.cards.text}
              </p>
            </CardBody>
          <CardFooter className={classes.justifyCenter}>
              <SpeakerSocial links={this.props.cards.links} />
          </CardFooter>
        </Card>
        </GridItem>
    );
  }
}


export default withStyles(teamStyle)(speakerCard);
