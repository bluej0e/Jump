import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Faq from "components/Faq/Faq.jsx";

import workStyle from "assets/jss/material-kit-react/views/homeSections/workStyle.jsx";


const ranges = [
  {
    value: 'sponsor',
    label: 'Me interesa ser Sponsor',
  },
  {
    value: 'stand',
    label: 'Me gustaría tener un Stand',
  },
  {
    value: 'entrada',
    label: 'Quiero obtener una entrada',
  },
  {
    value: 'otro',
    label: 'Otra razón no listada',
  },
];

class SponsorSection extends React.Component {
  constructor(props) {
    super(props);

}


  render() {
    const { classes } = this.props;
    const { name, email } = this.state;

    return (

      <div className={classes.section}>
      <Card raised='true'>
        <GridContainer justify="center" id="mauticform_wrapper_jumpdatabase">
          <GridItem cs={12} sm={12} md={8}>

          </GridItem>
        </GridContainer>
      </Card>
      </div>
    );
  }
}

export default withStyles(workStyle)(SponsorSection);
