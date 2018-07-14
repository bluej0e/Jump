import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import EventAvailable from "@material-ui/icons/EventAvailable";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from '@material-ui/core/Button';

import topStyle from "assets/jss/material-kit-react/views/homeSections/topStyle.jsx";

class TopSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>El primer evento que pone a los emprendedores en escena</h2>
            <h3 className={classes.description}>Martes 2 de Octubre. De: 9hs a 17hs</h3>
            <h4 className={classes.description}>Torre de Antel</h4>
            <br />
            <br />
            <div className="clockHolder">
              <h2 style={{color:'#f44336'}}>Solo faltan</h2>
              <br />
              <div id="countdownClockP" className={classes.countdownClock} />
              <br />
                <a target="_blank" href='https://calendar.google.com/event?action=TEMPLATE&tmeid=N2Y4b21iaHRyNWNxcWVuaXJkdmh2Y3M0MWEgdGhlanVtcGV2ZW50QG0&tmsrc=thejumpevent%40gmail.com'>
                  <Button style={{color:'#fff',backgroundColor:'#f44336'}} id="calbut" variant="raised" color="secondary" className={classes.button}>
                    <EventAvailable style={{margin:'0.1em',fontSize:'3em'}} className={classes.topIcon} />
                    <span>Save the date</span>
                  </Button>
                </a>
              <br />
            </div>
            <br />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(topStyle)(TopSection);
