import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SpeakerCard from "components/SpeakerCard/SpeakerCard.jsx";

import teamStyle from "assets/jss/material-kit-react/views/homeSections/teamStyle.jsx";

import peopleList from 'components/peopleList/peopleList';

const speakerPeeps = peopleList.filter(i => {
    return i.role === 'speaker';
  }
);


class TeamSection extends React.Component {
  constructor(props) {
    super(props);
    const cards = [];
    for (let i = 0; i < speakerPeeps.length; i++) {
        cards.push({
          name:speakerPeeps[i].name,
          title:speakerPeeps[i].title,
          image:speakerPeeps[i].image,
          text:speakerPeeps[i].text,
          links:speakerPeeps[i].links
        });
      }
      this.state = { cards };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Speakers</h2>
        <div>
          <GridContainer>
            {this.state.cards.map((item, index) => (
              <SpeakerCard key={index} cards={item}/>
              ))
            }
          </GridContainer>
        </div>
      </div>
    );
  }
}


export default withStyles(teamStyle)(TeamSection);
